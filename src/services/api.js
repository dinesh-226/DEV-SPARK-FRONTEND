// Determine API base URL dynamically for local dev and live Vercel production
const getApiBase = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return 'https://dev-spark-backend.vercel.app/api';
  }
  return '/api';
};

const API_BASE = getApiBase();

export const registerTeamAPI = async (teamData) => {
  try {
    const res = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teamData)
    });
    return await res.json();
  } catch (error) {
    console.error('API Error registerTeam:', error);
    return { success: false, message: 'Network connection failed. Please check server.' };
  }
};

export const fetchTeamsAPI = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}/teams?${query}`);
    return await res.json();
  } catch (error) {
    console.error('API Error fetchTeams:', error);
    return { success: false, data: [] };
  }
};

export const fetchTeamByIdAPI = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/teams/${id}`);
    return await res.json();
  } catch (error) {
    console.error('API Error fetchTeamById:', error);
    return { success: false, message: 'Could not connect to server.' };
  }
};

export const getTeamByIdAPI = fetchTeamByIdAPI;

export const fetchStatsAPI = async () => {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    return await res.json();
  } catch (error) {
    console.error('API Error fetchStats:', error);
    return { 
      success: true, 
      stats: {
        totalTeams: 0,
        totalParticipants: 0,
        verifiedTeams: 0,
        maxPrizePool: '₹19,000',
        totalPoints: 500
      }
    };
  }
};

export const adminLoginAPI = async (passcode) => {
  try {
    const res = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode })
    });
    return await res.json();
  } catch (error) {
    return { success: false, message: 'Server connection error' };
  }
};

export const getAllTeamsAdminAPI = async (passcode) => {
  try {
    // Authenticate first
    const authRes = await adminLoginAPI(passcode);
    if (!authRes.success) {
      return { success: false, message: authRes.message || 'Invalid Coordinator Passcode' };
    }

    const dataRes = await fetch(`${API_BASE}/teams`);
    const data = await dataRes.json();
    const statsRes = await fetchStatsAPI();

    return {
      success: true,
      data: {
        teams: data.data || [],
        stats: statsRes.stats || {}
      }
    };
  } catch (error) {
    return { success: false, message: 'Admin request failed' };
  }
};

export const exportTeamsCsvAPI = (passcode) => {
  window.open(`${API_BASE}/admin/export-csv?passcode=${encodeURIComponent(passcode)}`, '_blank');
};

export const updateTeamStatusAPI = async (id, data) => {
  try {
    const res = await fetch(`${API_BASE}/teams/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error) {
    return { success: false, message: 'Update failed.' };
  }
};

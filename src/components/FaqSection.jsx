import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Can students from non-engineering streams (BCA, MCA, BBA, Commerce, Sciences) participate?',
      a: 'Yes, absolutely! The competition is strictly open to all bona fide registered undergraduate and postgraduate students from all branches and degree programs (including B.Tech CSE, IT, ME, CE, ECE, BCA, MCA, B.Sc, BBA, B.Com, and allied disciplines). Cross-departmental teaming is actively encouraged.'
    },
    {
      q: 'What is the required team size?',
      a: 'Teams must strictly comprise a minimum of 2 members and a maximum of 3 members. Solo participation is prohibited to foster collaborative peer development. An individual student can represent only one team.'
    },
    {
      q: 'Is there any mid-event elimination after Round 1?',
      a: 'No! DevSpark operates on a 350-point cumulative non-eliminatory model. Every registered team participates in both Round 1 (LogicSprint - 100 Pts) and Round 2 (DevSprint - 250 Pts). Final standings are determined strictly by aggregate score.'
    },
    {
      q: 'Are Generative AI tools (ChatGPT, Gemini, Claude, Copilot, Cursor, v0) allowed?',
      a: 'Yes! Generative AI tools are fully authorized for scaffolding, boilerplate generation, and rapid UI/logic synthesis. However, squads must abide by the "Zero-Black-Box" rule (every member must be able to explain the code) and maintain an AI_PROMPT_LOG.md file.'
    },
    {
      q: 'What are the 3 mandatory submission deliverables?',
      a: '1. Working Source Code (Web app, Mobile client, or CLI tool), 2. README.md with step-by-step local setup or working deployment link (Vercel, Netlify, Streamlit), and 3. AI_PROMPT_LOG.md documenting the top 3–5 system and scaffolding prompts.'
    },
    {
      q: 'Will all participants receive certificates?',
      a: 'Yes! Every registered team member who completes the sprint receives an official Certificate of Participation issued by the Department of Computer Science & Engineering, ABIET.'
    }
  ];

  return (
    <section id="faq" style={{ padding: '5.5rem 0', background: '#e8f2ed', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            FAQ & GUIDELINES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.5rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '640px', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Everything you need to know about DevSpark rules, eligibility, scoring, and logistics.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="dribbble-card"
                style={{
                  padding: '1.4rem 1.75rem',
                  cursor: 'pointer',
                  background: '#ffffff',
                  border: isOpen ? '1.5px solid #059669' : '1px solid rgba(5, 150, 105, 0.15)',
                  boxShadow: isOpen ? '0 6px 20px rgba(5, 150, 105, 0.12)' : '0 2px 8px rgba(6, 78, 59, 0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: isOpen ? '#059669' : '#0f2e22', fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
                    {faq.q}
                  </h4>
                  <div style={{ color: isOpen ? '#059669' : '#4b5563', flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {isOpen && (
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#4b5563',
                    lineHeight: 1.65,
                    margin: '0.85rem 0 0',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(5, 150, 105, 0.08)'
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

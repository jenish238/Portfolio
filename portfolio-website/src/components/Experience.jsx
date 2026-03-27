import React from 'react';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--white)' }}>Professional Experience</h2>
        
        <div className="timeline-container">
          {/* Timeline Item 1 */}
          <div className="slide-in-left stagger-1 timeline-item">
            <div className="timeline-dot"></div>
            <h3 className="experience-title">
              Senior Salesforce Developer <span style={{ color: 'var(--primary)' }}>@ MV Clouds Pvt. Ltd.</span>
            </h3>
            <p className="experience-date">
              March 2025 – Present | Ahmedabad
            </p>
            <ul className="experience-list">
              <li>Led system optimization and org audits, improving performance, removing redundant automation, and ensuring top-tier data governance.</li>
              <li>Built and integrated AI-driven solutions (Gemini AI) for voice-to-text processing, data summarization, chatbot interactions, and automated reporting.</li>
            </ul>
          </div>

          {/* Timeline Item 2 */}
          <div className="slide-in-left stagger-2 timeline-item">
            <div className="timeline-dot"></div>
            <h3 className="experience-title">
              Salesforce Developer <span style={{ color: 'var(--primary)' }}>@ MV Clouds Pvt. Ltd.</span>
            </h3>
            <p className="experience-date">
              February 2023 – February 2025 | Ahmedabad
            </p>
            <ul className="experience-list">
              <li>Delivered end-to-end Salesforce solutions across Healthcare, Finance, Construction, Real Estate, and Insurance using Sales Cloud, Service Cloud, and OmniStudio.</li>
              <li>Designed and implemented scalable automation frameworks using Flows, Apex, and Validation Rules to streamline complex business processes.</li>
              <li>Developed and optimized custom solutions using Apex, Triggers, Lightning Web Components (LWC), Visualforce, and OmniStudio (OmniScripts, FlexCards).</li>
              <li>Implemented secure third-party integrations using REST/SOAP APIs, including DocuSign, Stripe, Zoho Sign, OpenSolar, WhatsApp, Zapier, and Google Sheets.</li>
            </ul>
          </div>

          {/* Timeline Item 3 */}
          <div className="slide-in-left stagger-3 timeline-item">
            <div className="timeline-dot"></div>
            <h3 className="experience-title">
              Salesforce Trainee <span style={{ color: 'var(--primary)' }}>@ MV Clouds Pvt. Ltd.</span>
            </h3>
            <p className="experience-date">
              September 2022 – January 2023 | Ahmedabad
            </p>
            <ul className="experience-list">
              <li>Gained hands-on experience in Salesforce configuration, automated workflows, and Apex development.</li>
              <li>Shadowed senior developers on complex enterprise implementations, assisting with testing, deployments, and debugging.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

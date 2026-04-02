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
              <li>Directed full-scale enterprise <strong>Salesforce Org Audits</strong>, identifying and refactoring 100+ legacy automation rules to improve system speed and maintainability.</li>
              <li>Architected a cutting-edge <strong>AI-powered Data Summarization</strong> engine utilizing <strong>Gemini AI</strong>, resulting in a 40% reduction in manual case triage time for client support teams.</li>
              <li>Pioneered the use of <strong>Agentforce and LWC</strong> to build an autonomous customer engagement agent, bridging Salesforce data with external voice-to-text APIs.</li>
              <li>Collaborated with cross-functional teams to design secure, highly performant custom middleware for synchronous data synchronization between Salesforce and ERP systems.</li>
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
              <li>Delivered over 12 complex <strong>Salesforce Implementations</strong> for clients in Healthcare, Financial Services, Real Estate, and **Renewable Energy** (Solar and Wind).</li>
              <li>Mastered the development of high-performance <strong>Lightning Web Components (LWC)</strong> and complex <strong>Apex Trigger Frameworks</strong> to support multi-step business logic and massive data volumes.</li>
              <li>Implemented comprehensive <strong>CRM Automation workflows</strong> using Advanced Flows, OmniStudio (OmniScript, FlexCards), and Approval Processes, driving operational efficiency gains of 25% for internal teams.</li>
              <li>Engineered secure third-party integrations with global services including <strong>DocuSign, Stripe, OpenSolar, and WhatsApp Business API</strong>, facilitating seamless digital transformations for multiple enterprise clients.</li>
              <li>Developed custom <strong>REST and SOAP APIs</strong> to facilitate real-time synchronization between Salesforce and legacy systems, ensuring data integrity and high availability.</li>
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
              <li>Developed a strong foundation in <strong>Salesforce Administration and Development</strong>, completing intensive training on Object Modeling, Security Models, and Declarative Automation.</li>
              <li>Assisted in the successful delivery of 3 major projects by performing rigorous <strong>User Acceptance Testing (UAT)</strong>, debugging Apex logic, and building custom reports and dashboards.</li>
              <li>Mastered the principles of <strong>Clean Code and Agile Methodologies</strong>, actively participating in sprint planning and daily stand-up meetings to ensure timely project delivery.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

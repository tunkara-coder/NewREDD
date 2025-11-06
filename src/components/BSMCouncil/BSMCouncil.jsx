import React from 'react'
import '../../styles/App.css'

const BSMCouncil = () => {
  const councilMembers = [
    {
      id: 1,
      name: 'Dr. Aminata Jallow',
      role: 'Chairperson',
      organization: 'Ministry of Environment',
      expertise: 'Environmental Policy',
      contact: 'aminata.jallow@gov.gm'
    },
    {
      id: 2,
      name: 'Mr. Lamin Ceesay',
      role: 'Community Representative',
      organization: 'Kartong Community Council',
      expertise: 'Community Development',
      contact: 'lamin.ceesay@community.gm'
    },
    {
      id: 3,
      name: 'Ms. Fatou Njie',
      role: 'Finance Director',
      organization: 'Gambia Central Bank',
      expertise: 'Financial Management',
      contact: 'fatou.njie@centralbank.gm'
    },
    {
      id: 4,
      name: 'Dr. Samuel Mensah',
      role: 'Technical Advisor',
      organization: 'International Carbon Experts',
      expertise: 'Carbon Methodology',
      contact: 's.mensah@carbon.org'
    },
    {
      id: 5,
      name: 'Ms. Isatou Bojang',
      role: 'Environmental Officer',
      organization: 'Gambia Environmental Alliance',
      expertise: 'Conservation',
      contact: 'isatou.bojang@environment.gm'
    },
    {
      id: 6,
      name: 'Mr. Mohammed Sarr',
      role: 'Legal Counsel',
      organization: 'Sarr & Partners Law Firm',
      expertise: 'Environmental Law',
      contact: 'm.sarr@lawfirm.gm'
    }
  ]

  const councilResponsibilities = [
    'Oversee benefit-sharing mechanism implementation',
    'Approve community development projects',
    'Monitor financial transparency and accountability',
    'Ensure compliance with REDD+ standards',
    'Resolve community grievances and disputes',
    'Approve annual budget and disbursements'
  ]

  const recentDecisions = [
    {
      id: 1,
      title: 'Q1 2024 Budget Approval',
      date: '2024-01-15',
      status: 'Approved',
      description: 'Approved $150,000 for community development projects'
    },
    {
      id: 2,
      title: 'Community Action Plan 2024',
      date: '2024-01-10',
      status: 'Implemented',
      description: 'Finalized community development priorities for 2024'
    },
    {
      id: 3,
      title: 'Grievance Resolution Protocol',
      date: '2024-01-05',
      status: 'Active',
      description: 'Implemented new community grievance resolution system'
    }
  ]

  return (
    <div className="bsm-council">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">👥 BSM Council Governance</h2>
          <div className="status-badge status-info">Active • Transparent</div>
        </div>

        {/* Council Overview */}
        <div className="card">
          <h3 className="card-title">About the Benefit-Sharing Mechanism Council</h3>
          <p style={{ lineHeight: '1.6', color: '#475569', marginBottom: '1.5rem' }}>
            The BSM Council is responsible for ensuring fair and transparent distribution of project benefits 
            to local communities while maintaining the highest standards of governance and accountability. 
            The council comprises representatives from government, local communities, financial institutions, 
            and environmental experts.
          </p>
          
          <div className="grid grid-cols-2">
            <div>
              <h4 style={{ marginBottom: '1rem', color: '#059669' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                {councilResponsibilities.map((responsibility, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', color: '#0ea5e9' }}>Governance Principles</h4>
              <div style={{ padding: '1.5rem', background: '#f0f9ff', borderRadius: '0.75rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong>Transparency:</strong> All decisions and financial transactions are publicly accessible
                  </div>
                  <div>
                    <strong>Accountability:</strong> Regular reporting and independent audits
                  </div>
                  <div>
                    <strong>Community Participation:</strong> Active involvement of local communities in decision-making
                  </div>
                  <div>
                    <strong>Fairness:</strong> Equitable distribution of benefits according to established criteria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Council Members */}
        <div className="card">
          <h3 className="card-title">Council Members</h3>
          <div className="grid grid-cols-3">
            {councilMembers.map(member => (
              <div key={member.id} className="council-member">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
                <div className="member-organization">{member.organization}</div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                  {member.expertise}
                </div>
                <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#0ea5e9' }}>
                  {member.contact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Decisions */}
        <div className="card">
          <h3 className="card-title">Recent Council Decisions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentDecisions.map(decision => (
              <div key={decision.id} style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '0.75rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a' }}>{decision.title}</div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{decision.description}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{decision.date}</div>
                    <span className={`status-badge status-${decision.status === 'Approved' ? 'success' : decision.status === 'Implemented' ? 'info' : 'warning'}`}>
                      {decision.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Schedule */}
        <div className="grid grid-cols-2">
          <div className="card">
            <h3 className="card-title">Meeting Schedule</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                padding: '1rem', 
                background: '#f0fdf4', 
                borderRadius: '0.5rem',
                border: '1px solid #bbf7d0'
              }}>
                <div style={{ fontWeight: 600 }}>Quarterly Review Meeting</div>
                <div style={{ fontSize: '0.875rem', color: '#059669' }}>February 15, 2024 • 10:00 AM</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Virtual Meeting</div>
              </div>
              <div style={{ 
                padding: '1rem', 
                background: '#f0f9ff', 
                borderRadius: '0.5rem',
                border: '1px solid #bae6fd'
              }}>
                <div style={{ fontWeight: 600 }}>Community Consultation</div>
                <div style={{ fontSize: '0.875rem', color: '#0ea5e9' }}>March 1, 2024 • 2:00 PM</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Kartong Community Center</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Council Documents</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                📄 Council Charter & Terms of Reference
              </button>
              <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                📊 Meeting Minutes & Decisions
              </button>
              <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                ⚖️ Governance Policies
              </button>
              <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                💰 Financial Oversight Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BSMCouncil
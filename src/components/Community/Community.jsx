import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import '../../styles/App.css'

const Community = () => {
  const [activeTab, setActiveTab] = useState('voting')
  const [newGrievance, setNewGrievance] = useState({ title: '', description: '' })
  const [selectedVote, setSelectedVote] = useState(null)

  const votingOptions = [
    { 
      id: 1, 
      title: 'School Infrastructure', 
      description: 'Renovate and equip primary school buildings in Kartong and surrounding villages',
      budget: 75000,
      currentVotes: 156,
      totalVotes: 320,
      color: '#059669'
    },
    { 
      id: 2, 
      title: 'Healthcare Center', 
      description: 'Build new community health center with basic medical equipment',
      budget: 120000,
      currentVotes: 98,
      totalVotes: 320,
      color: '#0ea5e9'
    },
    { 
      id: 3, 
      title: 'Agricultural Support', 
      description: 'Provide farming equipment, seeds, and training programs for local farmers',
      budget: 60000,
      currentVotes: 203,
      totalVotes: 320,
      color: '#f59e0b'
    },
    { 
      id: 4, 
      title: 'Clean Water Project', 
      description: 'Install water purification systems and repair existing water wells',
      budget: 85000,
      currentVotes: 142,
      totalVotes: 320,
      color: '#ef4444'
    }
  ]

  const grievances = [
    { 
      id: 1, 
      title: 'Water well maintenance needed in Kartong', 
      description: 'The main community water well in Kartong needs urgent maintenance and repair',
      status: 'Under Review',
      date: '2024-01-20',
      user: 'Community Member',
      priority: 'High'
    },
    { 
      id: 2, 
      title: 'Scholarship allocation query', 
      description: 'When will the education scholarship funds for 2024 be distributed to students?',
      status: 'Resolved',
      date: '2024-01-18',
      user: 'Parent Representative',
      priority: 'Medium'
    },
    { 
      id: 3, 
      title: 'Project boundary clarification', 
      description: 'Need clarification on the project boundaries near the mangrove restoration area',
      status: 'In Progress',
      date: '2024-01-22',
      user: 'Community Leader',
      priority: 'Medium'
    }
  ]

  const communityMetrics = [
    { label: 'Total Households', value: '2,450', trend: '+5%' },
    { label: 'Active Participants', value: '1,280', trend: '+12%' },
    { label: 'Grievances Resolved', value: '89%', trend: '+8%' },
    { label: 'Voting Participation', value: '63%', trend: '+15%' },
  ]

  const voteDistribution = votingOptions.map(option => ({
    name: option.title,
    votes: option.currentVotes,
    color: option.color
  }))

  const handleSubmitGrievance = (e) => {
    e.preventDefault()
    if (newGrievance.title.trim() && newGrievance.description.trim()) {
      alert('Grievance submitted successfully! You will receive a tracking number via SMS.')
      setNewGrievance({ title: '', description: '' })
    }
  }

  const handleVote = (optionId) => {
    setSelectedVote(optionId)
    alert('Thank you for voting! Your vote has been securely recorded on the blockchain.')
  }

  const getVotePercentage = (option) => {
    return ((option.currentVotes / option.totalVotes) * 100).toFixed(1)
  }

  return (
    <div className="community">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">🤝 Community Engagement Portal</h2>
          <div className="status-badge status-success">FPIC Active • Live Voting</div>
        </div>

        {/* Community Metrics */}
        <div className="grid grid-cols-4">
          {communityMetrics.map((metric, index) => (
            <div key={index} className="metric">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-trend trend-up">↑ {metric.trend}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginBottom: '2rem', 
          borderBottom: '2px solid #e2e8f0',
          flexWrap: 'wrap'
        }}>
          <button 
            className={activeTab === 'voting' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('voting')}
            style={{ 
              border: 'none', 
              background: 'none',
              fontSize: '1.1rem',
              padding: '1rem 1.5rem'
            }}
          >
            🗳️ Community Voting
          </button>
          <button 
            className={activeTab === 'grievances' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('grievances')}
            style={{ 
              border: 'none', 
              background: 'none',
              fontSize: '1.1rem',
              padding: '1rem 1.5rem'
            }}
          >
            📢 Submit Grievance
          </button>
          <button 
            className={activeTab === 'funds' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('funds')}
            style={{ 
              border: 'none', 
              background: 'none',
              fontSize: '1.1rem',
              padding: '1rem 1.5rem'
            }}
          >
            💰 Trust Fund Status
          </button>
        </div>

        {/* Community Voting */}
        {activeTab === 'voting' && (
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Community Action Plan Voting 2024</h3>
              <div className="status-badge status-info">Active until February 15, 2024</div>
            </div>
            
            <p style={{ marginBottom: '2rem', color: '#64748b', fontSize: '1.1rem' }}>
              Vote on how to allocate the Community Trust Fund for 2024. Each registered community member gets one vote. 
              Results will determine the priority projects for the coming year.
            </p>

            <div className="grid grid-cols-2">
              {/* Voting Options */}
              <div>
                <h4 style={{ marginBottom: '1.5rem', color: '#059669' }}>Project Options</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {votingOptions.map(option => (
                    <div 
                      key={option.id}
                      style={{ 
                        padding: '1.5rem',
                        border: '2px solid',
                        borderColor: selectedVote === option.id ? option.color : '#e2e8f0',
                        borderRadius: '1rem',
                        backgroundColor: selectedVote === option.id ? `${option.color}10` : 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => handleVote(option.id)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <h4 style={{ color: option.color, fontWeight: 700 }}>{option.title}</h4>
                        <div style={{ 
                          padding: '0.5rem 1rem', 
                          backgroundColor: option.color, 
                          color: 'white',
                          borderRadius: '0.5rem',
                          fontWeight: 600,
                          fontSize: '0.875rem'
                        }}>
                          ${option.budget.toLocaleString()}
                        </div>
                      </div>
                      <p style={{ marginBottom: '1rem', color: '#64748b' }}>{option.description}</p>
                      
                      <div style={{ marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Community Support:</span>
                          <span style={{ fontWeight: 600 }}>{getVotePercentage(option)}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ 
                              width: `${getVotePercentage(option)}%`,
                              backgroundColor: option.color
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#64748b' }}>
                        <span>{option.currentVotes} votes</span>
                        <span>{option.totalVotes - option.currentVotes} votes remaining</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vote Distribution Chart */}
              <div>
                <h4 style={{ marginBottom: '1.5rem', color: '#0ea5e9' }}>Current Vote Distribution</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={voteDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="votes"
                    >
                      {voteDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                {/* Voting Instructions */}
                <div style={{ 
                  padding: '1.5rem', 
                  background: '#f0f9ff', 
                  borderRadius: '1rem',
                  marginTop: '2rem'
                }}>
                  <h5 style={{ marginBottom: '1rem', color: '#0ea5e9' }}>Voting Instructions</h5>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Each registered community member gets one vote</li>
                    <li>Voting ends on February 15, 2024</li>
                    <li>Results will be announced at the community meeting</li>
                    <li>All votes are recorded on the blockchain for transparency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grievance Portal */}
        {activeTab === 'grievances' && (
          <div className="grid grid-cols-2">
            <div className="card">
              <h3 className="card-title">Submit New Grievance</h3>
              <form onSubmit={handleSubmitGrievance}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#374151' }}>
                    Grievance Title
                  </label>
                  <input 
                    type="text" 
                    value={newGrievance.title}
                    onChange={(e) => setNewGrievance({...newGrievance, title: e.target.value})}
                    placeholder="Brief description of your concern..."
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#374151' }}>
                    Detailed Description
                  </label>
                  <textarea 
                    rows="6"
                    value={newGrievance.description}
                    onChange={(e) => setNewGrievance({...newGrievance, description: e.target.value})}
                    placeholder="Please provide more details about your concern, including location, people involved, and suggested resolution..."
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  Submit Grievance
                </button>
              </form>

              {/* Pictogram Navigation */}
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h4 style={{ marginBottom: '1.5rem', color: '#059669' }}>Quick Access</h4>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {['🏥', '🎓', '💧', '🌿', '🏠', '💰'].map((icon, index) => (
                    <div key={index} style={{ textAlign: 'center', cursor: 'pointer', padding: '1rem' }}>
                      <div style={{ fontSize: '2.5rem' }}>{icon}</div>
                      <div style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                        {['Health', 'Education', 'Water', 'Environment', 'Housing', 'Finance'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Recent Grievances & Status</h3>
              <div style={{ maxHeight: 600, overflowY: 'auto' }}>
                {grievances.map(grievance => (
                  <div key={grievance.id} style={{ 
                    padding: '1.5rem', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '0.75rem',
                    marginBottom: '1rem',
                    background: '#f8fafc'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a' }}>{grievance.title}</div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem' }}>
                          By: {grievance.user} • {grievance.date}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className={`status-badge status-${grievance.status === 'Resolved' ? 'success' : grievance.status === 'In Progress' ? 'warning' : 'info'}`}>
                          {grievance.status}
                        </span>
                        <div style={{ 
                          marginTop: '0.5rem',
                          padding: '0.25rem 0.75rem',
                          background: grievance.priority === 'High' ? '#fef2f2' : '#fffbeb',
                          color: grievance.priority === 'High' ? '#dc2626' : '#d97706',
                          borderRadius: '0.375rem',
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}>
                          {grievance.priority} Priority
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
                      {grievance.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Trust Fund Status */}
        {activeTab === 'funds' && (
          <div className="card">
            <h3 className="card-title">Community Trust Fund Status</h3>
            <div className="grid grid-cols-2">
              <div>
                <h4 style={{ marginBottom: '1.5rem', color: '#059669' }}>Fund Allocation</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { category: 'Available for 2024 Projects', amount: 340000, percentage: 100 },
                    { category: 'Education & Scholarships', amount: 75000, percentage: 22 },
                    { category: 'Healthcare', amount: 120000, percentage: 35 },
                    { category: 'Infrastructure', amount: 85000, percentage: 25 },
                    { category: 'Agriculture', amount: 60000, percentage: 18 },
                  ].map((fund, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      borderBottom: '1px solid #f1f5f9'
                    }}>
                      <span style={{ fontWeight: 500 }}>{fund.category}</span>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 700, color: '#059669' }}>${fund.amount.toLocaleString()}</div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{fund.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '1.5rem', color: '#0ea5e9' }}>Recent Disbursements</h4>
                <div style={{ fontSize: '0.95rem' }}>
                  {[
                    { description: 'Education Scholarships - 45 students', amount: 25000, date: 'Jan 15, 2024' },
                    { description: 'Healthcare Supplies & Equipment', amount: 18000, date: 'Jan 10, 2024' },
                    { description: 'Agricultural Training Program', amount: 12000, date: 'Jan 5, 2024' },
                    { description: 'Water Well Maintenance', amount: 8000, date: 'Dec 28, 2023' },
                    { description: 'School Renovation Materials', amount: 15000, date: 'Dec 20, 2023' },
                  ].map((disbursement, index) => (
                    <div key={index} style={{ 
                      padding: '1rem', 
                      borderBottom: '1px solid #f1f5f9',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div style={{ fontWeight: 500 }}>{disbursement.description}</div>
                        <div style={{ color: '#64748b', fontSize: '0.875rem' }}>{disbursement.date}</div>
                      </div>
                      <div style={{ fontWeight: 700, color: '#059669' }}>${disbursement.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community
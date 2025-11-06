// [file name]: DataManagement.jsx
import React, { useState } from 'react'
import '../../styles/App.css'

const DataManagement = () => {
  const [activeTab, setActiveTab] = useState('quality')
  const [searchTerm, setSearchTerm] = useState('')

  const dataQualityMetrics = [
    { metric: 'Completeness', score: 96, target: 95, status: 'Good' },
    { metric: 'Accuracy', score: 98, target: 95, status: 'Excellent' },
    { metric: 'Timeliness', score: 92, target: 90, status: 'Good' },
    { metric: 'Consistency', score: 94, target: 95, status: 'Good' },
    { metric: 'Validity', score: 97, target: 95, status: 'Excellent' }
  ]

  const dataRecords = [
    { id: 1, type: 'Carbon', date: '2024-01-26', status: 'Verified', quality: 98, size: '2.5MB' },
    { id: 2, type: 'Financial', date: '2024-01-25', status: 'Pending', quality: 95, size: '1.2MB' },
    { id: 3, type: 'Community', date: '2024-01-24', status: 'Verified', quality: 96, size: '0.8MB' },
    { id: 4, type: 'MRV', date: '2024-01-23', status: 'Verified', quality: 99, size: '15.7MB' },
    { id: 5, type: 'Carbon', date: '2024-01-22', status: 'Rejected', quality: 85, size: '3.1MB' }
  ]

  const users = [
    { id: 1, name: 'Field Team A', role: 'Data Collector', lastActive: '2 hours ago', status: 'Active' },
    { id: 2, name: 'Finance Dept', role: 'Financial Data', lastActive: '1 day ago', status: 'Active' },
    { id: 3, name: 'Community Liaison', role: 'Community Data', lastActive: '3 hours ago', status: 'Active' },
    { id: 4, name: 'MRV Specialist', role: 'Technical Data', lastActive: '1 week ago', status: 'Inactive' }
  ]

  const filteredRecords = dataRecords.filter(record =>
    record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="data-management">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">📋 Data Management & Quality Control</h2>
          <div className="status-badge status-info">Admin Access • Quality Control</div>
        </div>

        {/* Management Overview */}
        <div className="grid grid-cols-4">
          <div className="metric">
            <div className="metric-value">1,247</div>
            <div className="metric-label">Total Records</div>
          </div>
          <div className="metric">
            <div className="metric-value">96.4%</div>
            <div className="metric-label">Data Quality</div>
          </div>
          <div className="metric">
            <div className="metric-value">23</div>
            <div className="metric-label">Pending Review</div>
          </div>
          <div className="metric">
            <div className="metric-value">8</div>
            <div className="metric-label">Active Users</div>
          </div>
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
            className={activeTab === 'quality' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('quality')}
          >
            📊 Data Quality
          </button>
          <button 
            className={activeTab === 'records' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('records')}
          >
            📁 Data Records
          </button>
          <button 
            className={activeTab === 'users' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('users')}
          >
            👥 User Management
          </button>
          <button 
            className={activeTab === 'exports' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveTab('exports')}
          >
            💾 Data Exports
          </button>
        </div>

        {/* Data Quality Tab */}
        {activeTab === 'quality' && (
          <div className="grid grid-cols-2">
            <div className="card">
              <h3 className="card-title">Data Quality Metrics</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {dataQualityMetrics.map((item, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600 }}>{item.metric}</span>
                      <span style={{ fontWeight: 700, color: item.score >= item.target ? '#059669' : '#ef4444' }}>
                        {item.score}% / {item.target}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${item.score}%`,
                          background: `linear-gradient(90deg, ${
                            item.score >= 95 ? '#059669' : 
                            item.score >= 90 ? '#0ea5e9' : 
                            '#f59e0b'
                          }, ${
                            item.score >= 95 ? '#10b981' : 
                            item.score >= 90 ? '#38bdf8' : 
                            '#fbbf24'
                          })`
                        }}
                      ></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                      <span>Status: {item.status}</span>
                      <span>Target: {item.target}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Quality Control Actions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button className="btn btn-primary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  🔍 Run Data Validation
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  📋 Generate Quality Report
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  🎯 Set Quality Targets
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  ⚡ Schedule Auto-Validation
                </button>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f9ff', borderRadius: '0.75rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#0ea5e9' }}>Recent Quality Issues</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Incomplete carbon data</span>
                    <span className="status-badge status-warning">Medium</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Financial record mismatch</span>
                    <span className="status-badge status-error">High</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Community data delay</span>
                    <span className="status-badge status-info">Low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Records Tab */}
        {activeTab === 'records' && (
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className="card-title">Data Records</h3>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ 
                    padding: '0.5rem 1rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.5rem',
                    width: '300px'
                  }}
                />
                <button className="btn btn-primary">
                  + Add Record
                </button>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>ID</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Type</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Date</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Quality</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Size</th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map(record => (
                    <tr key={record.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>#{record.id}</td>
                      <td style={{ padding: '1rem' }}>
                        <span className={`status-badge status-${record.type === 'Carbon' ? 'success' : record.type === 'Financial' ? 'info' : 'warning'}`}>
                          {record.type}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>{record.date}</td>
                      <td style={{ padding: '1rem' }}>
                        <span className={`status-badge status-${record.status === 'Verified' ? 'success' : record.status === 'Pending' ? 'warning' : 'error'}`}>
                          {record.status}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ 
                            width: '60px', 
                            height: '8px', 
                            backgroundColor: '#e2e8f0', 
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <div 
                              style={{ 
                                height: '100%', 
                                backgroundColor: record.quality >= 95 ? '#059669' : record.quality >= 90 ? '#0ea5e9' : '#f59e0b',
                                width: `${record.quality}%`
                              }} 
                            />
                          </div>
                          <span style={{ fontSize: '0.875rem' }}>{record.quality}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>{record.size}</td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                            View
                          </button>
                          <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                            Edit
                          </button>
                          {record.status === 'Pending' && (
                            <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                              Verify
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className="card">
            <h3 className="card-title">User Management</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {users.map(user => (
                <div key={user.id} style={{ 
                  padding: '1.5rem', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{user.name}</div>
                    <div style={{ color: '#64748b', marginTop: '0.25rem' }}>{user.role}</div>
                    <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className={`status-badge status-${user.status === 'Active' ? 'success' : 'error'}`}>
                      {user.status}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-secondary" style={{ fontSize: '0.75rem' }}>
                        Edit
                      </button>
                      <button className="btn btn-secondary" style={{ fontSize: '0.75rem' }}>
                        Permissions
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0fdf4', borderRadius: '0.75rem' }}>
              <h4 style={{ marginBottom: '1rem', color: '#059669' }}>Add New User</h4>
              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{ 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.5rem' 
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{ 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.5rem' 
                  }}
                />
                <select style={{ 
                  padding: '0.75rem', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '0.5rem' 
                }}>
                  <option value="">Select Role</option>
                  <option value="admin">Administrator</option>
                  <option value="data_entry">Data Entry</option>
                  <option value="viewer">Viewer</option>
                  <option value="auditor">Auditor</option>
                </select>
                <button className="btn btn-primary">
                  Create User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data Exports Tab */}
        {activeTab === 'exports' && (
          <div className="grid grid-cols-2">
            <div className="card">
              <h3 className="card-title">Data Export Templates</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  📊 Carbon Data Report (PDF)
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  💰 Financial Summary (Excel)
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  🤝 Community Activities (CSV)
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  📈 MRV Data Export (JSON)
                </button>
                <button className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                  🌐 Full Project Data (ZIP)
                </button>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Custom Export</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Data Types</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Carbon', 'Financial', 'Community', 'MRV', 'All'].map(type => (
                      <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <input type="checkbox" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date Range</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="date" style={{ flex: 1, padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
                    <span style={{ display: 'flex', alignItems: 'center' }}>to</span>
                    <input type="date" style={{ flex: 1, padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Format</label>
                  <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}>
                    <option value="csv">CSV</option>
                    <option value="excel">Excel</option>
                    <option value="json">JSON</option>
                    <option value="pdf">PDF Report</option>
                  </select>
                </div>
                <button className="btn btn-primary">
                  Generate Export
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DataManagement
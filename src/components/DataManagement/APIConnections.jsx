// [file name]: APIConnections.jsx
import React, { useState } from 'react'
import '../../styles/App.css'

const APIConnections = () => {
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: 'Satellite Data Feed',
      endpoint: 'https://api.satellite.com/v1/data',
      status: 'Active',
      lastSync: '2024-01-26 14:30:22',
      dataType: 'MRV',
      syncFrequency: 'Daily'
    },
    {
      id: 2,
      name: 'Financial System',
      endpoint: 'https://api.bank.com/v1/transactions',
      status: 'Active',
      lastSync: '2024-01-26 09:15:10',
      dataType: 'Financial',
      syncFrequency: 'Real-time'
    },
    {
      id: 3,
      name: 'Community App',
      endpoint: 'https://api.community.com/v1/activities',
      status: 'Inactive',
      lastSync: '2024-01-25 16:45:33',
      dataType: 'Community',
      syncFrequency: 'Hourly'
    }
  ])

  const [newConnection, setNewConnection] = useState({
    name: '',
    endpoint: '',
    apiKey: '',
    dataType: 'MRV',
    syncFrequency: 'Daily'
  })

  const [showForm, setShowForm] = useState(false)

  const handleInputChange = (field, value) => {
    setNewConnection(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddConnection = (e) => {
    e.preventDefault()
    
    if (!newConnection.name || !newConnection.endpoint || !newConnection.apiKey) {
      alert('Please fill in all required fields')
      return
    }

    const connection = {
      id: connections.length + 1,
      ...newConnection,
      status: 'Active',
      lastSync: new Date().toISOString().replace('T', ' ').substring(0, 19)
    }

    setConnections(prev => [...prev, connection])
    setNewConnection({
      name: '',
      endpoint: '',
      apiKey: '',
      dataType: 'MRV',
      syncFrequency: 'Daily'
    })
    setShowForm(false)
    alert('API connection added successfully!')
  }

  const testConnection = (connectionId) => {
    // Simulate API test
    alert(`Testing connection ${connectionId}... Connection successful!`)
  }

  const toggleConnection = (connectionId) => {
    setConnections(prev => prev.map(conn => 
      conn.id === connectionId 
        ? { ...conn, status: conn.status === 'Active' ? 'Inactive' : 'Active' }
        : conn
    ))
  }

  return (
    <div className="api-connections">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">🔌 API Connections & Integration</h2>
          <div className="status-badge status-success">Secure • Encrypted</div>
        </div>

        {/* Connection Stats */}
        <div className="grid grid-cols-4">
          <div className="metric">
            <div className="metric-value">{connections.length}</div>
            <div className="metric-label">Total Connections</div>
          </div>
          <div className="metric">
            <div className="metric-value">
              {connections.filter(c => c.status === 'Active').length}
            </div>
            <div className="metric-label">Active</div>
          </div>
          <div className="metric">
            <div className="metric-value">98.5%</div>
            <div className="metric-label">Uptime</div>
          </div>
          <div className="metric">
            <div className="metric-value">256GB</div>
            <div className="metric-label">Data Synced</div>
          </div>
        </div>

        {/* Add Connection Button */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Add New Connection'}
          </button>
        </div>

        {/* Add Connection Form */}
        {showForm && (
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 className="card-title">Add New API Connection</h3>
            <form onSubmit={handleAddConnection}>
              <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Connection Name *
                  </label>
                  <input
                    type="text"
                    value={newConnection.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g., Satellite Data Feed"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem' 
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    API Endpoint *
                  </label>
                  <input
                    type="url"
                    value={newConnection.endpoint}
                    onChange={(e) => handleInputChange('endpoint', e.target.value)}
                    placeholder="https://api.example.com/v1/data"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem' 
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    API Key *
                  </label>
                  <input
                    type="password"
                    value={newConnection.apiKey}
                    onChange={(e) => handleInputChange('apiKey', e.target.value)}
                    placeholder="Enter API key"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem' 
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Data Type
                  </label>
                  <select
                    value={newConnection.dataType}
                    onChange={(e) => handleInputChange('dataType', e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem' 
                    }}
                  >
                    <option value="MRV">MRV Data</option>
                    <option value="Financial">Financial Data</option>
                    <option value="Community">Community Data</option>
                    <option value="Carbon">Carbon Data</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Sync Frequency
                  </label>
                  <select
                    value={newConnection.syncFrequency}
                    onChange={(e) => handleInputChange('syncFrequency', e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem' 
                    }}
                  >
                    <option value="Real-time">Real-time</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary">
                  Save Connection
                </button>
              </div>
            </form>
          </div>
        )}

        {/* API Connections List */}
        <div className="card">
          <h3 className="card-title">Active API Connections</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Name</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Endpoint</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Data Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Last Sync</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {connections.map(connection => (
                  <tr key={connection.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>{connection.name}</td>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      {connection.endpoint}
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <span className={`status-badge status-${connection.dataType === 'MRV' ? 'info' : connection.dataType === 'Financial' ? 'success' : 'warning'}`}>
                        {connection.dataType}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <span className={`status-badge status-${connection.status === 'Active' ? 'success' : 'error'}`}>
                        {connection.status}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{connection.lastSync}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          className="btn btn-secondary"
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          onClick={() => testConnection(connection.id)}
                        >
                          Test
                        </button>
                        <button 
                          className={`btn ${connection.status === 'Active' ? 'btn-secondary' : 'btn-primary'}`}
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          onClick={() => toggleConnection(connection.id)}
                        >
                          {connection.status === 'Active' ? 'Disable' : 'Enable'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* API Documentation */}
        <div className="grid grid-cols-2">
          <div className="card">
            <h3 className="card-title">API Documentation</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.375rem' }}>
              <h4 style={{ marginBottom: '1rem', color: '#0ea5e9' }}>Available Endpoints</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <strong>POST /api/v1/carbon-data</strong>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Submit carbon stock measurements and verification data
                  </div>
                </div>
                <div>
                  <strong>POST /api/v1/financial-transactions</strong>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Record financial transactions and disbursements
                  </div>
                </div>
                <div>
                  <strong>POST /api/v1/community-activities</strong>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Log community engagement and participation data
                  </div>
                </div>
                <div>
                  <strong>POST /api/v1/mrv-data</strong>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Upload monitoring, reporting and verification data
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Integration Guide</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.375rem' }}>
              <h4 style={{ marginBottom: '1rem', color: '#059669' }}>Quick Start</h4>
              <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Generate API key from settings</li>
                <li>Configure webhook endpoints</li>
                <li>Test connection with sample data</li>
                <li>Set up automatic sync schedule</li>
                <li>Monitor data quality metrics</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Data Quality Metrics */}
        <div className="card">
          <h3 className="card-title">Data Quality & Sync Status</h3>
          <div className="grid grid-cols-3">
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#059669' }}>98.2%</div>
              <div style={{ color: '#64748b' }}>Data Accuracy</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0ea5e9' }}>99.7%</div>
              <div style={{ color: '#64748b' }}>Sync Success Rate</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>2.3s</div>
              <div style={{ color: '#64748b' }}>Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APIConnections
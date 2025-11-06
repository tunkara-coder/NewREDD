// [file name]: DataEntry.jsx
import React, { useState } from 'react'
import '../../styles/App.css'

const DataEntry = () => {
  const [activeForm, setActiveForm] = useState('carbon')
  const [formData, setFormData] = useState({
    // Carbon Data
    carbon: {
      date: '',
      area: '',
      carbonStock: '',
      methodology: '',
      verificationStatus: 'Pending'
    },
    // Financial Data
    financial: {
      transactionDate: '',
      amount: '',
      type: 'Revenue',
      description: '',
      recipient: ''
    },
    // Community Data
    community: {
      date: '',
      householdCount: '',
      participantCount: '',
      activityType: '',
      description: ''
    },
    // MRV Data
    mrv: {
      collectionDate: '',
      dataType: 'Satellite',
      fileName: '',
      coverageArea: '',
      quality: 'Good'
    }
  })

  const handleInputChange = (formType, field, value) => {
    setFormData(prev => ({
      ...prev,
      [formType]: {
        ...prev[formType],
        [field]: value
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentForm = formData[activeForm]
    
    // Validate required fields
    const requiredFields = {
      carbon: ['date', 'area', 'carbonStock'],
      financial: ['transactionDate', 'amount', 'type'],
      community: ['date', 'activityType'],
      mrv: ['collectionDate', 'dataType']
    }

    const missingFields = requiredFields[activeForm].filter(field => !currentForm[field])
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
      return
    }

    // Simulate API call
    console.log(`Submitting ${activeForm} data:`, currentForm)
    alert(`${activeForm.charAt(0).toUpperCase() + activeForm.slice(1)} data submitted successfully!`)
    
    // Reset form
    setFormData(prev => ({
      ...prev,
      [activeForm]: Object.keys(prev[activeForm]).reduce((acc, key) => {
        acc[key] = ''
        return acc
      }, {})
    }))
  }

  const forms = {
    carbon: {
      title: '🌿 Carbon Data Entry',
      description: 'Enter carbon stock measurements and verification data'
    },
    financial: {
      title: '💰 Financial Transactions',
      description: 'Record revenue, expenses, and fund disbursements'
    },
    community: {
      title: '🤝 Community Engagement',
      description: 'Log community activities and participation data'
    },
    mrv: {
      title: '📊 MRV Data Collection',
      description: 'Upload monitoring, reporting and verification data'
    }
  }

  return (
    <div className="data-entry">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">📝 Data Entry & Management Portal</h2>
          <div className="status-badge status-info">Staff Access • Secure Input</div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4">
          <div className="metric">
            <div className="metric-value">156</div>
            <div className="metric-label">Entries Today</div>
          </div>
          <div className="metric">
            <div className="metric-value">89%</div>
            <div className="metric-label">Data Quality</div>
          </div>
          <div className="metric">
            <div className="metric-value">24</div>
            <div className="metric-label">Pending Review</div>
          </div>
          <div className="metric">
            <div className="metric-value">5</div>
            <div className="metric-label">API Connections</div>
          </div>
        </div>

        {/* Form Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginBottom: '2rem',
          borderBottom: '2px solid #e2e8f0',
          flexWrap: 'wrap'
        }}>
          {Object.entries(forms).map(([key, form]) => (
            <button
              key={key}
              className={activeForm === key ? 'nav-link active' : 'nav-link'}
              onClick={() => setActiveForm(key)}
              style={{ 
                border: 'none', 
                background: 'none',
                fontSize: '1.1rem',
                padding: '1rem 1.5rem'
              }}
            >
              {form.title}
            </button>
          ))}
        </div>

        {/* Data Entry Form */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{forms[activeForm].title}</h3>
            <div className="status-badge status-warning">All fields are required</div>
          </div>
          
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>
            {forms[activeForm].description}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              {/* Carbon Data Form */}
              {activeForm === 'carbon' && (
                <>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Measurement Date *
                    </label>
                    <input
                      type="date"
                      value={formData.carbon.date}
                      onChange={(e) => handleInputChange('carbon', 'date', e.target.value)}
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
                      Area (hectares) *
                    </label>
                    <input
                      type="number"
                      value={formData.carbon.area}
                      onChange={(e) => handleInputChange('carbon', 'area', e.target.value)}
                      placeholder="Enter area in hectares"
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
                      Carbon Stock (tons) *
                    </label>
                    <input
                      type="number"
                      value={formData.carbon.carbonStock}
                      onChange={(e) => handleInputChange('carbon', 'carbonStock', e.target.value)}
                      placeholder="Enter carbon stock in tons"
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
                      Methodology
                    </label>
                    <select
                      value={formData.carbon.methodology}
                      onChange={(e) => handleInputChange('carbon', 'methodology', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    >
                      <option value="">Select methodology</option>
                      <option value="Kora Carbon">Kora Carbon Methodology</option>
                      <option value="IPCC">IPCC Guidelines</option>
                      <option value="Custom">Custom Methodology</option>
                    </select>
                  </div>
                </>
              )}

              {/* Financial Data Form */}
              {activeForm === 'financial' && (
                <>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Transaction Date *
                    </label>
                    <input
                      type="date"
                      value={formData.financial.transactionDate}
                      onChange={(e) => handleInputChange('financial', 'transactionDate', e.target.value)}
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
                      Amount ($) *
                    </label>
                    <input
                      type="number"
                      value={formData.financial.amount}
                      onChange={(e) => handleInputChange('financial', 'amount', e.target.value)}
                      placeholder="Enter amount"
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
                      Transaction Type *
                    </label>
                    <select
                      value={formData.financial.type}
                      onChange={(e) => handleInputChange('financial', 'type', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                      required
                    >
                      <option value="Revenue">Revenue</option>
                      <option value="Expense">Expense</option>
                      <option value="Disbursement">Community Disbursement</option>
                      <option value="Reserve">Reserve Fund</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Recipient/Description
                    </label>
                    <input
                      type="text"
                      value={formData.financial.description}
                      onChange={(e) => handleInputChange('financial', 'description', e.target.value)}
                      placeholder="Enter description"
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    />
                  </div>
                </>
              )}

              {/* Community Data Form */}
              {activeForm === 'community' && (
                <>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Activity Date *
                    </label>
                    <input
                      type="date"
                      value={formData.community.date}
                      onChange={(e) => handleInputChange('community', 'date', e.target.value)}
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
                      Activity Type *
                    </label>
                    <select
                      value={formData.community.activityType}
                      onChange={(e) => handleInputChange('community', 'activityType', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                      required
                    >
                      <option value="">Select activity type</option>
                      <option value="Voting">Community Voting</option>
                      <option value="Meeting">Community Meeting</option>
                      <option value="Grievance">Grievance Resolution</option>
                      <option value="Training">Training Session</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Households Participating
                    </label>
                    <input
                      type="number"
                      value={formData.community.householdCount}
                      onChange={(e) => handleInputChange('community', 'householdCount', e.target.value)}
                      placeholder="Number of households"
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Total Participants
                    </label>
                    <input
                      type="number"
                      value={formData.community.participantCount}
                      onChange={(e) => handleInputChange('community', 'participantCount', e.target.value)}
                      placeholder="Total participants"
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    />
                  </div>
                  <div className="grid-cols-2" style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Activity Description
                    </label>
                    <textarea
                      value={formData.community.description}
                      onChange={(e) => handleInputChange('community', 'description', e.target.value)}
                      placeholder="Describe the community activity..."
                      rows="4"
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </>
              )}

              {/* MRV Data Form */}
              {activeForm === 'mrv' && (
                <>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Collection Date *
                    </label>
                    <input
                      type="date"
                      value={formData.mrv.collectionDate}
                      onChange={(e) => handleInputChange('mrv', 'collectionDate', e.target.value)}
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
                      Data Type *
                    </label>
                    <select
                      value={formData.mrv.dataType}
                      onChange={(e) => handleInputChange('mrv', 'dataType', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                      required
                    >
                      <option value="Satellite">Satellite Imagery</option>
                      <option value="Ground">Ground Measurement</option>
                      <option value="Sensor">Sensor Data</option>
                      <option value="Survey">Field Survey</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      File Name/Reference
                    </label>
                    <input
                      type="text"
                      value={formData.mrv.fileName}
                      onChange={(e) => handleInputChange('mrv', 'fileName', e.target.value)}
                      placeholder="Enter file reference"
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Coverage Area (ha)
                    </label>
                    <input
                      type="number"
                      value={formData.mrv.coverageArea}
                      onChange={(e) => handleInputChange('mrv', 'coverageArea', e.target.value)}
                      placeholder="Area covered in hectares"
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Data Quality
                    </label>
                    <select
                      value={formData.mrv.quality}
                      onChange={(e) => handleInputChange('mrv', 'quality', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem' 
                      }}
                    >
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                      <option value="Poor">Poor</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button type="submit" className="btn btn-primary">
                Submit Data
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  const currentForm = formData[activeForm]
                  setFormData(prev => ({
                    ...prev,
                    [activeForm]: Object.keys(prev[activeForm]).reduce((acc, key) => {
                      acc[key] = ''
                      return acc
                    }, {})
                  }))
                }}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* Recent Submissions */}
        <div className="card">
          <h3 className="card-title">Recent Data Submissions</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Date</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Description</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Submitted By</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem' }}>2024-01-26</td>
                  <td style={{ padding: '0.75rem' }}>Carbon Data</td>
                  <td style={{ padding: '0.75rem' }}>Mangrove carbon stock measurement</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span className="status-badge status-success">Verified</span>
                  </td>
                  <td style={{ padding: '0.75rem' }}>Field Team A</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem' }}>2024-01-25</td>
                  <td style={{ padding: '0.75rem' }}>Financial</td>
                  <td style={{ padding: '0.75rem' }}>Community fund disbursement</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span className="status-badge status-warning">Pending</span>
                  </td>
                  <td style={{ padding: '0.75rem' }}>Finance Dept</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem' }}>2024-01-24</td>
                  <td style={{ padding: '0.75rem' }}>Community</td>
                  <td style={{ padding: '0.75rem' }}>Monthly community meeting</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span className="status-badge status-success">Processed</span>
                  </td>
                  <td style={{ padding: '0.75rem' }}>Community Liaison</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataEntry
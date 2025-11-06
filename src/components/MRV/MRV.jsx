import React, { useState } from 'react'
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/App.css'

const MRV = () => {
  const [selectedArea, setSelectedArea] = useState('all')

  const deforestationData = [
    { year: '2019', baseline: 245, actual: 240 },
    { year: '2020', baseline: 260, actual: 235 },
    { year: '2021', baseline: 275, actual: 210 },
    { year: '2022', baseline: 290, actual: 185 },
    { year: '2023', baseline: 305, actual: 150 },
    { year: '2024', projected: 320, target: 120 },
  ]

  const carbonStockData = [
    { month: 'Jan', carbon: 125400 },
    { month: 'Feb', carbon: 126800 },
    { month: 'Mar', carbon: 128200 },
    { month: 'Apr', carbon: 129600 },
    { month: 'May', carbon: 131000 },
  ]

  const areas = [
    { id: 'north', name: 'North Bank Region', deforestation: -15, carbon: +4.2 },
    { id: 'central', name: 'Central River Region', deforestation: -22, carbon: +6.8 },
    { id: 'south', name: 'Lower River Region', deforestation: -18, carbon: +5.1 },
  ]

  // Simple AreaChart component
  const AreaChart = ({ data }) => {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="carbon" fill="#86efac" stroke="#059669" />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <div className="mrv">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">📊 MRV & Project Management</h2>
          <div className="status-badge status-warning">Technical Interface</div>
        </div>

        <div className="grid grid-cols-2">
          <div className="metric">
            <div className="metric-value">84%</div>
            <div className="metric-label">Deforestation Reduction</div>
          </div>
          <div className="metric">
            <div className="metric-value">+5.4%</div>
            <div className="metric-label">Carbon Stock Increase</div>
          </div>
        </div>

        {/* Deforestation Monitoring */}
        <div className="card">
          <h3 className="card-title">Deforestation Monitoring</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={deforestationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Hectares Lost', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="baseline" stroke="#ef4444" name="Baseline" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="actual" stroke="#059669" name="Actual" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#10b981" name="Target" strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2">
          {/* Carbon Stock Monitoring */}
          <div className="card">
            <h3 className="card-title">Carbon Stock Trends</h3>
            <AreaChart data={carbonStockData} />
          </div>

          {/* Area-specific Data */}
          <div className="card">
            <h3 className="card-title">Regional Performance</h3>
            <div style={{ marginBottom: '1rem' }}>
              <select 
                value={selectedArea} 
                onChange={(e) => setSelectedArea(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
              >
                <option value="all">All Regions</option>
                {areas.map(area => (
                  <option key={area.id} value={area.id}>{area.name}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {areas.map(area => (
                <div key={area.id} style={{ 
                  padding: '1rem', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '0.375rem',
                  backgroundColor: selectedArea === area.id ? '#f0fdf4' : 'white'
                }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{area.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Deforestation: <strong style={{ color: area.deforestation < 0 ? '#059669' : '#ef4444' }}>
                      {area.deforestation}%
                    </strong></span>
                    <span>Carbon: <strong style={{ color: '#059669' }}>+{area.carbon}%</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="card">
          <h3 className="card-title">Data Integration Sources</h3>
          <div className="grid grid-cols-2">
            <div>
              <h4 style={{ marginBottom: '0.5rem', color: '#059669' }}>Remote Sensing</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Satellite imagery (Landsat, Sentinel)</li>
                <li>LiDAR forest structure</li>
                <li>NDVI vegetation indices</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem', color: '#0ea5e9' }}>Ground-based</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Forest inventory plots</li>
                <li>Soil carbon sampling</li>
                <li>Community monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MRV
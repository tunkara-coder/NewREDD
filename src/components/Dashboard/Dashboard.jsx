import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'
import '../../styles/App.css'

const Dashboard = () => {
  const creditSalesData = [
    { month: 'Jan', credits: 12000, revenue: 84000 },
    { month: 'Feb', credits: 18500, revenue: 129500 },
    { month: 'Mar', credits: 15000, revenue: 105000 },
    { month: 'Apr', credits: 22000, revenue: 154000 },
    { month: 'May', credits: 19000, revenue: 133000 },
    { month: 'Jun', credits: 25000, revenue: 175000 },
  ]

  const fundDistribution = [
    { name: 'Community Trust Fund', value: 70, color: '#059669' },
    { name: 'Project Operations', value: 20, color: '#0ea5e9' },
    { name: 'Reserve Fund', value: 10, color: '#f59e0b' },
  ]

  const projectImpact = [
    { category: 'Mangroves Protected', value: 1240, target: 1500 },
    { category: 'Carbon Sequestered', value: 86500, target: 100000 },
    { category: 'Jobs Created', value: 45, target: 60 },
  ]

  const recentActivities = [
    { id: 1, type: 'Credit Issuance', amount: '15,000 Credits', date: '2024-01-25', status: 'Completed' },
    { id: 2, type: 'Community Payment', amount: '$35,000', date: '2024-01-24', status: 'Completed' },
    { id: 3, type: 'Verification Audit', amount: 'Q2 2024', date: '2024-01-23', status: 'In Progress' },
    { id: 4, type: 'Community Voting', amount: 'Budget Allocation', date: '2024-01-22', status: 'Active' },
  ]

  return (
    <div className="dashboard">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">🌐 Project Overview Dashboard</h2>
          <div className="status-badge status-success">Live Data • Updated Today</div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-4">
          <div className="metric">
            <div className="metric-value">86.5K</div>
            <div className="metric-label">Carbon Credits</div>
            <div className="metric-trend trend-up">↑ 12% this month</div>
          </div>
          <div className="metric">
            <div className="metric-value">$605.5K</div>
            <div className="metric-label">Total Revenue</div>
            <div className="metric-trend trend-up">↑ 8% growth</div>
          </div>
          <div className="metric">
            <div className="metric-value">1,240</div>
            <div className="metric-label">Hectares Protected</div>
            <div className="metric-trend trend-up">↑ 5% expansion</div>
          </div>
          <div className="metric">
            <div className="metric-value">84%</div>
            <div className="metric-label">Deforestation Reduction</div>
            <div className="metric-trend trend-up">↑ 3% improvement</div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {/* Credit Sales Chart */}
          <div className="card">
            <h3 className="card-title">Credit Sales & Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={creditSalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="credits" 
                  stroke="#059669" 
                  strokeWidth={3}
                  name="Credits Sold" 
                  dot={{ fill: '#059669', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#0ea5e9" 
                  strokeWidth={3}
                  name="Revenue ($)" 
                  dot={{ fill: '#0ea5e9', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Fund Distribution */}
          <div className="card">
            <h3 className="card-title">Benefit Sharing Distribution</h3>
            <p className="card-subtitle">70/20/10 Model Allocation</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={fundDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fundDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {/* Project Impact */}
          <div className="card">
            <h3 className="card-title">Project Impact Metrics</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {projectImpact.map((item, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600 }}>{item.category}</span>
                    <span style={{ fontWeight: 700, color: '#059669' }}>
                      {item.value.toLocaleString()} / {item.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(item.value / item.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card">
            <h3 className="card-title">Recent Activities</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentActivities.map(activity => (
                <div key={activity.id} style={{
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '0.75rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{activity.type}</div>
                      <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{activity.amount}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{activity.date}</div>
                      <span className={`status-badge status-${activity.status === 'Completed' ? 'success' : activity.status === 'Active' ? 'info' : 'warning'}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="card-title">Quick Actions</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">View Financial Report</button>
            <button className="btn btn-secondary">Submit Grievance</button>
            <button className="btn btn-secondary">View Community Votes</button>
            <button className="btn btn-secondary">Download Documents</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
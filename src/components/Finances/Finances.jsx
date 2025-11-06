import React, { useState } from 'react'
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area,
  Legend
} from 'recharts'
import '../../styles/App.css'

const Finances = () => {
  const [timeframe, setTimeframe] = useState('2024')
  const [activeChart, setActiveChart] = useState('revenue')

  // Comprehensive financial data
  const financialData = {
    '2024': [
      { 
        month: 'Jan', 
        credits: 12000, 
        revenue: 84000, 
        expenses: 42000,
        community: 29400,
        operations: 12600,
        reserve: 4200
      },
      { 
        month: 'Feb', 
        credits: 18500, 
        revenue: 129500, 
        expenses: 64750,
        community: 45325,
        operations: 19425,
        reserve: 6475
      },
      { 
        month: 'Mar', 
        credits: 15000, 
        revenue: 105000, 
        expenses: 52500,
        community: 36750,
        operations: 15750,
        reserve: 5250
      },
      { 
        month: 'Apr', 
        credits: 22000, 
        revenue: 154000, 
        expenses: 77000,
        community: 53900,
        operations: 23100,
        reserve: 7700
      },
      { 
        month: 'May', 
        credits: 19000, 
        revenue: 133000, 
        expenses: 66500,
        community: 46550,
        operations: 19950,
        reserve: 6650
      },
      { 
        month: 'Jun', 
        credits: 25000, 
        revenue: 175000, 
        expenses: 87500,
        community: 61250,
        operations: 26250,
        reserve: 8750
      },
    ],
    '2023': [
      { 
        month: 'Jan', 
        credits: 8000, 
        revenue: 56000, 
        expenses: 28000,
        community: 19600,
        operations: 8400,
        reserve: 2800
      },
      { 
        month: 'Feb', 
        credits: 9500, 
        revenue: 66500, 
        expenses: 33250,
        community: 23275,
        operations: 9975,
        reserve: 3325
      },
      { 
        month: 'Mar', 
        credits: 11000, 
        revenue: 77000, 
        expenses: 38500,
        community: 26950,
        operations: 11550,
        reserve: 3850
      },
      { 
        month: 'Apr', 
        credits: 13000, 
        revenue: 91000, 
        expenses: 45500,
        community: 31850,
        operations: 13650,
        reserve: 4550
      },
      { 
        month: 'May', 
        credits: 12000, 
        revenue: 84000, 
        expenses: 42000,
        community: 29400,
        operations: 12600,
        reserve: 4200
      },
      { 
        month: 'Jun', 
        credits: 14000, 
        revenue: 98000, 
        expenses: 49000,
        community: 34300,
        operations: 14700,
        reserve: 4900
      },
    ]
  }

  const disbursementData = [
    { category: 'Community Development Fund', amount: 296765, percentage: 49, color: '#059669' },
    { category: 'Project Operations', amount: 121100, percentage: 20, color: '#0ea5e9' },
    { category: 'Environmental Protection', amount: 84770, percentage: 14, color: '#10b981' },
    { category: 'Administrative Costs', amount: 60550, percentage: 10, color: '#f59e0b' },
    { category: 'Emergency Reserve Fund', amount: 42385, percentage: 7, color: '#ef4444' },
  ]

  const financialMetrics = [
    { 
      label: 'Total Revenue', 
      value: '$605,500', 
      trend: '+25%', 
      trendUp: true,
      description: 'Total income from carbon credit sales'
    },
    { 
      label: 'Community Benefits', 
      value: '$296,765', 
      trend: '+22%', 
      trendUp: true,
      description: 'Funds distributed to local communities'
    },
    { 
      label: 'Project Operations', 
      value: '$121,100', 
      trend: '+15%', 
      trendUp: false,
      description: 'Operational and maintenance costs'
    },
    { 
      label: 'Carbon Credits Issued', 
      value: '86,500', 
      trend: '+18%', 
      trendUp: true,
      description: 'Total credits generated and verified'
    },
  ]

  const recentTransactions = [
    { 
      id: 1, 
      date: '2024-01-25', 
      description: 'Carbon Credit Sale - EcoCorp International', 
      amount: 84000, 
      type: 'Revenue',
      status: 'Completed',
      reference: 'TX-2024-001'
    },
    { 
      id: 2, 
      date: '2024-01-24', 
      description: 'Community Trust Fund Disbursement - Q1 2024', 
      amount: -35000, 
      type: 'Disbursement',
      status: 'Completed',
      reference: 'TX-2024-002'
    },
    { 
      id: 3, 
      date: '2024-01-23', 
      description: 'Project Operations - Monitoring Equipment', 
      amount: -25000, 
      type: 'Expense',
      status: 'Completed',
      reference: 'TX-2024-003'
    },
    { 
      id: 4, 
      date: '2024-01-22', 
      description: 'Carbon Credit Sale - GreenInvest Partners', 
      amount: 49000, 
      type: 'Revenue',
      status: 'Completed',
      reference: 'TX-2024-004'
    },
    { 
      id: 5, 
      date: '2024-01-21', 
      description: 'Environmental Protection - Mangrove Restoration', 
      amount: -15000, 
      type: 'Expense',
      status: 'Completed',
      reference: 'TX-2024-005'
    },
    { 
      id: 6, 
      date: '2024-01-20', 
      description: 'Reserve Fund Allocation', 
      amount: -8750, 
      type: 'Reserve',
      status: 'Completed',
      reference: 'TX-2024-006'
    },
  ]

  const budgetAllocation = [
    { category: 'Mangrove Restoration', allocated: 150000, spent: 112500, percentage: 75 },
    { category: 'Community Development', allocated: 200000, spent: 148000, percentage: 74 },
    { category: 'Monitoring & Verification', allocated: 80000, spent: 65000, percentage: 81 },
    { category: 'Administrative Costs', allocated: 60000, spent: 42000, percentage: 70 },
    { category: 'Research & Development', allocated: 40000, spent: 28500, percentage: 71 },
  ]

  const COLORS = ['#059669', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444']

  // Custom tooltip formatter
  const formatCurrency = (value) => `$${value.toLocaleString()}`
  const formatPercentage = (value) => `${value}%`

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="12" fontWeight="600">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="finances">
      <div className="card">
        <div className="card-header">
          <div>
            <h2 className="card-title">💰 Financial Transparency Dashboard</h2>
            <p className="card-subtitle">Complete financial overview with real-time revenue tracking and disbursement analytics</p>
          </div>
          <div className="status-badge status-success">All Transactions Verified • Blockchain Secured</div>
        </div>

        {/* Financial Highlights */}
        <div className="grid grid-cols-4">
          {financialMetrics.map((metric, index) => (
            <div key={index} className="metric">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className={`metric-trend ${metric.trendUp ? 'trend-up' : 'trend-down'}`}>
                {metric.trendUp ? '📈' : '📉'} {metric.trend}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Controls */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="card-title">Financial Performance Overview</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <select 
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="2024">2024 Data</option>
                <option value="2023">2023 Data</option>
              </select>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { key: 'revenue', label: 'Revenue', icon: '💰' },
                  { key: 'breakdown', label: 'Breakdown', icon: '📊' },
                  { key: 'growth', label: 'Growth', icon: '📈' }
                ].map(chart => (
                  <button
                    key={chart.key}
                    onClick={() => setActiveChart(chart.key)}
                    className={activeChart === chart.key ? 'btn btn-primary' : 'btn btn-secondary'}
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    {chart.icon} {chart.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Revenue vs Expenses Chart */}
          {activeChart === 'revenue' && (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={financialData[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" tickFormatter={formatCurrency} />
                <Tooltip 
                  formatter={formatCurrency}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" name="Total Revenue" fill="#059669" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Total Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {/* Expense Breakdown Chart */}
          {activeChart === 'breakdown' && (
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={financialData[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" tickFormatter={formatCurrency} />
                <Tooltip formatter={formatCurrency} />
                <Legend />
                <Area type="monotone" dataKey="community" stackId="1" name="Community Fund" fill="#059669" stroke="#047857" />
                <Area type="monotone" dataKey="operations" stackId="1" name="Project Operations" fill="#0ea5e9" stroke="#0284c7" />
                <Area type="monotone" dataKey="reserve" stackId="1" name="Reserve Fund" fill="#f59e0b" stroke="#d97706" />
              </AreaChart>
            </ResponsiveContainer>
          )}

          {/* Growth Trend Chart */}
          {activeChart === 'growth' && (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={financialData[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" tickFormatter={formatCurrency} />
                <Tooltip formatter={formatCurrency} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  name="Revenue Growth" 
                  stroke="#059669" 
                  strokeWidth={3}
                  dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#047857' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="credits" 
                  name="Carbon Credits" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="grid grid-cols-2">
          {/* Fund Disbursement Breakdown */}
          <div className="card">
            <h3 className="card-title">Fund Disbursement Breakdown</h3>
            <p className="card-subtitle">Distribution of $605,500 total revenue according to 70/20/10 model</p>
            
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={disbursementData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {disbursementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={formatCurrency} />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              {disbursementData.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: item.color, borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '0.875rem' }}>{item.category}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 600, color: '#059669' }}>${item.amount.toLocaleString()}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Utilization */}
          <div className="card">
            <h3 className="card-title">Budget Utilization</h3>
            <p className="card-subtitle">Current spending against allocated budgets</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              {budgetAllocation.map((item, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.category}</span>
                    <span style={{ fontWeight: 700, color: '#059669', fontSize: '0.9rem' }}>
                      ${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${item.percentage}%`,
                        background: `linear-gradient(90deg, ${
                          item.percentage >= 80 ? '#059669' : 
                          item.percentage >= 60 ? '#0ea5e9' : 
                          '#f59e0b'
                        }, ${
                          item.percentage >= 80 ? '#10b981' : 
                          item.percentage >= 60 ? '#38bdf8' : 
                          '#fbbf24'
                        })`
                      }}
                    ></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                    <span>Utilization: {item.percentage}%</span>
                    <span>Remaining: ${(item.allocated - item.spent).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <h3 className="card-title">Recent Financial Transactions</h3>
          <p className="card-subtitle">All transactions are recorded on the blockchain for transparency</p>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600 }}>Date</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600 }}>Description</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600 }}>Reference</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600 }}>Status</th>
                  <th style={{ padding: '1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600 }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map(transaction => (
                  <tr key={transaction.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500 }}>{transaction.date}</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 500 }}>{transaction.description}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{transaction.type}</div>
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.75rem', color: '#0ea5e9', fontFamily: 'monospace' }}>
                      {transaction.reference}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <span className="status-badge status-success">{transaction.status}</span>
                    </td>
                    <td style={{ 
                      padding: '1rem', 
                      textAlign: 'right', 
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: transaction.amount > 0 ? '#059669' : '#ef4444'
                    }}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-3">
          <div className="financial-highlight">
            <div className="financial-amount">$605,500</div>
            <div className="financial-label">Total Revenue Generated</div>
            <div style={{ fontSize: '0.875rem', color: '#92400e', marginTop: '0.5rem' }}>
              📈 25% growth from previous period
            </div>
          </div>
          <div className="financial-highlight">
            <div className="financial-amount">$296,765</div>
            <div className="financial-label">Community Benefits Distributed</div>
            <div style={{ fontSize: '0.875rem', color: '#92400e', marginTop: '0.5rem' }}>
              🤝 49% of total revenue to communities
            </div>
          </div>
          <div className="financial-highlight">
            <div className="financial-amount">86,500</div>
            <div className="financial-label">Carbon Credits Verified</div>
            <div style={{ fontSize: '0.875rem', color: '#92400e', marginTop: '0.5rem' }}>
              🌿 1,240 hectares protected
            </div>
          </div>
        </div>

        {/* Export and Report Options */}
        <div className="card">
          <h3 className="card-title">Financial Reports & Export</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">
              📊 Download Full Financial Report (PDF)
            </button>
            <button className="btn btn-secondary">
              📈 Export Quarterly Statements
            </button>
            <button className="btn btn-secondary">
              💾 Transaction History (CSV)
            </button>
            <button className="btn btn-secondary">
              🔍 View Audit Reports
            </button>
            <button className="btn btn-secondary">
              ⛓️ Blockchain Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finances
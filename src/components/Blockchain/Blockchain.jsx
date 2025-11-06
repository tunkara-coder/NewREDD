import React, { useState } from 'react'
import '../../styles/App.css'

const Blockchain = () => {
  const [transactions, setTransactions] = useState([
    {
      id: '0x1a2b3c...',
      type: 'Credit Issuance',
      amount: 15000,
      timestamp: '2024-01-25 14:30:22',
      block: 124567,
      status: 'Confirmed',
      hash: '0xabc123def456...'
    },
    {
      id: '0x4d5e6f...',
      type: 'Credit Retirement',
      amount: 5000,
      timestamp: '2024-01-24 09:15:10',
      block: 124512,
      status: 'Confirmed',
      hash: '0xdef456abc123...'
    },
    {
      id: '0x7g8h9i...',
      type: 'Fund Disbursement',
      amount: 35000,
      timestamp: '2024-01-23 16:45:33',
      block: 124478,
      status: 'Confirmed',
      hash: '0x123abc456def...'
    }
  ])

  return (
    <div className="blockchain">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">⛓️ Blockchain Verification Engine</h2>
          <div className="status-badge status-success">Network: Live</div>
        </div>

        <div className="grid grid-cols-2">
          <div className="metric">
            <div className="metric-value">124,567</div>
            <div className="metric-label">Current Block</div>
          </div>
          <div className="metric">
            <div className="metric-value">86.5K</div>
            <div className="metric-label">Credits Recorded</div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Immutable Transaction History</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Transaction ID</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Amount</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Timestamp</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      {tx.id}
                    </td>
                    <td style={{ padding: '0.75rem' }}>{tx.type}</td>
                    <td style={{ padding: '0.75rem' }}>{tx.amount.toLocaleString()}</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{tx.timestamp}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span className="status-badge status-success">{tx.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="card">
            <h3 className="card-title">Credit Traceability</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.375rem' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#059669' }}>Chain of Custody</h4>
              <ol style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Measurement → Verification</li>
                <li style={{ marginBottom: '0.5rem' }}>Verification → Issuance</li>
                <li style={{ marginBottom: '0.5rem' }}>Issuance → Retirement</li>
                <li>Retirement → Benefit Distribution</li>
              </ol>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Blockchain Verification</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.375rem' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#0ea5e9' }}>Data Integrity Features</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Immutable record keeping</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Tamper-proof transactions</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Transparent audit trail</li>
                <li>✓ Real-time verification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blockchain
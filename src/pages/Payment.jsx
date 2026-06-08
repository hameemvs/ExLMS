import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Search, Filter, DollarSign } from 'lucide-react';

export function Payment() {
  const [activeTab, setActiveTab] = useState('fees');

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Payments</h1>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)' }}>
        <button 
          onClick={() => setActiveTab('fees')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 12px 0', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500,
            color: activeTab === 'fees' ? 'var(--accent)' : 'var(--text-muted)',
            borderBottom: activeTab === 'fees' ? '2px solid var(--accent)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Student Fees
        </button>
        <button 
          onClick={() => setActiveTab('salary')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 12px 0', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500,
            color: activeTab === 'salary' ? 'var(--accent)' : 'var(--text-muted)',
            borderBottom: activeTab === 'salary' ? '2px solid var(--accent)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Staff Salary
        </button>
      </div>

      <Card style={{ padding: 0 }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: '300px', marginBottom: 0 }}>
             {/* Use Input component but without wrapper margin by overriding style if needed, or just standard Input */}
             <div className="input-container" style={{ margin: 0 }}>
                <Search size={18} className="input-icon" />
                <input className="input-field" placeholder="Search by name or ID..." />
             </div>
          </div>
          <Button variant="outline"><Filter size={16} /> Filter</Button>
        </div>

        {activeTab === 'fees' ? (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Student Name</th>
                <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Course</th>
                <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Amount</th>
                <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i, index) => (
                <tr key={i} style={{ borderBottom: index !== 2 ? '1px solid var(--border-color)' : 'none' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 500, color: 'var(--text-heading)' }}>John Doe {i}</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>Software Engineering</td>
                  <td style={{ padding: '16px 24px', fontWeight: 500 }}>LKR 50,000</td>
                  <td style={{ padding: '16px 24px' }}>
                    {i === 1 ? <Badge variant="success">Paid</Badge> : <Badge variant="danger">Outstanding</Badge>}
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    {i !== 1 && <Button variant="primary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Pay Now</Button>}
                    {i === 1 && <Button variant="outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Receipt</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            {[1, 2].map((i, index) => (
              <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: index === 0 ? '1px solid var(--border-color)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <DollarSign className="text-accent" size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '1.05rem', marginBottom: '4px' }}>Dr. Smith {i}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>June 2026 Salary • Computer Science Dept</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Amount</div>
                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>LKR 150,000</div>
                  </div>
                  <Badge variant="success">Transferred</Badge>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

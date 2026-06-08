import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, XCircle, Clock, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

export function Attendance() {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Attendance Tracking</h1>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)' }}>
        <button 
          onClick={() => setActiveTab('daily')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 12px 0', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500,
            color: activeTab === 'daily' ? 'var(--accent)' : 'var(--text-muted)',
            borderBottom: activeTab === 'daily' ? '2px solid var(--accent)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Daily Attendance
        </button>
        <button 
          onClick={() => setActiveTab('class')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 12px 0', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500,
            color: activeTab === 'class' ? 'var(--accent)' : 'var(--text-muted)',
            borderBottom: activeTab === 'class' ? '2px solid var(--accent)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Class Attendance
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <Card style={{ padding: 0 }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '16px' }}>
            <div style={{ border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500, backgroundColor: 'white' }}>
              <CalendarIcon size={16} className="text-muted" />
              <span>June 8, 2026</span>
              <ChevronDown size={16} className="text-muted" />
            </div>
            <div style={{ border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500, backgroundColor: 'white' }}>
              <span>Class: CS101</span>
              <ChevronDown size={16} className="text-muted" />
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Student Name</th>
                <th style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i, index) => (
                <tr key={i} style={{ borderBottom: index !== 4 ? '1px solid var(--border-color)' : 'none' }}>
                  <td style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px', fontWeight: 500, color: 'var(--text-heading)' }}>
                    <input type="checkbox" style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--accent)' }} defaultChecked={i !== 3} />
                    <span>Sarah Connor {i}</span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    {i === 1 || i === 4 || i === 5 ? <CheckCircle2 size={20} style={{ color: 'var(--success)' }} /> : 
                     i === 2 ? <Clock size={20} style={{ color: 'var(--warning)' }} /> :
                     <XCircle size={20} style={{ color: 'var(--danger)' }} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '12px', backgroundColor: 'var(--bg-color)', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
            <Button variant="primary">Submit Attendance</Button>
            <Button variant="outline">Download Report</Button>
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <h3 className="card-title">Daily Summary</h3>
          </div>
          {/* Professional Pie Chart for attendance */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px', marginBottom: '32px' }}>
            <div style={{ 
              width: '150px', height: '150px', borderRadius: '50%', 
              background: 'conic-gradient(var(--success) 0% 70%, var(--warning) 70% 85%, var(--danger) 85% 100%)',
              boxShadow: 'var(--shadow-sm)'
            }}></div>
          </div>
          <ul style={{ padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                 <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--success)' }}></span> 
                 Present
              </div>
              <strong style={{ color: 'var(--text-heading)' }}>70%</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                 <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--warning)' }}></span> 
                 Late
              </div>
              <strong style={{ color: 'var(--text-heading)' }}>15%</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                 <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--danger)' }}></span> 
                 Absent
              </div>
              <strong style={{ color: 'var(--text-heading)' }}>15%</strong>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

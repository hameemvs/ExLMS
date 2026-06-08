import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Search, Plus, User as UserIcon, Mail } from 'lucide-react';

export function User() {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Users Directory</h1>
        <Button variant="primary"><Plus size={18} /> Add User</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)' }}>
        {['students', 'staff'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'none', border: 'none', padding: '0 0 12px 0', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500, textTransform: 'capitalize',
              color: activeTab === tab ? 'var(--accent)' : 'var(--text-muted)',
              borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: '-1px'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '24px', width: '320px' }}>
        <div className="input-container" style={{ margin: 0 }}>
          <Search size={18} className="input-icon" />
          <input className="input-field" placeholder="Search by name, ID, or email..." />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <Card key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 24px' }}>
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', 
              display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px',
              border: '2px solid white', boxShadow: 'var(--shadow-sm)'
            }}>
              <UserIcon size={32} className="text-muted" />
            </div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: 'var(--text-heading)' }}>
              {activeTab === 'students' ? `Jane Doe ${i}` : `Dr. Alan ${i}`}
            </h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500 }}>
              {activeTab === 'students' ? 'BSc IT - Year 2' : 'Computer Science Dept'}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
              <Mail size={14} />
              <span>{activeTab === 'students' ? `student${i}@esoft.edu` : `staff${i}@esoft.edu`}</span>
            </div>

            <Button variant="outline" style={{ width: '100%' }}>View Profile</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

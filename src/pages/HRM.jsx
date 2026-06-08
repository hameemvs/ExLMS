import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Plus, Users, Settings } from 'lucide-react';

export function HRM() {
  const [activeTab, setActiveTab] = useState('directory');

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Human Resources</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary"><Plus size={18} /> Add Staff</Button>
          <Button variant="outline"><Settings size={18} /> Manage Roles</Button>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', borderBottom: '1px solid var(--border-color)', overflowX: 'auto' }}>
        {['directory', 'performance', 'leave', 'roles'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'none', border: 'none', padding: '0 0 12px 0', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500, textTransform: 'capitalize', whiteSpace: 'nowrap',
              color: activeTab === tab ? 'var(--accent)' : 'var(--text-muted)',
              borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: '-1px'
            }}
          >
            {tab === 'directory' ? 'Staff Directory' : tab === 'performance' ? 'Performance Reviews' : tab === 'leave' ? 'Leave Requests' : 'Roles & Permissions'}
          </button>
        ))}
      </div>

      {activeTab === 'leave' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
             <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)' }}>Recent Leave Requests</h3>
          </div>
          <Card style={{ padding: 0 }}>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              {[1, 2, 3].map((i, index) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', borderBottom: index !== 2 ? '1px solid var(--border-color)' : 'none' }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>
                      <Users size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '1.05rem', marginBottom: '4px' }}>Dr. Alice Smith</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Medical Leave • June 10 - June 14 (4 days)</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    {i === 1 ? <Badge variant="success">Approved</Badge> : 
                     i === 2 ? <Badge variant="warning">Pending</Badge> : 
                     <Badge variant="danger">Denied</Badge>}
                    
                    {i === 2 && (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Button variant="outline" style={{ padding: '6px 12px', fontSize: '0.85rem', color: 'var(--success)', borderColor: 'var(--success)' }}>Approve</Button>
                        <Button variant="outline" style={{ padding: '6px 12px', fontSize: '0.85rem', color: 'var(--danger)', borderColor: 'var(--danger)' }}>Deny</Button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
      
      {activeTab !== 'leave' && (
        <Card style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
          <Users size={48} className="text-muted" style={{ opacity: 0.5, marginBottom: '16px' }} />
          <h3 style={{ marginBottom: '8px', color: 'var(--text-heading)' }}>No Data Available</h3>
          <p>Please select the "Leave Requests" tab to view the active mockup content.</p>
        </Card>
      )}
    </div>
  );
}

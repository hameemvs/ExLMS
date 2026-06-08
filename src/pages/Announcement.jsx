import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Plus, Bell as BellIcon, Megaphone } from 'lucide-react';

export function Announcement() {
  const [activeTab, setActiveTab] = useState('system');

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Announcements</h1>
        <Button variant="primary"><Plus size={18} /> New Announcement</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', borderBottom: '1px solid var(--border-color)' }}>
        {['system-wide', 'department'].map(tab => (
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
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {[1, 2, 3].map(i => (
          <Card key={i} style={{ display: 'flex', gap: '24px', position: 'relative', padding: '32px' }}>
            <div style={{ 
              minWidth: '56px', height: '56px', borderRadius: '16px', 
              display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: i === 1 ? '#fee2e2' : '#e0e7ff',
              color: i === 1 ? 'var(--danger)' : 'var(--accent)'
            }}>
              {i === 1 ? <BellIcon size={24} /> : <Megaphone size={24} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-heading)' }}>
                  {i === 1 ? 'System Maintenance Notice' : 'Guest Lecture Series: Future of AI'}
                </h3>
                {i === 1 && <Badge variant="danger">URGENT</Badge>}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>Posted by {i === 1 ? 'System Admin' : 'Dr. Jane Doe'}</span>
                <span>•</span>
                <span>June 8, 2026</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {i === 1 
                  ? "The LMS will undergo scheduled maintenance on Saturday, June 13th from 00:00 to 04:00 AM. Expect intermittent downtime during this window. Please save all ongoing work."
                  : "We are thrilled to announce a guest lecture on Artificial Intelligence by a leading industry expert. Attendance is highly encouraged for all senior students. The session will cover modern LLMs and agentic workflows."}
              </p>
              
              {i !== 1 && (
                 <div style={{ marginTop: '20px' }}>
                    <Button variant="outline" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>Read More</Button>
                 </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

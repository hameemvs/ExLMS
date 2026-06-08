import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Book, CheckCircle, Calendar, BellRing } from 'lucide-react';

export function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        
        <Card>
          <div className="card-header">
            <h3 className="card-title text-muted">My Courses</h3>
            <div style={{ padding: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '8px' }}>
              <Book size={20} className="text-accent" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1 }}>4</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>Active</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--success)', lineHeight: 1 }}>12</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>Completed</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <h3 className="card-title text-muted">My Performance</h3>
            <div style={{ padding: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '8px' }}>
              <CheckCircle size={20} className="text-success" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 500 }}>
                <span>Course Completion</span>
                <span>75%</span>
              </div>
              <div style={{ height: '6px', backgroundColor: 'var(--bg-color)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '75%', height: '100%', backgroundColor: 'var(--accent)' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 500 }}>
                <span>Average Grade</span>
                <span>82%</span>
              </div>
              <div style={{ height: '6px', backgroundColor: 'var(--bg-color)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '82%', height: '100%', backgroundColor: 'var(--success)' }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <h3 className="card-title text-muted">Fees Overview</h3>
            <Badge variant="success">Cleared</Badge>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-heading)', margin: '8px 0 4px 0' }}>LKR 0.00</div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>All dues are settled for this semester.</p>
        </Card>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <Card style={{ padding: 0 }}>
          <div className="card-header" style={{ padding: '24px 24px 0 24px', borderBottom: 'none' }}>
            <h3 className="card-title">Upcoming Classes</h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            {[1, 2, 3].map((i, index) => (
              <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px 24px', borderBottom: index !== 2 ? '1px solid var(--border-color)' : 'none' }}>
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Calendar size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-heading)', marginBottom: '4px' }}>Software Engineering - Lecture {i}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Today, 10:00 AM - 12:00 PM • Room 30{i}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card style={{ padding: 0 }}>
          <div className="card-header" style={{ padding: '24px 24px 0 24px', borderBottom: 'none' }}>
            <h3 className="card-title">Announcements</h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <BellRing size={16} className="text-danger" />
                  <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Semester Final Exams</span>
                </div>
                <Badge variant="danger">Urgent</Badge>
              </div>
              <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--text-muted)', lineHeight: 1.5, paddingLeft: '28px' }}>
                The final exam schedule has been published in the academic portal. Please review your respective slots.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

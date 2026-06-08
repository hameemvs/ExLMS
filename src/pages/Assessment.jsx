import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Plus, User, FileText, Calendar } from 'lucide-react';

export function Assessment() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Assessments</h1>
        <Button variant="primary"><Plus size={18} /> Create Assessment</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {[1, 2].map(i => (
          <Card key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem', color: 'var(--text-heading)' }}>{i === 1 ? 'Midterm Assignment' : 'Weekly Quiz 4'}</h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500 }}>CS101 - Introduction to Programming</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '8px 12px', minWidth: '80px' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--danger)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '4px' }}>Deadline</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#991b1b' }}>12 JUN</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FileText size={16} /> 45 Submissions</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> Published Jun 1</div>
            </div>

            <Button variant="secondary" style={{ width: '100%', marginTop: 'auto' }}>
              Grade Submissions
            </Button>
          </Card>
        ))}
      </div>

      <h2 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '20px', fontWeight: 600 }}>Recent Submissions (Needs Grading)</h2>
      <Card style={{ padding: 0 }}>
        <ul style={{ display: 'flex', flexDirection: 'column' }}>
          {[1, 2].map((i, index) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '24px', alignItems: 'start', padding: '24px', borderBottom: index === 0 ? '1px solid var(--border-color)' : 'none' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>
                <User size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '1.05rem', marginBottom: '4px' }}>Jane Doe {i}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Submitted: June 8, 10:30 AM</div>
                
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                   <div style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', backgroundColor: 'var(--bg-color)' }}>
                      <FileText size={14} className="text-accent" /> assignment_v{i}.pdf
                   </div>
                </div>

                <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '16px', backgroundColor: '#fafbfc' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Instructor Feedback</label>
                  <textarea 
                    placeholder="Enter grading feedback here..." 
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical', fontSize: '0.9rem', color: 'var(--text-heading)' }}
                  ></textarea>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '120px' }}>
                <Input type="number" placeholder="Score / 100" style={{ margin: 0, textAlign: 'center' }} />
                <Button variant="primary">Submit Grade</Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

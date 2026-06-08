import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Plus, BookOpen, Clock, Users } from 'lucide-react';

export function Course() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Course Catalog</h1>
        <Button variant="primary"><Plus size={18} /> Create Course</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <Card key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--accent)' }}>
                <BookOpen size={24} />
              </div>
              <Badge variant={i % 2 === 0 ? "default" : "success"}>{i % 2 === 0 ? "Draft" : "Active"}</Badge>
            </div>
            
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem', color: 'var(--text-heading)' }}>Introduction to Computer Science</h3>
            <p style={{ margin: '0 0 24px 0', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Instructor: Dr. Alan Turing</p>
            
            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--border-color)', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '0.875rem' }}>
                <Clock size={16} className="text-muted" />
                <span>6 Months</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '0.875rem' }}>
                <Users size={16} className="text-muted" />
                <span>120 Enrolled</span>
              </div>
            </div>
            
            <Button variant="outline" style={{ width: '100%' }}>View Details</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

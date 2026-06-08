import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, PieChart, BarChart, TrendingUp, Users } from 'lucide-react';

export function Reports() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Analytics & Reports</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="outline"><Download size={18} /> Export PDF</Button>
          <Button variant="outline"><Download size={18} /> Export Excel</Button>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <Card style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px' }}>
          <div style={{ padding: '12px', backgroundColor: '#dbeafe', borderRadius: '12px', color: 'var(--accent)' }}>
            <Users size={24} />
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Total Students</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-heading)' }}>2,845</div>
          </div>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px' }}>
          <div style={{ padding: '12px', backgroundColor: '#dcfce7', borderRadius: '12px', color: 'var(--success)' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Avg Completion Rate</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-heading)' }}>87%</div>
          </div>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <Card>
          <div className="card-header">
            <h3 className="card-title">Course Performance</h3>
            <BarChart className="text-muted" size={20} />
          </div>
          {/* Professional CSS Bar Chart */}
          <div style={{ height: '250px', display: 'flex', alignItems: 'flex-end', gap: '15%', padding: '20px 0', borderBottom: '1px solid var(--border-color)', margin: '0 20px' }}>
            <div style={{ width: '25%', height: '40%', backgroundColor: 'var(--accent)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
               <span style={{ position: 'absolute', top: '-24px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>40%</span>
            </div>
            <div style={{ width: '25%', height: '75%', backgroundColor: 'var(--primary)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
               <span style={{ position: 'absolute', top: '-24px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>75%</span>
            </div>
            <div style={{ width: '25%', height: '90%', backgroundColor: 'var(--success)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
               <span style={{ position: 'absolute', top: '-24px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>90%</span>
            </div>
            <div style={{ width: '25%', height: '60%', backgroundColor: 'var(--warning)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
               <span style={{ position: 'absolute', top: '-24px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>60%</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px', fontSize: '0.85rem', fontWeight: 500 }}>
            <span style={{ color: 'var(--text-heading)' }}>CS101</span>
            <span style={{ color: 'var(--text-heading)' }}>ENG202</span>
            <span style={{ color: 'var(--text-heading)' }}>MAT301</span>
            <span style={{ color: 'var(--text-heading)' }}>PHY101</span>
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <h3 className="card-title">Student Demographics</h3>
            <PieChart className="text-muted" size={20} />
          </div>
          {/* Professional CSS Pie Chart */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '220px', marginTop: '10px' }}>
            <div style={{ 
              width: '180px', height: '180px', borderRadius: '50%', 
              background: 'conic-gradient(var(--accent) 0% 45%, var(--primary) 45% 75%, var(--success) 75% 100%)',
              boxShadow: 'var(--shadow-sm)'
            }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '24px', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}><span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--accent)', marginRight: '8px' }}></span> IT</div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}><span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--primary)', marginRight: '8px' }}></span> Business</div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}><span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--success)', marginRight: '8px' }}></span> Engineering</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

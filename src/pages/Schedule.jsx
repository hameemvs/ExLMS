import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export function Schedule() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Academic Schedule</h1>
        <Button variant="primary"><Plus size={18} /> Add Event</Button>
      </div>

      <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--panel-bg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ border: '1px solid var(--border-color)', background: 'white', borderRadius: 'var(--radius-md)', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronLeft size={18} className="text-muted" /></button>
              <button style={{ border: '1px solid var(--border-color)', background: 'white', borderRadius: 'var(--radius-md)', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronRight size={18} className="text-muted" /></button>
            </div>
            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CalendarIcon size={18} className="text-muted" /> June 8 - June 14, 2026
            </h2>
          </div>
          <div style={{ display: 'flex', backgroundColor: 'var(--bg-color)', padding: '4px', borderRadius: 'var(--radius-md)' }}>
            <button style={{ padding: '6px 16px', background: 'white', color: 'var(--text-heading)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 500, boxShadow: 'var(--shadow-sm)' }}>Week</button>
            <button style={{ padding: '6px 16px', background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Day</button>
          </div>
        </div>

        {/* Professional Calendar Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', borderBottom: '1px solid var(--border-color)', backgroundColor: '#fafbfc' }}>
          <div style={{ borderRight: '1px solid var(--border-color)' }}></div>
          {['Mon 8', 'Tue 9', 'Wed 10', 'Thu 11', 'Fri 12', 'Sat 13', 'Sun 14'].map((day, i) => (
            <div key={day} style={{ padding: '16px 12px', textAlign: 'center', borderRight: i !== 6 ? '1px solid var(--border-color)' : 'none' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>{day.split(' ')[0]}</div>
              <div style={{ fontSize: '1.25rem', color: 'var(--text-heading)', fontWeight: 500, marginTop: '4px' }}>{day.split(' ')[1]}</div>
            </div>
          ))}
        </div>

        <div style={{ height: '600px', overflowY: 'auto', position: 'relative', backgroundImage: 'linear-gradient(to bottom, transparent 59px, var(--border-color) 60px)', backgroundSize: '100% 60px' }}>
          {/* Time Labels */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--panel-bg)', zIndex: 2 }}>
            {[8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6].map((hour, i) => (
              <div key={i} style={{ height: '60px', position: 'relative' }}>
                 <span style={{ position: 'absolute', right: '12px', top: '-10px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, backgroundColor: 'var(--panel-bg)', padding: '0 4px' }}>
                    {hour === 12 ? '12 PM' : hour > 7 && hour < 12 ? `${hour} AM` : `${hour} PM`}
                 </span>
              </div>
            ))}
          </div>

          {/* Grid Lines */}
          <div style={{ position: 'absolute', left: '80px', right: 0, top: 0, bottom: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {[1, 2, 3, 4, 5, 6, 7].map((i, index) => (
              <div key={i} style={{ borderRight: index !== 6 ? '1px solid var(--border-color)' : 'none' }}></div>
            ))}
          </div>

          {/* Events */}
          <div style={{ position: 'absolute', top: '60px', left: 'calc(80px + (100% - 80px) / 7 * 0)', width: 'calc((100% - 80px) / 7 - 12px)', height: '120px', backgroundColor: '#eff6ff', borderLeft: '4px solid var(--accent)', borderRadius: '4px', margin: '0 6px', padding: '12px', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e3a8a', marginBottom: '4px' }}>Web Development</div>
            <div style={{ fontSize: '0.75rem', color: '#3b82f6' }}>09:00 - 11:00 • Lab 2</div>
          </div>
          <div style={{ position: 'absolute', top: '180px', left: 'calc(80px + (100% - 80px) / 7 * 2)', width: 'calc((100% - 80px) / 7 - 12px)', height: '60px', backgroundColor: '#fef2f2', borderLeft: '4px solid var(--danger)', borderRadius: '4px', margin: '0 6px', padding: '12px', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#7f1d1d', marginBottom: '4px' }}>Staff Meeting</div>
            <div style={{ fontSize: '0.75rem', color: '#ef4444' }}>11:00 - 12:00 • Boardroom</div>
          </div>
          <div style={{ position: 'absolute', top: '300px', left: 'calc(80px + (100% - 80px) / 7 * 4)', width: 'calc((100% - 80px) / 7 - 12px)', height: '180px', backgroundColor: '#f0fdf4', borderLeft: '4px solid var(--success)', borderRadius: '4px', margin: '0 6px', padding: '12px', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#14532d', marginBottom: '4px' }}>Project Presentations</div>
            <div style={{ fontSize: '0.75rem', color: '#22c55e' }}>13:00 - 16:00 • Auditorium</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

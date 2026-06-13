import React from 'react';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export function Schedule() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-slate-800">Academic Schedule</h1>
        <button className="px-4 py-2 btn-gradient rounded-xl text-sm font-medium flex items-center gap-2">
          <Plus size={18} /> Add Event
        </button>
      </div>

      <div className="card overflow-hidden flex flex-col">
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-5">
            <div className="flex gap-2">
              <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center">
                <ChevronLeft size={18} className="text-slate-400" />
              </button>
              <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center">
                <ChevronRight size={18} className="text-slate-400" />
              </button>
            </div>
            <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2">
              <CalendarIcon size={18} className="text-slate-400" /> June 8 - June 14, 2026
            </h2>
          </div>
          <div className="bg-slate-100 p-1 rounded-xl flex">
            <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-slate-800 text-sm font-medium">Week</button>
            <button className="px-4 py-1.5 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors">Day</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)' }} className="border-b border-slate-100 bg-slate-50/30">
          <div className="border-r border-slate-100"></div>
          {['Mon 8', 'Tue 9', 'Wed 10', 'Thu 11', 'Fri 12', 'Sat 13', 'Sun 14'].map((day, i) => (
            <div key={day} className={`py-4 px-3 text-center ${i !== 6 ? 'border-r border-slate-100' : ''}`}>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{day.split(' ')[0]}</div>
              <div className="text-xl text-slate-800 font-medium mt-1">{day.split(' ')[1]}</div>
            </div>
          ))}
        </div>

        <div className="relative overflow-y-auto thin-scrollbar" style={{ height: '600px', backgroundImage: 'linear-gradient(to bottom, transparent 59px, #f1f5f9 60px)', backgroundSize: '100% 60px' }}>
          <div className="absolute left-0 top-0 bottom-0 border-r border-slate-100 bg-slate-50/50 z-[2]" style={{ width: '80px' }}>
            {[8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6].map((hour, i) => (
              <div key={i} className="relative" style={{ height: '60px' }}>
                <span className="absolute right-3 text-xs text-slate-400 font-medium bg-slate-50 px-1" style={{ top: '-10px' }}>
                  {hour === 12 ? '12 PM' : hour > 7 && hour < 12 ? `${hour} AM` : `${hour} PM`}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute top-0 bottom-0 z-[1]" style={{ left: '80px', right: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {[1, 2, 3, 4, 5, 6, 7].map((i, index) => (
              <div key={i} className={index !== 6 ? 'border-r border-slate-100' : ''}></div>
            ))}
          </div>

          <div className="absolute rounded-lg z-[3]" style={{ top: '60px', left: 'calc(80px + (100% - 80px) / 7 * 0)', width: 'calc((100% - 80px) / 7 - 12px)', height: '120px', margin: '0 6px', padding: '12px', backgroundColor: '#eef2ff', borderLeft: '4px solid #6366f1', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div className="font-semibold text-sm text-indigo-900 mb-1">Web Development</div>
            <div className="text-xs text-indigo-500">09:00 - 11:00 • Lab 2</div>
          </div>
          <div className="absolute rounded-lg z-[3]" style={{ top: '180px', left: 'calc(80px + (100% - 80px) / 7 * 2)', width: 'calc((100% - 80px) / 7 - 12px)', height: '60px', margin: '0 6px', padding: '12px', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div className="font-semibold text-sm text-rose-900 mb-1">Staff Meeting</div>
            <div className="text-xs text-rose-500">11:00 - 12:00 • Boardroom</div>
          </div>
          <div className="absolute rounded-lg z-[3]" style={{ top: '300px', left: 'calc(80px + (100% - 80px) / 7 * 4)', width: 'calc((100% - 80px) / 7 - 12px)', height: '180px', margin: '0 6px', padding: '12px', backgroundColor: '#f0fdf4', borderLeft: '4px solid #10b981', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div className="font-semibold text-sm text-emerald-900 mb-1">Project Presentations</div>
            <div className="text-xs text-emerald-500">13:00 - 16:00 • Auditorium</div>
          </div>
        </div>
      </div>
    </div>
  );
}

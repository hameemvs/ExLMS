import React, { useState } from 'react';
import { CheckCircle2, XCircle, Clock, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

export function Attendance() {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Attendance Tracking</h1>
      </div>

      <div className="bg-slate-100 p-1 rounded-xl inline-flex gap-1 mb-6">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-4 py-2 text-sm rounded-lg transition-all ${
            activeTab === 'daily'
              ? 'bg-white shadow-sm text-slate-800 font-medium'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Daily Attendance
        </button>
        <button
          onClick={() => setActiveTab('class')}
          className={`px-4 py-2 text-sm rounded-lg transition-all ${
            activeTab === 'class'
              ? 'bg-white shadow-sm text-slate-800 font-medium'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Class Attendance
        </button>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="card overflow-hidden">
          <div className="flex gap-4 p-5 border-b border-slate-100">
            <div className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl cursor-pointer text-sm font-medium bg-white hover:border-slate-300 transition-all">
              <CalendarIcon size={16} className="text-slate-400" />
              <span className="text-slate-800">June 8, 2026</span>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
            <div className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl cursor-pointer text-sm font-medium bg-white hover:border-slate-300 transition-all">
              <span className="text-slate-800">Class: CS101</span>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-left">
                <th className="px-6 py-4 text-slate-400 text-xs font-bold uppercase">Student Name</th>
                <th className="px-6 py-4 text-slate-400 text-xs font-bold uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i, index) => (
                <tr key={i} className={`${index !== 4 ? 'border-b border-slate-100' : ''} hover:bg-slate-50/50 transition-colors`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" className="w-4 h-4 accent-indigo-600 cursor-pointer" defaultChecked={i !== 3} />
                      <span className="font-medium text-slate-800">Sarah Connor {i}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {i === 1 || i === 4 || i === 5 ? <CheckCircle2 size={20} className="text-emerald-500" /> :
                     i === 2 ? <Clock size={20} className="text-amber-500" /> :
                     <XCircle size={20} className="text-rose-500" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-3 px-6 py-5 border-t border-slate-100 bg-slate-50 rounded-b-[1.25rem]">
            <button className="px-4 py-2 btn-gradient rounded-xl text-sm font-medium">
              Submit Attendance
            </button>
            <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-100 transition-all duration-200">
              Download Report
            </button>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">Daily Summary</h3>
          </div>

          <div className="flex justify-center items-center h-[180px] mb-8">
            <div
              className="w-[150px] h-[150px] rounded-full shadow-md"
              style={{
                background: 'conic-gradient(#10b981 0% 70%, #f59e0b 70% 85%, #ef4444 85% 100%)'
              }}
            ></div>
          </div>

          <ul className="space-y-0">
            <li className="flex justify-between items-center py-3 border-b border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-3 h-3 rounded bg-emerald-500"></span>
                Present
              </div>
              <span className="font-bold text-slate-800">70%</span>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-3 h-3 rounded bg-amber-500"></span>
                Late
              </div>
              <span className="font-bold text-slate-800">15%</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-3 h-3 rounded bg-rose-500"></span>
                Absent
              </div>
              <span className="font-bold text-slate-800">15%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

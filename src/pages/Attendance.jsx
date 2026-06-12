import React, { useState } from 'react';
import { CheckCircle2, XCircle, Clock, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

export function Attendance() {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Tracking</h1>
      </div>

      <div className="bg-gray-100 p-1 rounded-xl inline-flex gap-1 mb-6">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            activeTab === 'daily'
              ? 'bg-white shadow-sm text-gray-800 font-medium'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Daily Attendance
        </button>
        <button
          onClick={() => setActiveTab('class')}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            activeTab === 'class'
              ? 'bg-white shadow-sm text-gray-800 font-medium'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Class Attendance
        </button>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="flex gap-4 p-5 border-b border-gray-100">
            <div className="flex items-center gap-2 border border-gray-100 px-4 py-2 rounded-xl cursor-pointer text-sm font-medium bg-white">
              <CalendarIcon size={16} className="text-gray-400" />
              <span className="text-gray-800">June 8, 2026</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 border border-gray-100 px-4 py-2 rounded-xl cursor-pointer text-sm font-medium bg-white">
              <span className="text-gray-800">Class: CS101</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-left">
                <th className="px-6 py-4 text-gray-400 text-xs font-bold uppercase">Student Name</th>
                <th className="px-6 py-4 text-gray-400 text-xs font-bold uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i, index) => (
                <tr key={i} className={index !== 4 ? 'border-b border-gray-100' : ''}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" defaultChecked={i !== 3} />
                      <span className="font-medium text-gray-800">Sarah Connor {i}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {i === 1 || i === 4 || i === 5 ? <CheckCircle2 size={20} className="text-green-500" /> :
                     i === 2 ? <Clock size={20} className="text-amber-500" /> :
                     <XCircle size={20} className="text-red-500" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50 rounded-b-3xl">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
              Submit Attendance
            </button>
            <button className="px-4 py-2 border border-gray-100 text-gray-800 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              Download Report
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Daily Summary</h3>
          </div>

          <div className="flex justify-center items-center h-[180px] mb-8">
            <div
              className="w-[150px] h-[150px] rounded-full shadow-sm"
              style={{
                background: 'conic-gradient(#22c55e 0% 70%, #f59e0b 70% 85%, #ef4444 85% 100%)'
              }}
            ></div>
          </div>

          <ul className="space-y-0">
            <li className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-3 h-3 rounded bg-green-500"></span>
                Present
              </div>
              <span className="font-bold text-gray-800">70%</span>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-3 h-3 rounded bg-amber-500"></span>
                Late
              </div>
              <span className="font-bold text-gray-800">15%</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-3 h-3 rounded bg-red-500"></span>
                Absent
              </div>
              <span className="font-bold text-gray-800">15%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Plus, Users, Settings } from 'lucide-react';
import { mockData } from '../mockData';

export function HRM() {
  const [activeTab, setActiveTab] = useState('directory');

  const tabs = [
    { key: 'directory', label: 'Staff Directory' },
    { key: 'performance', label: 'Performance Reviews' },
    { key: 'leave', label: 'Leave Requests' },
    { key: 'roles', label: 'Roles & Permissions' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Human Resources</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 btn-gradient rounded-xl text-sm font-medium flex items-center gap-2">
            <Plus size={18} /> Add Staff
          </button>
          <button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center gap-2">
            <Settings size={18} /> Manage Roles
          </button>
        </div>
      </div>

      <div className="bg-slate-100 p-1 rounded-xl inline-flex mb-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm transition-all rounded-lg ${
              activeTab === tab.key
                ? 'bg-white shadow-sm text-slate-800 font-medium'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'directory' && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {mockData.hrm_employees.map(employee => (
            <div key={employee.id} className="card card-hover p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center text-indigo-500 mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-slate-800 font-bold text-lg mb-1">{employee.name}</h3>
              <p className="text-indigo-600 text-sm font-medium mb-3">{employee.role}</p>
              
              <div className="w-full bg-slate-50 rounded-xl p-3 mb-4 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Department:</span>
                  <span className="font-medium">{employee.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Joined:</span>
                  <span className="font-medium">{employee.joinDate}</span>
                </div>
              </div>
              
              <button className="w-full px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all duration-200">
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'leave' && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-slate-800">Recent Leave Requests</h3>
          </div>
          <div className="card">
            <ul className="flex flex-col">
              {mockData.leave_requests.map((request, index) => (
                <li
                  key={request.id}
                  className={`flex items-center justify-between p-6 ${
                    index !== mockData.leave_requests.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-indigo-500">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 mb-1">{request.employee}</div>
                      <div className="text-sm text-slate-400">{request.type} • {request.dates} ({request.duration})</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {request.status === 'Approved' && (
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-emerald-200/50">Approved</span>
                    )}
                    {request.status === 'Pending' && (
                      <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-amber-200/50">Pending</span>
                    )}
                    {request.status === 'Denied' && (
                      <span className="bg-rose-50 text-rose-500 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-rose-200/50">Denied</span>
                    )}
                    {request.status === 'Pending' && (
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-emerald-200 text-emerald-600 rounded-xl text-xs font-medium hover:bg-emerald-50 transition-all duration-200">
                          Approve
                        </button>
                        <button className="px-3 py-1.5 border border-rose-200 text-rose-500 rounded-xl text-xs font-medium hover:bg-rose-50 transition-all duration-200">
                          Deny
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {(activeTab !== 'leave' && activeTab !== 'directory') && (
        <div className="card p-6 text-center py-16">
          <Users size={48} className="text-slate-200 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">No Data Available</h3>
          <p className="text-sm text-slate-400">Please select the "Staff Directory" or "Leave Requests" tab.</p>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { Plus, Users, Settings } from 'lucide-react';

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
        <h1 className="text-2xl font-bold text-gray-800">Human Resources</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus size={18} /> Add Staff
          </button>
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Settings size={18} /> Manage Roles
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-1 rounded-xl inline-flex mb-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm transition-all rounded-lg ${
              activeTab === tab.key
                ? 'bg-white shadow-sm text-gray-800 font-medium'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'leave' && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-gray-800">Recent Leave Requests</h3>
          </div>
          <div className="bg-white rounded-3xl shadow-sm">
            <ul className="flex flex-col">
              {[1, 2, 3].map((i, index) => (
                <li
                  key={i}
                  className={`flex items-center justify-between p-6 ${
                    index !== 2 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-blue-600">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-1">Dr. Alice Smith</div>
                      <div className="text-sm text-gray-400">Medical Leave • June 10 - June 14 (4 days)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {i === 1 && (
                      <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">Approved</span>
                    )}
                    {i === 2 && (
                      <span className="bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-1 rounded-full">Pending</span>
                    )}
                    {i === 3 && (
                      <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full">Denied</span>
                    )}
                    {i === 2 && (
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-green-200 text-green-600 rounded-xl text-xs font-medium hover:bg-green-50 transition-colors">
                          Approve
                        </button>
                        <button className="px-3 py-1.5 border border-red-200 text-red-500 rounded-xl text-xs font-medium hover:bg-red-50 transition-colors">
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

      {activeTab !== 'leave' && (
        <div className="bg-white rounded-3xl p-6 shadow-sm text-center py-16">
          <Users size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800 mb-2">No Data Available</h3>
          <p className="text-sm text-gray-400">Please select the "Leave Requests" tab to view the active mockup content.</p>
        </div>
      )}
    </div>
  );
}

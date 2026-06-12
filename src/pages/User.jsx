import React, { useState } from 'react';
import { Search, Plus, User as UserIcon, Mail } from 'lucide-react';

export function User() {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-bold text-gray-800">Users Directory</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={18} /> Add User
        </button>
      </div>

      <div className="bg-gray-100 p-1 rounded-xl inline-flex mb-6">
        {['students', 'staff'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm transition-all capitalize ${
              activeTab === tab
                ? 'bg-white shadow-sm rounded-lg text-gray-800 font-medium'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white w-80">
          <Search size={18} className="text-gray-400" />
          <input className="outline-none flex-1 text-gray-800 placeholder-gray-400" placeholder="Search by name, ID, or email..." />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center text-center pt-8">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white shadow-sm mb-4">
              <UserIcon size={32} className="text-gray-400" />
            </div>
            <h3 className="text-gray-800 font-bold text-base mb-1">
              {activeTab === 'students' ? `Jane Doe ${i}` : `Dr. Alan ${i}`}
            </h3>
            <p className="text-blue-600 text-sm font-medium mb-4">
              {activeTab === 'students' ? 'BSc IT - Year 2' : 'Computer Science Dept'}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
              <Mail size={14} />
              <span>{activeTab === 'students' ? `student${i}@esoft.edu` : `staff${i}@esoft.edu`}</span>
            </div>
            <button className="w-full px-4 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Search, Filter, DollarSign } from 'lucide-react';

export function Payment() {
  const [activeTab, setActiveTab] = useState('fees');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Payments</h1>
      </div>

      <div className="bg-slate-100 p-1 rounded-xl inline-flex mb-6">
        <button
          onClick={() => setActiveTab('fees')}
          className={`px-4 py-2 text-sm transition-all rounded-lg ${
            activeTab === 'fees'
              ? 'bg-white shadow-sm text-slate-800 font-medium'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Student Fees
        </button>
        <button
          onClick={() => setActiveTab('salary')}
          className={`px-4 py-2 text-sm transition-all rounded-lg ${
            activeTab === 'salary'
              ? 'bg-white shadow-sm text-slate-800 font-medium'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Staff Salary
        </button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2 text-sm bg-white w-72 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
            <Search size={16} className="text-slate-400" />
            <input
              className="outline-none flex-1 text-slate-800 placeholder-slate-400"
              placeholder="Search by name or ID..."
            />
          </div>
          <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center gap-1.5">
            <Filter size={14} />
            Filter
          </button>
        </div>

        {activeTab === 'fees' ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-semibold text-slate-400 uppercase py-4 px-6">Student Name</th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase py-4 px-6">Course</th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase py-4 px-6">Amount</th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase py-4 px-6">Status</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i, index) => (
                <tr key={i} className={`${index !== 2 ? 'border-b border-slate-100' : ''} hover:bg-slate-50/50 transition-colors`}>
                  <td className="py-4 px-6 font-bold text-slate-800">John Doe {i}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">Software Engineering</td>
                  <td className="py-4 px-6 font-bold text-slate-800">LKR 50,000</td>
                  <td className="py-4 px-6">
                    {i === 1 ? (
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-emerald-200/50">Paid</span>
                    ) : (
                      <span className="bg-rose-50 text-rose-500 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-rose-200/50">Outstanding</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    {i !== 1 && (
                      <button className="px-4 py-2 btn-gradient rounded-xl text-sm font-medium">
                        Pay Now
                      </button>
                    )}
                    {i === 1 && (
                      <button className="px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-all duration-200">
                        Receipt
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ul className="flex flex-col">
            {[1, 2].map((i, index) => (
              <li key={i} className={`flex items-center justify-between px-6 py-5 ${index === 0 ? 'border-b border-slate-100' : ''} hover:bg-slate-50/50 transition-colors`}>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center text-indigo-500">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-base mb-1">Dr. Smith {i}</div>
                    <div className="text-sm text-slate-400">June 2026 Salary • Computer Science Dept</div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="text-sm text-slate-400 mb-1">Amount</div>
                    <div className="font-bold text-slate-800 text-lg">LKR 150,000</div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-emerald-200/50">Transferred</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

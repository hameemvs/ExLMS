import React, { useState } from 'react';
import { Search, Filter, DollarSign } from 'lucide-react';

export function Payment() {
  const [activeTab, setActiveTab] = useState('fees');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
      </div>

      <div className="bg-gray-100 p-1 rounded-xl inline-flex mb-6">
        <button
          onClick={() => setActiveTab('fees')}
          className={`px-4 py-2 text-sm transition-all rounded-lg ${
            activeTab === 'fees'
              ? 'bg-white shadow-sm text-gray-800 font-medium'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Student Fees
        </button>
        <button
          onClick={() => setActiveTab('salary')}
          className={`px-4 py-2 text-sm transition-all rounded-lg ${
            activeTab === 'salary'
              ? 'bg-white shadow-sm text-gray-800 font-medium'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Staff Salary
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm bg-white w-72">
            <Search size={16} className="text-gray-400" />
            <input
              className="outline-none flex-1 text-gray-800 placeholder-gray-400"
              placeholder="Search by name or ID..."
            />
          </div>
          <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors flex items-center gap-1.5">
            <Filter size={14} />
            Filter
          </button>
        </div>

        {activeTab === 'fees' ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-400 uppercase py-4 px-6">Student Name</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase py-4 px-6">Course</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase py-4 px-6">Amount</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase py-4 px-6">Status</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i, index) => (
                <tr key={i} className={index !== 2 ? 'border-b border-gray-100' : ''}>
                  <td className="py-4 px-6 font-bold text-gray-800">John Doe {i}</td>
                  <td className="py-4 px-6 text-sm text-gray-400">Software Engineering</td>
                  <td className="py-4 px-6 font-bold text-gray-800">LKR 50,000</td>
                  <td className="py-4 px-6">
                    {i === 1 ? (
                      <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">Paid</span>
                    ) : (
                      <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full">Outstanding</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    {i !== 1 && (
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                        Pay Now
                      </button>
                    )}
                    {i === 1 && (
                      <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">
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
              <li key={i} className={`flex items-center justify-between px-6 py-5 ${index === 0 ? 'border-b border-gray-100' : ''}`}>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-base mb-1">Dr. Smith {i}</div>
                    <div className="text-sm text-gray-400">June 2026 Salary • Computer Science Dept</div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Amount</div>
                    <div className="font-bold text-gray-800 text-lg">LKR 150,000</div>
                  </div>
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">Transferred</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

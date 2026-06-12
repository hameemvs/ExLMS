import React from 'react';
import { Download, PieChart, BarChart, TrendingUp, Users } from 'lucide-react';

export function Reports() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-800">Analytics & Reports</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download size={18} /> Export PDF
          </button>
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download size={18} /> Export Excel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
            <Users size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-400 font-medium">Total Students</div>
            <div className="text-2xl font-bold text-gray-800">2,845</div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-xl text-green-500">
            <TrendingUp size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-400 font-medium">Avg Completion Rate</div>
            <div className="text-2xl font-bold text-gray-800">87%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Course Performance</h3>
            <BarChart className="text-gray-400" size={20} />
          </div>
          <div className="flex items-end gap-[15%] h-[250px] pb-5 border-b border-gray-100 mx-0">
            <div className="w-1/4 h-[40%] bg-blue-500 rounded-t relative">
              <span className="absolute -top-6 w-full text-center text-xs font-semibold text-gray-400">40%</span>
            </div>
            <div className="w-1/4 h-[75%] bg-indigo-500 rounded-t relative">
              <span className="absolute -top-6 w-full text-center text-xs font-semibold text-gray-400">75%</span>
            </div>
            <div className="w-1/4 h-[90%] bg-green-500 rounded-t relative">
              <span className="absolute -top-6 w-full text-center text-xs font-semibold text-gray-400">90%</span>
            </div>
            <div className="w-1/4 h-[60%] bg-amber-400 rounded-t relative">
              <span className="absolute -top-6 w-full text-center text-xs font-semibold text-gray-400">60%</span>
            </div>
          </div>
          <div className="flex justify-around mt-4 text-sm font-medium">
            <span className="text-gray-800">CS101</span>
            <span className="text-gray-800">ENG202</span>
            <span className="text-gray-800">MAT301</span>
            <span className="text-gray-800">PHY101</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Student Demographics</h3>
            <PieChart className="text-gray-400" size={20} />
          </div>
          <div className="flex justify-center items-center h-[220px] mt-2">
            <div
              className="w-[180px] h-[180px] rounded-full shadow-sm"
              style={{
                background: 'conic-gradient(#3b82f6 0% 45%, #6366f1 45% 75%, #22c55e 75% 100%)'
              }}
            ></div>
          </div>
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center text-gray-800">
              <span className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></span> IT
            </div>
            <div className="flex items-center text-gray-800">
              <span className="w-3 h-3 rounded-sm bg-indigo-500 mr-2"></span> Business
            </div>
            <div className="flex items-center text-gray-800">
              <span className="w-3 h-3 rounded-sm bg-green-500 mr-2"></span> Engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

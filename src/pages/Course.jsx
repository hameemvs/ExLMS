import React from 'react';
import { Plus, BookOpen, Clock, Users } from 'lucide-react';

export function Course() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-800">Course Catalog</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={18} /> Create Course
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <BookOpen size={24} />
              </div>
              {i % 2 === 0 ? (
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full">Draft</span>
              ) : (
                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">Active</span>
              )}
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2">Introduction to Computer Science</h3>
            <p className="text-sm text-gray-400 mb-6">Instructor: Dr. Alan Turing</p>

            <div className="flex gap-6 mb-6 pb-6 border-b border-gray-100 flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <Clock size={16} className="text-gray-400" />
                <span>6 Months</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <Users size={16} className="text-gray-400" />
                <span>120 Enrolled</span>
              </div>
            </div>

            <button className="w-full px-4 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

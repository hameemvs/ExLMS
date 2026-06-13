import React from 'react';
import { Plus, BookOpen, Clock, Users } from 'lucide-react';

export function Course() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-slate-800">Course Catalog</h1>
        <button className="px-4 py-2 btn-gradient rounded-xl text-sm font-medium flex items-center gap-2">
          <Plus size={18} /> Create Course
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="card card-hover p-6 flex flex-col">
            <div className="flex justify-between items-start mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center text-indigo-500">
                <BookOpen size={24} />
              </div>
              {i % 2 === 0 ? (
                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-slate-200/50">Draft</span>
              ) : (
                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-emerald-200/50">Active</span>
              )}
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Introduction to Computer Science</h3>
            <p className="text-sm text-slate-400 mb-6">Instructor: Dr. Alan Turing</p>

            <div className="flex gap-6 mb-6 pb-6 border-b border-slate-100 flex-1">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Clock size={16} className="text-slate-400" />
                <span>6 Months</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Users size={16} className="text-slate-400" />
                <span>120 Enrolled</span>
              </div>
            </div>

            <button className="w-full px-4 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

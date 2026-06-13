import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Search } from 'lucide-react';

export function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] bg-dots">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Welcome back, Marlin 👋</h2>
            <p className="text-xs text-slate-400 mt-0.5">Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-100/80 rounded-xl px-4 py-2.5 text-sm w-72 border border-slate-200/50 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
              <Search size={16} className="text-slate-400" />
              <input 
                className="outline-none flex-1 text-slate-700 placeholder-slate-400 bg-transparent text-sm" 
                placeholder="Search anything..." 
              />
            </div>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-indigo-200">
              M
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto thin-scrollbar p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Calendar, BookOpen, 
  FileText, Megaphone, 
  Users, Settings, LogOut, Bell,
  CreditCard, BarChart3, CalendarCheck, Briefcase
} from 'lucide-react';

export function Sidebar() {
  const NavItem = ({ to, icon: Icon, label, hasNotification = false }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        group flex items-center justify-between px-4 py-2.5 mb-0.5 rounded-xl transition-all duration-200
        ${isActive 
          ? 'bg-white/15 text-white font-medium shadow-lg shadow-indigo-900/20 border-l-[3px] border-indigo-300 ml-0 pl-3.5' 
          : 'text-indigo-200/70 hover:text-white hover:bg-white/8 border-l-[3px] border-transparent ml-0 pl-3.5'
        }
      `}
    >
      <div className="flex items-center gap-3.5">
        <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />
        <span className="text-[13px]">{label}</span>
      </div>
      {hasNotification && (
        <div className="w-2 h-2 rounded-full bg-indigo-300 animate-pulse"></div>
      )}
    </NavLink>
  );

  const NavGroup = ({ title, children }) => (
    <div className="mb-5">
      <div className="text-[10px] font-semibold text-indigo-300/50 uppercase tracking-[0.15em] mb-2 px-4">
        {title}
      </div>
      {children}
    </div>
  );

  return (
    <aside className="w-[250px] bg-gradient-to-b from-[#1E1B4B] via-[#312E81] to-[#4C1D95] flex flex-col h-full shadow-2xl relative overflow-hidden">
      
      <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-80px] left-[-40px] w-[200px] h-[200px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="p-5 pb-6 border-b border-white/8 relative z-10">
        <div className="glass rounded-2xl p-3.5 flex items-center gap-3">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marlin" 
            alt="Marlin Monre" 
            className="w-10 h-10 rounded-xl bg-indigo-600/50 border border-white/20 shadow-md"
          />
          <div className="flex-1 min-w-0">
            <div className="text-white font-semibold text-sm truncate">Marlin Monre</div>
            <div className="text-indigo-300/60 text-xs">Design Lecture</div>
          </div>
          <button className="p-2 bg-white/8 hover:bg-white/15 rounded-lg text-indigo-200 hover:text-white transition-all duration-200 relative">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-400 rounded-full ring-2 ring-[#312E81]"></span>
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 relative z-10">
        <NavGroup title="Main">
          <NavItem to="/dashboard" icon={Home} label="Home" />
          <NavItem to="/payment" icon={CreditCard} label="Payment" />
          <NavItem to="/reports" icon={BarChart3} label="Reports" />
          <NavItem to="/schedule" icon={Calendar} label="Schedule" />
        </NavGroup>

        <NavGroup title="Academic">
          <NavItem to="/course" icon={BookOpen} label="Online Course" />
          <NavItem to="/assessment" icon={FileText} label="Assessment" />
          <NavItem to="/attendance" icon={CalendarCheck} label="Attendance" />
          <NavItem to="/announcement" icon={Megaphone} label="Announcement" hasNotification />
        </NavGroup>

        <NavGroup title="Users">
          <NavItem to="/user" icon={Users} label="Users Directory" />
          <NavItem to="/hrm" icon={Briefcase} label="HRM" />
        </NavGroup>
      </nav>

      <div className="p-3 border-t border-white/8 relative z-10">
        <button className="group flex items-center gap-3.5 px-4 py-2.5 w-full text-indigo-200/60 hover:text-rose-300 hover:bg-white/5 rounded-xl transition-all duration-200">
          <LogOut size={18} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="text-[13px]">Logout</span>
        </button>
      </div>
    </aside>
  );
}

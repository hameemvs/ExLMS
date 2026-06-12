import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, MessageSquare, Calendar, BookOpen, 
  FileText, MessageCircle, Megaphone, 
  Users, UserCog, Settings, LogOut, Bell,
  CreditCard, BarChart3, CalendarCheck, Briefcase
} from 'lucide-react';

export function Sidebar() {
  const NavItem = ({ to, icon: Icon, label, hasNotification = false }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        flex items-center justify-between px-4 py-3 mb-1 rounded-xl transition-colors
        ${isActive 
          ? 'bg-white/20 text-white font-medium shadow-sm' 
          : 'text-blue-100 hover:text-white hover:bg-white/10'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <Icon size={20} />
        <span>{label}</span>
      </div>
      {hasNotification && (
        <div className="w-2 h-2 rounded-full bg-white"></div>
      )}
    </NavLink>
  );

  const NavGroup = ({ title, children }) => (
    <div className="mb-6">
      <div className="text-[11px] font-bold text-blue-200/80 uppercase tracking-widest mb-3 px-4">
        {title}
      </div>
      {children}
    </div>
  );

  return (
    <aside className="w-64 bg-gradient-to-b from-[#0055D4] to-[#0092E1] flex flex-col h-full border-r border-blue-400/20 shadow-lg relative z-20">
      {/* User Profile Area */}
      <div className="p-6 pb-8 border-b border-blue-400/20 flex items-center justify-between relative z-[60]">
        <div className="flex items-center gap-3">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marlin" 
            alt="Marlin Monre" 
            className="w-10 h-10 rounded-full bg-blue-700/50 border border-white/20"
          />
          <div>
            <div className="text-white font-semibold text-sm">Marlin Monre</div>
            <div className="text-blue-200 text-xs">Design Lecture</div>
          </div>
        </div>
        <button className="p-2 bg-white/10 rounded-lg text-blue-100 hover:text-white hover:bg-white/20 transition-colors relative">
          <Bell size={18} />
          {/* Subtle dot for notification */}
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-400 rounded-full"></span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto no-scrollbar p-4 relative z-[60]">
        <NavGroup title="Main">
          <NavItem to="/dashboard" icon={Home} label="Home" />
          <NavItem to="/payment" icon={CreditCard} label="Payment" />
          <NavItem to="/reports" icon={BarChart3} label="Reports" />
          <NavItem to="/schedule" icon={Calendar} label="Schedule" />
          <NavItem to="/messages" icon={MessageSquare} label="Messages" hasNotification />
        </NavGroup>

        <NavGroup title="Academic">
          <NavItem to="/course" icon={BookOpen} label="Online Course" />
          <NavItem to="/assessment" icon={FileText} label="Assessment" />
          <NavItem to="/attendance" icon={CalendarCheck} label="Attendance" />
          <NavItem to="/discussion" icon={MessageCircle} label="Discussion" hasNotification />
          <NavItem to="/announcement" icon={Megaphone} label="Announcement" hasNotification />
        </NavGroup>

        <NavGroup title="Users">
          <NavItem to="/user" icon={Users} label="Users Directory" />
          <NavItem to="/hrm" icon={Briefcase} label="HRM" />
          <NavItem to="/teachers" icon={UserCog} label="Teachers" />
          <NavItem to="/settings" icon={Settings} label="Settings" />
        </NavGroup>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-blue-400/20 relative z-[60]">
        <button className="flex items-center gap-4 px-4 py-3 w-full text-blue-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

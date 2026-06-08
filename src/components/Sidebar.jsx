import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, Users, BarChart3, BookOpen, CalendarCheck, CalendarDays, Bell, Briefcase, FileSignature, GraduationCap } from 'lucide-react';
import './layout.css';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/payment', label: 'Payment', icon: CreditCard },
  { path: '/user', label: 'User', icon: Users },
  { path: '/reports', label: 'Reports', icon: BarChart3 },
  { path: '/course', label: 'Course', icon: BookOpen },
  { path: '/attendance', label: 'Attendance', icon: CalendarCheck },
  { path: '/schedule', label: 'Schedule', icon: CalendarDays },
  { path: '/announcement', label: 'Announcement', icon: Bell },
  { path: '/hrm', label: 'HRM', icon: Briefcase },
  { path: '/assessment', label: 'Assessment', icon: FileSignature },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <GraduationCap className="sidebar-logo-icon" size={28} />
          ESOFT
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <item.icon className="sidebar-icon" size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

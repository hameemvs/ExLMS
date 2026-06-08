import React from 'react';
import { Bell } from 'lucide-react';
import './layout.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
          {/* Notification Dot */}
          <span style={{ position: 'absolute', top: '8px', right: '10px', width: '8px', height: '8px', backgroundColor: 'var(--danger)', borderRadius: '50%' }}></span>
        </button>
        <div className="user-avatar">
          JD
        </div>
      </div>
    </header>
  );
}

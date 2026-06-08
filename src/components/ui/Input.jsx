import React from 'react';
import './ui.css';

export function Input({ label, icon, className = '', ...props }) {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input className="input-field" {...props} />
      </div>
    </div>
  );
}

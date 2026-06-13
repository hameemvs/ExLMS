import React from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"></div>
      <div 
        className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md relative z-10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-200"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}

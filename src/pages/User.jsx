import React, { useState } from 'react';
import { Search, Plus, User as UserIcon, Mail, Download } from 'lucide-react';
import { mockData } from '../mockData';
import { Modal } from '../components/ui/Modal';
import { QRCodeCanvas } from 'qrcode.react';

export function User() {
  const [activeTab, setActiveTab] = useState('students');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const filteredUsers = mockData.users.filter((u) => 
    activeTab === 'students' ? u.role === 'Student' : u.role !== 'Student'
  );

  const downloadQRCode = () => {
    if (!selectedUser) return;
    const canvas = document.getElementById(`qr-code-${selectedUser.id}`);
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${selectedUser.name.replace(/\s+/g, '_')}_QR.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-bold text-slate-800">Users Directory</h1>
        <button className="px-4 py-2 btn-gradient rounded-xl text-sm font-medium flex items-center gap-2">
          <Plus size={18} /> Add User
        </button>
      </div>

      <div className="bg-slate-100 p-1 rounded-xl inline-flex mb-6">
        {['students', 'staff'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm transition-all capitalize rounded-lg ${
              activeTab === tab
                ? 'bg-white shadow-sm text-slate-800 font-medium'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white w-80 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
          <Search size={18} className="text-slate-400" />
          <input className="outline-none flex-1 text-slate-800 placeholder-slate-400" placeholder="Search by name, ID, or email..." />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="card card-hover p-6 flex flex-col items-center text-center pt-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center border-2 border-white shadow-md mb-4">
              <UserIcon size={32} className="text-indigo-400" />
            </div>
            <h3 className="text-slate-800 font-bold text-base mb-1">
              {user.name}
            </h3>
            <p className="text-indigo-600 text-sm font-medium mb-4">
              {user.role}
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <Mail size={14} />
              <span>{user.email}</span>
            </div>
            <button 
              onClick={() => handleViewProfile(user)}
              className="w-full px-4 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all duration-200"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedUser && (
          <div className="flex flex-col items-center w-full">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center border-4 border-white shadow-md mb-4">
              <UserIcon size={40} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">{selectedUser.name}</h2>
            <p className="text-indigo-600 font-medium mb-4">{selectedUser.role}</p>
            
            <div className="w-full bg-slate-50 rounded-2xl p-4 mb-6 text-sm text-slate-600 space-y-3">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Email:</span>
                <span>{selectedUser.email}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Phone:</span>
                <span>{selectedUser.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Department:</span>
                <span>{selectedUser.department}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">DOB:</span>
                <span>{selectedUser.dob}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Address:</span>
                <span className="text-right">{selectedUser.address}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-semibold text-slate-500">Emergency:</span>
                <span>{selectedUser.emergencyContact}</span>
              </div>
            </div>
            
            <div className="bg-white border border-slate-100 p-4 rounded-2xl mb-4 shadow-sm flex flex-col items-center">
              <QRCodeCanvas 
                id={`qr-code-${selectedUser.id}`}
                value={JSON.stringify({ 
                  id: selectedUser.id, 
                  name: selectedUser.name, 
                  email: selectedUser.email, 
                  role: selectedUser.role 
                })} 
                size={120} 
              />
            </div>
            
            <button 
              onClick={downloadQRCode}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-medium hover:bg-indigo-100 transition-all duration-200"
            >
              <Download size={16} />
              Download QR Code
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

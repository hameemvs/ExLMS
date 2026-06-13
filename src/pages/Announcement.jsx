import React, { useState } from 'react';
import { Plus, Bell as BellIcon, Megaphone } from 'lucide-react';

export function Announcement() {
  const [activeTab, setActiveTab] = useState('system-wide');

  const announcements = [
    {
      id: 1,
      icon: <BellIcon size={24} />,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500',
      title: 'System Maintenance Notice',
      author: 'System Admin',
      date: 'June 8, 2026',
      urgent: true,
      body: 'The LMS will undergo scheduled maintenance on Saturday, June 13th from 00:00 to 04:00 AM. Expect intermittent downtime during this window. Please save all ongoing work.',
    },
    {
      id: 2,
      icon: <Megaphone size={24} />,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      title: 'Guest Lecture Series: Future of AI',
      author: 'Dr. Jane Doe',
      date: 'June 8, 2026',
      urgent: false,
      body: 'We are thrilled to announce a guest lecture on Artificial Intelligence by a leading industry expert. Attendance is highly encouraged for all senior students. The session will cover modern LLMs and agentic workflows.',
    },
    {
      id: 3,
      icon: <Megaphone size={24} />,
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet-600',
      title: 'End-of-Semester Exam Schedule Released',
      author: 'Academic Office',
      date: 'June 5, 2026',
      urgent: false,
      body: 'The final examination schedule for the current semester has been published. Students are advised to check their respective department portals for detailed timetables and seating arrangements.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Announcements</h1>
        <button className="flex items-center gap-2 px-4 py-2 btn-gradient rounded-xl text-sm font-medium">
          <Plus size={18} />
          New Announcement
        </button>
      </div>

      <div className="card p-6">
        <div className="bg-slate-100 p-1 rounded-xl inline-flex mb-6">
          {['system-wide', 'department'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-all rounded-lg ${
                activeTab === tab
                  ? 'bg-white shadow-sm text-slate-800'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-200"
            >
              <div
                className={`min-w-[56px] h-14 rounded-2xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  {item.urgent && (
                    <span className="bg-rose-50 text-rose-500 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-rose-200/50">
                      URGENT
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                  <span className="font-medium text-slate-700">
                    Posted by {item.author}
                  </span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.body}
                </p>
                {!item.urgent && (
                  <div className="mt-4">
                    <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-indigo-200 transition-all duration-200">
                      Read More
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

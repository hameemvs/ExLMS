import React, { useState } from 'react';
import { Plus, Bell as BellIcon, Megaphone } from 'lucide-react';

export function Announcement() {
  const [activeTab, setActiveTab] = useState('system-wide');

  const announcements = [
    {
      id: 1,
      icon: <BellIcon size={24} />,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
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
      iconColor: 'text-blue-600',
      title: 'Guest Lecture Series: Future of AI',
      author: 'Dr. Jane Doe',
      date: 'June 8, 2026',
      urgent: false,
      body: 'We are thrilled to announce a guest lecture on Artificial Intelligence by a leading industry expert. Attendance is highly encouraged for all senior students. The session will cover modern LLMs and agentic workflows.',
    },
    {
      id: 3,
      icon: <Megaphone size={24} />,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-blue-600',
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
        <h1 className="text-2xl font-bold text-gray-800">Announcements</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
          <Plus size={18} />
          New Announcement
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="bg-gray-100 p-1 rounded-xl inline-flex mb-6">
          {['system-wide', 'department'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors rounded-lg ${
                activeTab === tab
                  ? 'bg-white shadow-sm text-gray-800'
                  : 'text-gray-400 hover:text-gray-600'
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
              className="flex gap-5 p-5 rounded-2xl border border-gray-100"
            >
              <div
                className={`min-w-[56px] h-14 rounded-2xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  {item.urgent && (
                    <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full">
                      URGENT
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <span className="font-medium text-gray-800">
                    Posted by {item.author}
                  </span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.body}
                </p>
                {!item.urgent && (
                  <div className="mt-4">
                    <button className="px-4 py-2 border border-gray-100 text-gray-800 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
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

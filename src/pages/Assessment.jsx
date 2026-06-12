import React from 'react';
import { Plus, User, FileText, Calendar } from 'lucide-react';

const assessments = [
  { title: 'Midterm Assignment', course: 'CS101 - Introduction to Programming', deadline: '12 JUN', submissions: 45, published: 'Jun 1' },
  { title: 'Weekly Quiz 4', course: 'CS101 - Introduction to Programming', deadline: '12 JUN', submissions: 45, published: 'Jun 1' },
];

const submissions = [
  { name: 'Jane Doe 1', date: 'June 8, 10:30 AM', file: 'assignment_v1.pdf' },
  { name: 'Jane Doe 2', date: 'June 8, 10:30 AM', file: 'assignment_v2.pdf' },
];

export function Assessment() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-800">Assessments</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={18} /> Create Assessment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {assessments.map((item, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                <div className="text-sm font-medium text-blue-600">{item.course}</div>
              </div>
              <div className="flex flex-col items-center bg-red-50 border border-red-200 rounded-xl px-3 py-2 min-w-[80px]">
                <div className="text-[10px] text-red-500 uppercase font-bold tracking-wide mb-1">Deadline</div>
                <div className="text-base font-bold text-red-800">{item.deadline}</div>
              </div>
            </div>

            <div className="flex gap-4 mb-6 text-gray-400 text-sm">
              <div className="flex items-center gap-1.5"><FileText size={16} /> {item.submissions} Submissions</div>
              <div className="flex items-center gap-1.5"><Calendar size={16} /> Published {item.published}</div>
            </div>

            <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors w-full mt-auto">
              Grade Submissions
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-5">Recent Submissions (Needs Grading)</h2>
      <div className="bg-white rounded-3xl shadow-sm">
        <ul className="flex flex-col">
          {submissions.map((sub, index) => (
            <li key={index} className={`grid grid-cols-[auto_1fr_auto] gap-6 items-start p-6 ${index < submissions.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
                <User size={20} />
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base mb-1">{sub.name}</div>
                <div className="text-sm text-gray-400 mb-4">Submitted: {sub.date}</div>

                <div className="flex gap-3 mb-4">
                  <div className="px-3 py-2 border border-gray-100 rounded-xl text-sm flex items-center gap-2 cursor-pointer bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                    <FileText size={14} className="text-blue-600" /> {sub.file}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                  <label className="block mb-2 text-sm font-bold text-gray-800">Instructor Feedback</label>
                  <textarea
                    placeholder="Enter grading feedback here..."
                    className="w-full border-none bg-transparent outline-none min-h-[80px] resize-y text-sm text-gray-800 placeholder-gray-400"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-[120px]">
                <input
                  type="number"
                  placeholder="Score / 100"
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm text-center text-gray-800 bg-white outline-none focus:border-blue-600 transition-colors"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                  Submit Grade
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

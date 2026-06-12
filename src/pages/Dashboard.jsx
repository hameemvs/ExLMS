import React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal, Calendar } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex gap-6 h-full">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        
        {/* Top Header & Schedule */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold flex items-center gap-2">
              January, 2023 <ChevronDown size={20} className="text-gray-400" />
            </h1>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Hours Today</div>
              <div className="text-blue-600 font-bold">8h 48mnt</div>
            </div>
          </div>

          {/* Date Selector Strip */}
          <div className="flex items-center justify-between mb-8">
            <button className="p-1 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50"><ChevronLeft size={20} /></button>
            
            <div className="flex gap-4">
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-300">16</div>
                <div className="text-xs text-gray-400 mt-1">Friday</div>
                <div className="text-[10px] text-gray-400">4 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-800">17</div>
                <div className="text-xs text-gray-500 mt-1">Saturday</div>
                <div className="text-[10px] text-gray-400">2 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-800">19</div>
                <div className="text-xs text-gray-500 mt-1">Monday</div>
                <div className="text-[10px] text-gray-400">3 Class</div>
              </div>
              <div className="text-center px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md transform -translate-y-2">
                <div className="text-xs font-medium mb-1 opacity-80 flex justify-between">
                   <span>20</span>
                   <span>Today</span>
                </div>
                <div className="text-lg font-bold">Wednesday</div>
                <div className="text-[10px] opacity-80 mt-1">6 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-800">21</div>
                <div className="text-xs text-gray-500 mt-1">Thursday</div>
                <div className="text-[10px] text-gray-400">3 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-800">22</div>
                <div className="text-xs text-gray-500 mt-1">Friday</div>
                <div className="text-[10px] text-gray-400">3 Class</div>
              </div>
            </div>

            <button className="p-1 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50"><ChevronRight size={20} /></button>
          </div>

          {/* Mock Schedule Grid (Simplified implementation of the visual timeline) */}
          <div className="relative h-48 mt-8 border-b border-gray-100">
             {/* Timeline blocks */}
             <div className="absolute top-0 left-[0%] w-[18%] bg-orange-400 text-white p-2 rounded-xl text-xs shadow-sm">
                <div className="font-bold">Design Method</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="mt-2 text-[10px] flex items-center gap-1">
                   <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
                      <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
                   </div>
                   <span>24 Students</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-medium">07.00 - 08.15</div>
             </div>

             <div className="absolute top-10 left-[20%] w-[18%] bg-yellow-400 text-white p-2 rounded-xl text-xs shadow-sm">
                <div className="font-bold">Learning Figma</div>
                <div className="opacity-90 text-[10px]">Practice</div>
                <div className="mt-2 text-[10px] flex items-center gap-1">
                   <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
                   </div>
                   <span>32 Students</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-medium">08.15 - 09.45</div>
             </div>

             <div className="absolute top-0 left-[42%] w-[18%] bg-red-300 text-white p-2 rounded-xl text-xs shadow-sm">
                <div className="font-bold">Usability Heuristics</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="mt-2 text-[10px]">26 Students</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-medium">09.59 - 11.15</div>
             </div>

             <div className="absolute top-20 left-[58%] w-[15%] bg-cyan-400 text-white p-2 rounded-xl text-xs shadow-sm">
                <div className="font-bold">Nirmana</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-medium">11.45 - 12.30</div>
             </div>

             <div className="absolute top-0 left-[70%] w-[16%] bg-slate-600 text-white p-2 rounded-xl text-xs shadow-sm">
                <div className="font-bold">Design Thinking</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-medium">12.45 - 13.45</div>
             </div>

             <div className="absolute top-20 left-[85%] w-[15%] bg-emerald-400 text-white p-2 rounded-xl text-xs shadow-sm">
                <div className="font-bold">Illustration</div>
                <div className="opacity-90 text-[10px]">Practice</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-medium">13.50 - 15.50</div>
             </div>
          </div>
          
          {/* Time axis */}
          <div className="flex justify-between mt-8 text-xs text-gray-400 font-medium px-4">
             <span>07.00</span>
             <span>08.00</span>
             <span>09.00</span>
             <span>10.00</span>
             <span>11.00</span>
             <span>12.00</span>
             <span>13.00</span>
             <span>14.00</span>
             <span>15.00</span>
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="flex gap-6">
           {/* My Online Course */}
           <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold text-gray-800">My Online Course</h2>
                 <button className="text-xs text-gray-400 hover:text-blue-600">View All</button>
              </div>
              
              <div className="flex flex-col gap-4">
                 <div className="border border-gray-100 rounded-2xl overflow-hidden p-2">
                    <div className="h-32 bg-gray-200 rounded-xl mb-3 relative overflow-hidden">
                       {/* Placeholder for image */}
                       <div className="absolute inset-0 bg-blue-100"></div>
                       <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-2">
                          Students <span className="bg-gray-500 rounded-full px-1">+20</span>
                       </div>
                    </div>
                    <div className="px-2 pb-2">
                       <h3 className="font-bold text-sm mb-1">Introduction to UX</h3>
                       <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                          Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus. Mauris lacinia nec sem eu pellente...
                       </p>
                    </div>
                 </div>

                 <div className="border border-gray-100 rounded-2xl overflow-hidden p-2">
                    <div className="h-16 bg-gray-800 rounded-xl mb-3 relative overflow-hidden flex items-center px-4">
                       <span className="text-white font-bold tracking-widest opacity-50">DESIGN RESEARCHER</span>
                    </div>
                    <div className="px-2 pb-1">
                       <h3 className="font-bold text-sm">Product Design? What's It?</h3>
                    </div>
                 </div>
              </div>
           </div>

           {/* Announcement */}
           <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold text-gray-800">Announcement</h2>
                 <button className="text-xs text-gray-400 hover:text-blue-600">View All</button>
              </div>

              <div className="flex flex-col gap-3">
                 <div className="bg-blue-600 text-white rounded-2xl p-4 shadow-md relative">
                    <div className="flex justify-between items-start mb-3">
                       <div className="flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                          <div>
                             <div className="text-sm font-bold">Gerrard Wijaya</div>
                             <div className="text-[10px] opacity-80">Head of Design Division</div>
                          </div>
                       </div>
                       <span className="text-xs opacity-80">10.30</span>
                    </div>
                    <h3 className="font-bold text-sm mb-2">Schedule Change for Design Test</h3>
                    <p className="text-[10px] opacity-80 leading-relaxed line-clamp-3">
                       Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus. Mauris lacinia nec sem eu pellente. Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus...
                    </p>
                    {/* Mouse cursor hint from image */}
                    <div className="absolute right-4 bottom-8 text-white opacity-80">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/></svg>
                    </div>
                 </div>

                 <div className="rounded-2xl p-3 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                    <div className="flex-1">
                       <div className="flex justify-between">
                          <div className="text-sm font-bold">Tioman Stewart</div>
                          <span className="text-xs text-gray-400">08.30</span>
                       </div>
                       <div className="text-[10px] text-gray-500 mb-1">Office Boy of Design University</div>
                       <h3 className="font-bold text-xs mt-1">Caution for Slippery Floor</h3>
                    </div>
                 </div>

                 <div className="rounded-2xl p-3 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                    <div className="flex-1">
                       <div className="flex justify-between">
                          <div className="text-sm font-bold">Rizki Setyawan</div>
                          <span className="text-xs text-gray-400">07.30</span>
                       </div>
                       <div className="text-[10px] text-gray-500 mb-1">Head of Design Department</div>
                       <h3 className="font-bold text-xs mt-1">Design Festival with Senior Designer</h3>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Right Sidebar (Assignments & Messages) */}
      <div className="w-80 flex flex-col gap-6">
        
        {/* Student's Assignment */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-gray-800">Student's Assignment</h2>
             <button className="text-xs text-gray-400 hover:text-blue-600">View All</button>
          </div>

          <div className="flex flex-col gap-4">
             <div className="border border-gray-100 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Calendar size={12} /> Assigned Yesterday
                   </div>
                   <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="font-bold text-sm mb-2 leading-snug">Create UI about Food Apps using Auto-Layout in Figma</h3>
                <p className="text-[10px] text-gray-400 line-clamp-2 mb-3">
                   Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus...
                </p>
                <div className="flex justify-between items-center text-[10px] mb-1">
                   <div className="flex items-center gap-1 font-medium">
                      <div className="flex -space-x-1">
                         <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
                         <div className="w-4 h-4 rounded-full bg-gray-300 border border-white"></div>
                      </div>
                      <span className="text-gray-800">34 Students</span>
                   </div>
                   <span className="text-blue-600 font-bold">Score: 50</span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                   <div className="w-full h-full bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[8px] text-gray-400 mt-1 font-medium">
                   <span>Student Progress</span>
                   <span>34/34</span>
                </div>
             </div>

             <div className="border border-gray-100 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Calendar size={12} /> Assigned 01/19/2023
                   </div>
                   <span className="bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-1 rounded-full">In Progress</span>
                </div>
                <h3 className="font-bold text-sm mb-2 leading-snug">Drawing 3D Illustration with Motion on Blender Software</h3>
                <p className="text-[10px] text-gray-400 line-clamp-2 mb-3">
                   Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus...
                </p>
                <div className="flex justify-between items-center text-[10px] mb-1">
                   <div className="flex items-center gap-1 font-medium">
                      <div className="flex -space-x-1">
                         <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
                         <div className="w-4 h-4 rounded-full bg-gray-300 border border-white"></div>
                      </div>
                      <span className="text-gray-800">47 Students</span>
                   </div>
                   <span className="text-blue-600 font-bold">Score: 100</span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                   <div className="w-[80%] h-full bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[8px] text-gray-400 mt-1 font-medium">
                   <span>Student Progress</span>
                   <span>38/47</span>
                </div>
             </div>
          </div>
        </div>

        {/* Quick Messages */}
        <div className="bg-white rounded-3xl p-6 shadow-sm flex-1">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-gray-800">Quick Messages</h2>
             <div className="text-[10px] text-gray-400 flex items-center gap-2">
                Unread Messages <span className="bg-blue-600 text-white w-4 h-4 rounded flex items-center justify-center font-bold">5</span>
             </div>
          </div>

          <div className="flex flex-col gap-4">
             {[
                { name: 'Mark Stuntman', time: '10.30', msg: "I'm sorry sir, probably i can't attend to..." },
                { name: 'James Clair', time: '09.30', msg: "Hello Sir, probably i can't attend to your..." },
                { name: 'Tulus Ngga', time: '09.10', msg: "Hello sorry sir, probably i can't attend to..." },
                { name: 'Drew Boys', time: '08.10', msg: "I'm sorry sir, probably i can't attend to..." },
                { name: 'Tobey Makuise', time: '08.01', msg: "Haha sorry sir, probably i can't attend in..." },
                { name: 'Steve Nono', time: '07.30', msg: "I'm sorry sir, probably i can't learn to..." }
             ].map((msg, i) => (
                <div key={i} className="flex gap-3 items-center">
                   <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
                   <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                         <h4 className="text-sm font-bold text-gray-800">{msg.name}</h4>
                         <div className="text-[10px] text-gray-400 flex flex-col items-end gap-1">
                            {msg.time}
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                         </div>
                      </div>
                      <p className="text-[10px] text-gray-400 line-clamp-1">{msg.msg}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

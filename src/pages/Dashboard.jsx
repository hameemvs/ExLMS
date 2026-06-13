import React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        
        <div className="card card-hover p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              January, 2023 <ChevronDown size={20} className="text-slate-400" />
            </h1>
            <div className="text-right">
              <div className="text-sm text-slate-500">Total Hours Today</div>
              <div className="text-indigo-600 font-bold">8h 48mnt</div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 hover:border-slate-300 transition-all"><ChevronLeft size={18} /></button>
            
            <div className="flex gap-4">
              <div className="text-center px-4">
                <div className="text-xl font-bold text-slate-300">16</div>
                <div className="text-xs text-slate-400 mt-1">Friday</div>
                <div className="text-[10px] text-slate-400">4 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-slate-700">17</div>
                <div className="text-xs text-slate-500 mt-1">Saturday</div>
                <div className="text-[10px] text-slate-400">2 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-slate-700">19</div>
                <div className="text-xs text-slate-500 mt-1">Monday</div>
                <div className="text-[10px] text-slate-400">3 Class</div>
              </div>
              <div className="text-center px-6 py-2 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg shadow-indigo-200 transform -translate-y-2">
                <div className="text-xs font-medium mb-1 opacity-80 flex justify-between">
                   <span>20</span>
                   <span>Today</span>
                </div>
                <div className="text-lg font-bold">Wednesday</div>
                <div className="text-[10px] opacity-80 mt-1">6 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-slate-700">21</div>
                <div className="text-xs text-slate-500 mt-1">Thursday</div>
                <div className="text-[10px] text-slate-400">3 Class</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xl font-bold text-slate-700">22</div>
                <div className="text-xs text-slate-500 mt-1">Friday</div>
                <div className="text-[10px] text-slate-400">3 Class</div>
              </div>
            </div>

            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 hover:border-slate-300 transition-all"><ChevronRight size={18} /></button>
          </div>

          <div className="relative h-48 mt-8 border-b border-slate-100">
             <div className="absolute top-0 left-[0%] w-[18%] bg-gradient-to-br from-amber-400 to-orange-500 text-white p-2.5 rounded-xl text-xs shadow-md">
                <div className="font-bold">Design Method</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="mt-2 text-[10px] flex items-center gap-1">
                   <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
                      <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
                   </div>
                   <span>24 Students</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium">07.00 - 08.15</div>
             </div>

             <div className="absolute top-10 left-[20%] w-[18%] bg-gradient-to-br from-yellow-400 to-amber-500 text-white p-2.5 rounded-xl text-xs shadow-md">
                <div className="font-bold">Learning Figma</div>
                <div className="opacity-90 text-[10px]">Practice</div>
                <div className="mt-2 text-[10px] flex items-center gap-1">
                   <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
                   </div>
                   <span>32 Students</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium">08.15 - 09.45</div>
             </div>

             <div className="absolute top-0 left-[42%] w-[18%] bg-gradient-to-br from-rose-300 to-pink-400 text-white p-2.5 rounded-xl text-xs shadow-md">
                <div className="font-bold">Usability Heuristics</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="mt-2 text-[10px]">26 Students</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium">09.59 - 11.15</div>
             </div>

             <div className="absolute top-20 left-[58%] w-[15%] bg-gradient-to-br from-cyan-400 to-teal-500 text-white p-2.5 rounded-xl text-xs shadow-md">
                <div className="font-bold">Nirmana</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium">11.45 - 12.30</div>
             </div>

             <div className="absolute top-0 left-[70%] w-[16%] bg-gradient-to-br from-slate-500 to-slate-700 text-white p-2.5 rounded-xl text-xs shadow-md">
                <div className="font-bold">Design Thinking</div>
                <div className="opacity-90 text-[10px]">Theory</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium">12.45 - 13.45</div>
             </div>

             <div className="absolute top-20 left-[85%] w-[15%] bg-gradient-to-br from-emerald-400 to-green-500 text-white p-2.5 rounded-xl text-xs shadow-md">
                <div className="font-bold">Illustration</div>
                <div className="opacity-90 text-[10px]">Practice</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium">13.50 - 15.50</div>
             </div>
          </div>
          
          <div className="flex justify-between mt-8 text-xs text-slate-400 font-medium px-4">
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

        <div className="flex gap-6">
           <div className="flex-1 card card-hover p-6">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold text-slate-800">My Online Course</h2>
                 <button className="text-xs text-slate-400 hover:text-indigo-600 transition-colors">View All</button>
              </div>
              
              <div className="flex flex-col gap-4">
                 <div className="border border-slate-100 rounded-2xl overflow-hidden p-2 hover:border-indigo-100 hover:shadow-sm transition-all duration-200">
                    <div className="h-32 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl mb-3 relative overflow-hidden">
                       <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm">
                          Students <span className="bg-white/20 rounded-full px-1">+20</span>
                       </div>
                    </div>
                    <div className="px-2 pb-2">
                       <h3 className="font-bold text-sm mb-1 text-slate-800">Introduction to UX</h3>
                       <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                          Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus. Mauris lacinia nec sem eu pellente...
                       </p>
                    </div>
                 </div>

                 <div className="border border-slate-100 rounded-2xl overflow-hidden p-2 hover:border-indigo-100 hover:shadow-sm transition-all duration-200">
                    <div className="h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl mb-3 relative overflow-hidden flex items-center px-4">
                       <span className="text-white font-bold tracking-widest opacity-50">DESIGN RESEARCHER</span>
                    </div>
                    <div className="px-2 pb-1">
                       <h3 className="font-bold text-sm text-slate-800">Product Design? What's It?</h3>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex-1 card card-hover p-6">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold text-slate-800">Announcement</h2>
                 <button className="text-xs text-slate-400 hover:text-indigo-600 transition-colors">View All</button>
              </div>

              <div className="flex flex-col gap-3">
                 <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl p-4 shadow-lg shadow-indigo-200/40 relative">
                    <div className="flex justify-between items-start mb-3">
                       <div className="flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                          <div>
                             <div className="text-sm font-bold">Gerrard Wijaya</div>
                             <div className="text-[10px] opacity-80">Head of Design Division</div>
                          </div>
                       </div>
                       <span className="text-xs opacity-80">10.30</span>
                    </div>
                    <h3 className="font-bold text-sm mb-2">Schedule Change for Design Test</h3>
                    <p className="text-[10px] opacity-80 leading-relaxed line-clamp-3">
                       Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus. Mauris lacinia nec sem eu pellente...
                    </p>
                 </div>

                 <div className="rounded-2xl p-3 border border-slate-100 flex items-start gap-3 hover:border-indigo-100 transition-all duration-200">
                    <div className="w-8 h-8 rounded-full bg-slate-100 shrink-0"></div>
                    <div className="flex-1">
                       <div className="flex justify-between">
                          <div className="text-sm font-bold text-slate-800">Tioman Stewart</div>
                          <span className="text-xs text-slate-400">08.30</span>
                       </div>
                       <div className="text-[10px] text-slate-500 mb-1">Office Boy of Design University</div>
                       <h3 className="font-bold text-xs mt-1 text-slate-700">Caution for Slippery Floor</h3>
                    </div>
                 </div>

                 <div className="rounded-2xl p-3 border border-slate-100 flex items-start gap-3 hover:border-indigo-100 transition-all duration-200">
                    <div className="w-8 h-8 rounded-full bg-slate-100 shrink-0"></div>
                    <div className="flex-1">
                       <div className="flex justify-between">
                          <div className="text-sm font-bold text-slate-800">Rizki Setyawan</div>
                          <span className="text-xs text-slate-400">07.30</span>
                       </div>
                       <div className="text-[10px] text-slate-500 mb-1">Head of Design Department</div>
                       <h3 className="font-bold text-xs mt-1 text-slate-700">Design Festival with Senior Designer</h3>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="w-80 flex flex-col gap-6">
        
        <div className="card card-hover p-6">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-slate-800">Student's Assignment</h2>
             <button className="text-xs text-slate-400 hover:text-indigo-600 transition-colors">View All</button>
          </div>

          <div className="flex flex-col gap-4">
             <div className="border border-slate-100 rounded-2xl p-4 hover:border-indigo-100 transition-all duration-200">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Calendar size={12} /> Assigned Yesterday
                   </div>
                   <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-emerald-200/50">Completed</span>
                </div>
                <h3 className="font-bold text-sm mb-2 leading-snug text-slate-800">Create UI about Food Apps using Auto-Layout in Figma</h3>
                <p className="text-[10px] text-slate-400 line-clamp-2 mb-3">
                   Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus...
                </p>
                <div className="flex justify-between items-center text-[10px] mb-1">
                   <div className="flex items-center gap-1 font-medium">
                      <div className="flex -space-x-1">
                         <div className="w-4 h-4 rounded-full bg-slate-200 border border-white"></div>
                         <div className="w-4 h-4 rounded-full bg-slate-300 border border-white"></div>
                      </div>
                      <span className="text-slate-700">34 Students</span>
                   </div>
                   <span className="text-indigo-600 font-bold">Score: 50</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2">
                   <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400 mt-1 font-medium">
                   <span>Student Progress</span>
                   <span>34/34</span>
                </div>
             </div>

             <div className="border border-slate-100 rounded-2xl p-4 hover:border-indigo-100 transition-all duration-200">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Calendar size={12} /> Assigned 01/19/2023
                   </div>
                   <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2.5 py-1 rounded-full ring-1 ring-amber-200/50">In Progress</span>
                </div>
                <h3 className="font-bold text-sm mb-2 leading-snug text-slate-800">Drawing 3D Illustration with Motion on Blender Software</h3>
                <p className="text-[10px] text-slate-400 line-clamp-2 mb-3">
                   Praesent velit dolor, vulputate sit amet facilisis ac, venenatis quis metus...
                </p>
                <div className="flex justify-between items-center text-[10px] mb-1">
                   <div className="flex items-center gap-1 font-medium">
                      <div className="flex -space-x-1">
                         <div className="w-4 h-4 rounded-full bg-slate-200 border border-white"></div>
                         <div className="w-4 h-4 rounded-full bg-slate-300 border border-white"></div>
                      </div>
                      <span className="text-slate-700">47 Students</span>
                   </div>
                   <span className="text-indigo-600 font-bold">Score: 100</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2">
                   <div className="w-[80%] h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400 mt-1 font-medium">
                   <span>Student Progress</span>
                   <span>38/47</span>
                </div>
             </div>
          </div>
        </div>

        <div className="card card-hover p-6 flex-1">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-slate-800">Quick Messages</h2>
             <div className="text-[10px] text-slate-400 flex items-center gap-2">
                Unread <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white w-5 h-5 rounded-md flex items-center justify-center font-bold text-[9px]">5</span>
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
                <div key={i} className="flex gap-3 items-center group cursor-pointer">
                   <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 shrink-0 group-hover:from-indigo-50 group-hover:to-violet-50 transition-all duration-200"></div>
                   <div className="flex-1">
                      <div className="flex justify-between items-center mb-0.5">
                         <h4 className="text-sm font-semibold text-slate-700">{msg.name}</h4>
                         <div className="text-[10px] text-slate-400 flex flex-col items-end gap-1">
                            {msg.time}
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                         </div>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{msg.msg}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

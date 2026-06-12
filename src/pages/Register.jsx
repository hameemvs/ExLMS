import React, { useState } from 'react';
import { GraduationCap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSeparator = () => (
  <div className="absolute right-0 top-0 bottom-0 w-16 overflow-visible pointer-events-none">
    <div className="absolute right-[-2px] top-0 bottom-0 w-10 bg-white z-10"></div>
    <div className="absolute -left-8 top-[-5%] w-24 h-24 bg-white rounded-full z-10 opacity-20"></div>
    <div className="absolute -left-12 top-[15%] w-32 h-32 bg-white rounded-full z-10 opacity-20"></div>
    <div className="absolute -left-10 top-[40%] w-28 h-28 bg-white rounded-full z-10 opacity-20"></div>
    <div className="absolute -left-16 top-[65%] w-40 h-40 bg-white rounded-full z-10 opacity-20"></div>
    <div className="absolute -left-8 top-[85%] w-24 h-24 bg-white rounded-full z-10 opacity-20"></div>
    <div className="absolute -left-4 top-[2%] w-20 h-20 bg-white rounded-full z-20 opacity-50"></div>
    <div className="absolute -left-8 top-[20%] w-28 h-28 bg-white rounded-full z-20 opacity-50"></div>
    <div className="absolute -left-6 top-[45%] w-24 h-24 bg-white rounded-full z-20 opacity-50"></div>
    <div className="absolute -left-10 top-[70%] w-32 h-32 bg-white rounded-full z-20 opacity-50"></div>
    <div className="absolute -left-5 top-[90%] w-20 h-20 bg-white rounded-full z-20 opacity-50"></div>
    <div className="absolute left-2 top-[5%] w-20 h-20 bg-white rounded-full z-30"></div>
    <div className="absolute -left-2 top-[25%] w-24 h-24 bg-white rounded-full z-30"></div>
    <div className="absolute left-0 top-[50%] w-24 h-24 bg-white rounded-full z-30"></div>
    <div className="absolute -left-4 top-[75%] w-28 h-28 bg-white rounded-full z-30"></div>
    <div className="absolute left-2 top-[95%] w-16 h-16 bg-white rounded-full z-30"></div>
  </div>
);

const ROLES = ['Student', 'Instructor', 'HOD'];

export function Register() {
  const [selectedRole, setSelectedRole] = useState('Student');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="rounded-[2rem] shadow-2xl flex w-full max-w-[850px] overflow-hidden relative min-h-[550px] bg-white">
        
        {/* Left Side - Blue Gradient */}
        <div className="w-[45%] bg-gradient-to-b from-[#0055D4] to-[#0092E1] p-10 flex flex-col justify-center items-center text-white relative z-10">
          <CloudSeparator />
          
          <div className="mb-6 relative z-40">
            <h2 className="text-xl font-medium tracking-wide">Welcome to</h2>
          </div>
          
          <div className="bg-white rounded-full p-5 mb-4 shadow-lg relative z-40">
             <GraduationCap size={44} className="text-[#0055D4]" />
          </div>
          
          <h1 className="text-3xl font-bold mb-12 tracking-wider relative z-40">ESOFT</h1>
          
          <div className="text-[11px] text-center opacity-80 mt-auto px-4 leading-relaxed font-light relative z-40">
            Shaping Lives, Creating Futures. Join our platform to enhance your learning experience. 
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-[55%] bg-white p-10 flex flex-col justify-center pl-16 relative z-30">
          <h2 className="text-xl font-bold text-gray-800 mb-8 text-center mr-8">Create your account</h2>
          
          <form className="space-y-5 w-full max-w-sm">
            
            <div className="relative">
              <label className="text-xs font-semibold text-gray-700 block mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full border-b-[1.5px] border-blue-200 pb-1.5 focus:outline-none focus:border-blue-500 text-sm text-gray-800 bg-transparent placeholder-gray-300 transition-colors"
              />
              <Check size={16} className="absolute right-0 bottom-2 text-blue-300" />
            </div>

            <div className="relative">
              <label className="text-xs font-semibold text-gray-700 block mb-1">E-mail Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full border-b-[1.5px] border-blue-200 pb-1.5 focus:outline-none focus:border-blue-500 text-sm text-gray-800 bg-transparent placeholder-gray-300 transition-colors"
              />
              <Check size={16} className="absolute right-0 bottom-2 text-blue-300" />
            </div>

            <div className="relative">
              <label className="text-xs font-semibold text-gray-700 block mb-1">Role</label>
              <div className="flex gap-2 pb-1.5">
                {ROLES.map(role => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-all ${
                      selectedRole === role
                        ? 'bg-[#0066EE] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <label className="text-xs font-semibold text-gray-700 block mb-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full border-b-[1.5px] border-blue-200 pb-1.5 focus:outline-none focus:border-blue-500 text-sm text-gray-800 bg-transparent placeholder-gray-300 transition-colors"
              />
              <Check size={16} className="absolute right-0 bottom-2 text-blue-300" />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" className="w-3.5 h-3.5 accent-[#0066EE] rounded cursor-pointer" id="agree" />
              <label htmlFor="agree" className="text-[10px] text-gray-500 cursor-pointer">
                By Signing Up I Agree with <span className="text-[#0066EE]">Terms & Conditions</span>
              </label>
            </div>

            <div className="flex gap-4 pt-4">
               <Link to="/register" className="flex-1">
                 <button type="button" className="w-full py-2 bg-[#0066EE] text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md">
                   Sign Up
                 </button>
               </Link>
               <Link to="/login" className="flex-1">
                 <button type="button" className="w-full py-2 bg-white text-gray-500 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
                   Sign In
                 </button>
               </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

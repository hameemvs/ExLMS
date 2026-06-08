import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Payment } from './pages/Payment';
import { User } from './pages/User';
import { Reports } from './pages/Reports';
import { Course } from './pages/Course';
import { Attendance } from './pages/Attendance';
import { Schedule } from './pages/Schedule';
import { Announcement } from './pages/Announcement';
import { HRM } from './pages/HRM';
import { Assessment } from './pages/Assessment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Main Application Layout for Authenticated Users */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user" element={<User />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/course" element={<Course />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/hrm" element={<HRM />} />
          <Route path="/assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

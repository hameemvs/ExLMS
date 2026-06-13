export const mockData = {
  users: [
    { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Student", phone: "+1 234-567-8901", address: "123 Main St, Springfield", dob: "2000-05-14", department: "Computer Science", joinedDate: "2023-09-01", emergencyContact: "+1 987-654-3210" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "Instructor", phone: "+1 234-567-8902", address: "456 Elm St, Springfield", dob: "1985-08-22", department: "Information Technology", joinedDate: "2015-01-10", emergencyContact: "+1 987-654-3211" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", phone: "+1 234-567-8903", address: "789 Pine St, Springfield", dob: "1990-11-05", department: "Administration", joinedDate: "2018-03-15", emergencyContact: "+1 987-654-3212" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Student", phone: "+1 234-567-8904", address: "101 Maple St, Springfield", dob: "2001-02-18", department: "Software Engineering", joinedDate: "2024-01-20", emergencyContact: "+1 987-654-3213" },
    { id: 5, name: "Evan Wright", email: "evan@example.com", role: "Student", phone: "+1 234-567-8905", address: "202 Oak St, Springfield", dob: "1999-07-30", department: "Data Science", joinedDate: "2022-09-05", emergencyContact: "+1 987-654-3214" },
  ],
  courses: [
    { id: 1, title: "Introduction to React", instructor: "Bob Johnson", duration: "4 Weeks", students: 25 },
    { id: 2, title: "Advanced JavaScript", instructor: "Sarah Lee", duration: "6 Weeks", students: 18 },
    { id: 3, title: "UI/UX Design Fundamentals", instructor: "David Chen", duration: "3 Weeks", students: 30 },
  ],
  announcements: [
    { id: 1, title: "System Maintenance", date: "2026-06-15", content: "The system will be down for maintenance from 2 AM to 4 AM." },
    { id: 2, title: "New Course Available", date: "2026-06-18", content: "Check out our new Advanced JavaScript course." },
  ],
  assessments: [
    { id: 1, title: "React Basics Quiz", course: "Introduction to React", dueDate: "2026-06-20", maxScore: 100 },
    { id: 2, title: "JS Final Project", course: "Advanced JavaScript", dueDate: "2026-06-30", maxScore: 100 },
  ],
  attendance: [
    { id: 1, date: "2026-06-12", course: "Introduction to React", student: "Alice Smith", status: "Present" },
    { id: 2, date: "2026-06-12", course: "Introduction to React", student: "Diana Prince", status: "Absent" },
  ],
  payments: [
    { id: 1, student: "Alice Smith", amount: "$150", date: "2026-06-01", status: "Paid" },
    { id: 2, student: "Diana Prince", amount: "$150", date: "2026-06-05", status: "Pending" },
  ],
  schedule: [
    { id: 1, event: "React Lecture 1", time: "10:00 AM", date: "2026-06-14", location: "Room 101" },
    { id: 2, event: "Design Workshop", time: "2:00 PM", date: "2026-06-15", location: "Online" },
  ],
  hrm_employees: [
    { id: 1, name: "Bob Johnson", department: "Teaching", role: "Instructor", joinDate: "2025-01-10" },
    { id: 2, name: "Charlie Brown", department: "Administration", role: "Admin", joinDate: "2024-05-22" },
  ],
  leave_requests: [
    { id: 1, employee: "Bob Johnson", type: "Medical Leave", dates: "June 10 - June 14", duration: "4 days", status: "Approved" },
    { id: 2, employee: "Charlie Brown", type: "Annual Leave", dates: "July 01 - July 10", duration: "10 days", status: "Pending" },
    { id: 3, employee: "Sarah Lee", type: "Personal Leave", dates: "August 15 - August 16", duration: "2 days", status: "Denied" },
  ]
};

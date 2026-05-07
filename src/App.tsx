import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SidebarLeft from './components/SidebarLeft';
import Feed from './components/Feed';
import SidebarRight from './components/SidebarRight';
import PostCreationModal from './components/PostCreationModal';
import AdminSidebar from './components/AdminSidebar';
import AdminOverview from './components/AdminOverview';
import AuthPage from './components/AuthPage';
import LoginModal from './components/LoginModal';
import SubscriptionPage from './components/SubscriptionPage';
import GroupsPage from './components/GroupsPage';
import { Plus, Shield, LogIn } from 'lucide-react';

const SocialLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="flex bg-slate-50 text-slate-900 min-h-screen font-sora">
      <div className="flex w-full max-w-[1400px] mx-auto relative">
        <SidebarLeft />
        <main className="flex-1 min-w-0">
          <Routes>
            <Route index element={<Feed />} />
            <Route path="discover" element={<div className="p-10 text-edu-navy font-sora h-full"><h1 className="text-3xl font-bold mb-6">Discover New Methods</h1><div className="bg-white rounded-3xl border border-slate-200 p-20 text-center text-slate-400">Search for teachers and courses to expand your knowledge.</div></div>} />
            <Route path="classes" element={<div className="p-10 text-edu-navy font-sora h-full"><h1 className="text-3xl font-bold mb-6">My Live Classrooms</h1><div className="grid grid-cols-2 gap-6">{[1, 2].map(i => <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"><div className="w-12 h-12 bg-edu-teal/20 rounded-xl mb-4" /><p className="font-bold">Active Section #{i}</p><p className="text-sm text-slate-400">45 Students • Next session in 2h</p></div>)}</div></div>} />
            <Route path="resources" element={<div className="p-10 text-edu-navy font-sora h-full"><h1 className="text-3xl font-bold mb-6">Resource Library</h1><div className="grid gap-4">{['Syllabus_2026.pdf', 'Lecture_Slides.pptx', 'Advanced_Math.zip'].map(f => <div key={f} className="bg-white p-4 rounded-2xl border border-slate-200 flex justify-between items-center"><span className="font-medium">{f}</span><button className="text-edu-teal font-bold text-sm">Download</button></div>)}</div></div>} />
            <Route path="submissions" element={<div className="p-10 text-edu-navy font-sora h-full"><h1 className="text-3xl font-bold mb-6">Pending Submissions</h1><div className="bg-white rounded-3xl border border-slate-200 divide-y divide-slate-100">{[1, 2, 3].map(i => <div key={i} className="p-6 flex justify-between items-center"><div><p className="font-bold">Assignment #{i}</p><p className="text-sm text-slate-400">Submitted by Student #{i}</p></div><button className="bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-edu-navy hover:bg-edu-teal/10 transition-colors">Grade Now</button></div>)}</div></div>} />
            <Route path="profile" element={<div className="p-10 text-edu-navy font-sora h-full text-center"><div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6" /><h1 className="text-3xl font-bold">User Profile</h1><p className="text-slate-500">Edit your public teaching profile and credentials.</p></div>} />
            <Route path="saved" element={<div className="p-10 text-edu-navy font-sora h-full"><h1 className="text-3xl font-bold mb-6">Saved Materials</h1><div className="bg-white rounded-3xl border border-slate-200 p-20 text-center text-slate-400">Your collection of bookmarks and saved courses.</div></div>} />
            <Route path="subscriptions" element={<SubscriptionPage />} />
            <Route path="groups" element={<GroupsPage />} />
            <Route path="settings" element={<div className="p-10 text-edu-navy font-sora h-full"><h1 className="text-3xl font-bold mb-6">Settings</h1><div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6"><div><label className="text-xs font-bold text-slate-400 uppercase">Notification Level</label><select className="w-full mt-2 p-3 bg-slate-50 border-none rounded-xl font-medium focus:ring-2 focus:ring-edu-teal"><option>All Notifications</option><option>Important Only</option></select></div></div></div>} />
          </Routes>
        </main>
        <SidebarRight />
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-edu-teal text-edu-navy rounded-full flex items-center justify-center shadow-xl shadow-edu-teal/20 hover:scale-110 active:scale-95 transition-all z-50 group hover:shadow-edu-teal/40"
        title="Create New Post"
      >
        <Plus size={28} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <PostCreationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Admin Quick Switch (For Dev/Demo) */}
      <a 
        href="/admin" 
        className="fixed bottom-8 left-8 w-10 h-10 bg-slate-200/50 backdrop-blur-sm border border-slate-300/50 text-slate-400 rounded-full flex items-center justify-center hover:bg-edu-teal/20 hover:text-edu-teal transition-all z-50 group shadow-lg"
        title="Go to Admin Dashboard"
      >
        <Shield size={20} />
      </a>

      {/* Login Quick Switch */}
      <button 
        onClick={() => setIsLoginModalOpen(true)}
        className="fixed bottom-22 left-8 w-10 h-10 bg-slate-200/50 backdrop-blur-sm border border-slate-300/50 text-slate-400 rounded-full flex items-center justify-center hover:bg-edu-teal/20 hover:text-edu-teal transition-all z-50 group shadow-lg"
        title="Open Login Selection"
      >
        <LogIn size={20} />
      </button>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-edu-teal/[0.03] blur-[120px] -z-10 rounded-full" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-edu-blue/[0.03] blur-[100px] -z-10 rounded-full" />
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-w-0">
        <Routes>
          <Route index element={<AdminOverview />} />
          <Route path="users" element={
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-edu-navy font-sora">User Management</h1>
                <button className="bg-edu-teal text-edu-navy font-bold px-4 py-2 rounded-xl text-sm">Add New User</button>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">User</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Role</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: 'Dr. Sarah Smith', role: 'Teacher', status: 'Verified', color: 'text-green-500 bg-green-50' },
                      { name: 'John Peterson', role: 'Student', status: 'Active', color: 'text-blue-500 bg-blue-50' },
                      { name: 'Michael Ross', role: 'Teacher', status: 'Pending', color: 'text-yellow-600 bg-yellow-50' },
                    ].map((user, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-edu-navy">{user.name}</td>
                        <td className="px-6 py-4 text-slate-500">{user.role}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${user.color}`}>{user.status}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-edu-teal font-bold text-xs px-2 py-1">Edit</button>
                          <button className="text-slate-400 hover:text-red-500 font-bold text-xs px-2 py-1">Suspend</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          } />
          <Route path="content" element={
            <div className="p-8 text-slate-900">
              <h1 className="text-2xl font-bold mb-8 font-sora">Content Moderation</h1>
              <div className="grid gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 flex justify-between items-center shadow-sm">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-slate-100" />
                      <div>
                        <p className="font-bold text-edu-navy font-sora">Flagged Material #{i}</p>
                        <p className="text-sm text-slate-400">Reported for copyright violation</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50">Approve</button>
                      <button className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />
          <Route path="subscriptions" element={
             <div className="p-8 text-slate-900">
              <h1 className="text-2xl font-bold mb-8 font-sora">Subscriptions & Billing</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { tier: 'Free', users: '1.2k', revenue: '$0' },
                  { tier: 'Pro Teacher', users: '450', revenue: '$4,500' },
                  { tier: 'Institutional', users: '12', revenue: '$12,000' },
                ].map((plan, i) => (
                  <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">{plan.tier}</p>
                    <p className="text-3xl font-bold text-edu-navy mb-1">{plan.revenue}</p>
                    <p className="text-sm text-slate-500">Monthly Revenue</p>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <p className="text-sm font-bold text-edu-navy">{plan.users} Active Users</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<SocialLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

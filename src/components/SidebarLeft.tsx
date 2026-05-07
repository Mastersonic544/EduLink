import { useState, useEffect } from 'react';
import { Home, Compass, User, Bookmark, Settings, LogOut, GraduationCap, BookOpen, Users, ClipboardCheck, CreditCard, MessageSquarePlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TEACHER_NAV = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'My Classes', icon: Users, path: '/classes' },
  { name: 'Collaboration', icon: MessageSquarePlus, path: '/groups' },
  { name: 'Resources', icon: BookOpen, path: '/resources' },
  { name: 'Submissions', icon: ClipboardCheck, path: '/submissions' },
  { name: 'Subscriptions', icon: CreditCard, path: '/subscriptions' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

const STUDENT_NAV = [
  { name: 'Feed', icon: Home, path: '/' },
  { name: 'Discover', icon: Compass, path: '/discover' },
  { name: 'My Profile', icon: User, path: '/profile' },
  { name: 'Saved', icon: Bookmark, path: '/saved' },
  { name: 'Subscriptions', icon: CreditCard, path: '/subscriptions' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

const SidebarLeft = () => {
  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [name, setName] = useState('Prof. Robert Chen');

  useEffect(() => {
    const savedRole = localStorage.getItem('edu_user_role') as 'teacher' | 'student';
    const savedName = localStorage.getItem('edu_user_name');
    if (savedRole) setRole(savedRole);
    if (savedName) setName(savedName);
  }, []);

  const navItems = role === 'teacher' ? TEACHER_NAV : STUDENT_NAV;
  const avatar = role === 'teacher' 
    ? "https://i.pravatar.cc/150?u=teacher" 
    : "https://i.pravatar.cc/150?u=student";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  return (
    <aside className="w-64 h-screen flex flex-col p-6 sticky top-0 border-r border-slate-200 hidden lg:flex bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-edu-teal p-1.5 rounded-lg">
          <GraduationCap className="text-edu-navy w-6 h-6" />
        </div>
        <span className="text-2xl font-bold font-sora tracking-tight text-edu-navy">EduLink</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-edu-teal/10 text-edu-teal'
                  : 'text-slate-500 hover:text-edu-navy hover:bg-slate-50'
              }`
            }
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* XP Card */}
      <div className="mt-auto space-y-6">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{role === 'teacher' ? 'Teaching XP' : 'Learning XP'}</span>
            <span className="text-xs font-bold text-edu-teal">Level {role === 'teacher' ? '12' : '4'}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-edu-teal rounded-full" 
              style={{ width: role === 'teacher' ? '64%' : '32%' }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>{role === 'teacher' ? '640' : '320'} / 1000 XP</span>
            <span>{role === 'teacher' ? '360' : '680'} more to Next Lvl</span>
          </div>
        </div>

        {/* User Profile Summary */}
        <div className="p-3 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-edu-blue flex items-center justify-center font-bold text-edu-navy overflow-hidden">
            <img src={avatar} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-edu-navy">{name}</p>
            <p className="text-[10px] text-slate-400 truncate opacity-70 uppercase font-bold tracking-wider">{role} Account</p>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarLeft;

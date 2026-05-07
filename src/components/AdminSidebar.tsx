import { LayoutDashboard, Users, FileText, CreditCard, ShieldCheck, Settings, LogOut, ArrowLeftRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, path: '/admin' },
  { name: 'Users', icon: Users, path: '/admin/users' },
  { name: 'Content', icon: FileText, path: '/admin/content' },
  { name: 'Subscriptions', icon: CreditCard, path: '/admin/subscriptions' },
  { name: 'Verification Queue', icon: ShieldCheck, path: '/admin/verification' },
  { name: 'Settings', icon: Settings, path: '/admin/settings' },
];

const AdminSidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-[60]">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-edu-teal rounded-lg flex items-center justify-center shadow-lg shadow-edu-teal/20">
            <span className="text-edu-navy font-bold text-xl">E</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-edu-navy">EduLink <span className="text-edu-teal text-xs uppercase ml-1 opacity-80 font-bold">Admin</span></span>
        </div>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-edu-teal/10 text-edu-teal border-l-4 border-edu-teal'
                  : 'text-slate-400 hover:text-edu-navy hover:bg-slate-50 border-l-4 border-transparent'
              }`
            }
          >
            <item.icon size={20} className="transition-colors" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
        
        <div className="pt-4 border-t border-slate-50 mx-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-edu-teal hover:bg-edu-teal/5 transition-all group"
          >
            <ArrowLeftRight size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-bold text-sm">Go to Social Feed</span>
          </button>
        </div>
      </nav>

      <div className="p-6 border-t border-slate-100">
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 group">
          <div className="w-10 h-10 rounded-full bg-edu-teal/20 flex items-center justify-center text-edu-teal font-bold overflow-hidden">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-edu-navy truncate">Admin User</p>
            <p className="text-xs text-slate-400 truncate">System Controller</p>
          </div>
          <button 
            onClick={() => { localStorage.clear(); window.location.href = '/login'; }}
            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

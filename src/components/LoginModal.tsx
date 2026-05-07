import { Shield, GraduationCap, User, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const roles = [
    {
      id: 'admin',
      name: 'Administrator',
      description: 'System-wide control and management.',
      features: ['User Management', 'Content Moderation', 'Analytics Dashboard', 'System Health'],
      icon: Shield,
      color: 'bg-edu-navy',
      path: '/admin'
    },
    {
      id: 'teacher',
      name: 'Teacher',
      description: 'Educational leadership and sharing.',
      features: ['Course Sharing', 'Live Classrooms', 'Peer Networking', 'Resource Library'],
      icon: GraduationCap,
      color: 'bg-edu-teal',
      path: '/login?role=teacher'
    },
    {
      id: 'student',
      name: 'Student',
      description: 'Active learning and collaboration.',
      features: ['Material Access', 'Study Groups', 'Progress Tracking', 'Teacher Q&A'],
      icon: User,
      color: 'bg-edu-blue',
      path: '/login?role=student'
    }
  ];

  const handleRoleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl shadow-slate-900/10 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-bold text-edu-navy tracking-tight">Access EduLink</h2>
              <p className="text-slate-500 mt-2 text-lg">Select your journey to continue</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.path)}
                className="flex flex-col p-6 rounded-[24px] border-2 border-slate-100 hover:border-edu-teal hover:bg-edu-teal/[0.02] transition-all group text-left relative overflow-hidden"
              >
                <div className={`${role.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                  <role.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-edu-navy mb-2">{role.name}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">{role.description}</p>
                
                <div className="space-y-2 mt-auto">
                  {role.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                      <div className="w-1 h-1 rounded-full bg-edu-teal" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-edu-teal group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            Don't have an account? <span className="text-edu-teal font-bold hover:underline cursor-pointer" onClick={() => { navigate('/signup'); onClose(); }}>Sign up for free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

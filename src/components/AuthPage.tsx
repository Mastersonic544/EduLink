import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Eye, EyeOff, User, GraduationCap } from 'lucide-react';
import LoginModal from './LoginModal';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'teacher' | 'student' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'teacher' || roleParam === 'student') {
      setRole(roleParam as 'teacher' | 'student');
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin && email === '' && password === '') {
      setIsRoleModalOpen(true);
      return;
    }
    
    // Save role to localStorage for mock persistence
    localStorage.setItem('edu_user_role', isLogin ? role : role);
    localStorage.setItem('edu_user_name', role === 'teacher' ? 'Prof. Robert Chen' : 'Alex Johnson');
    
    // Mock login success
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex min-h-screen bg-white font-dm-sans overflow-hidden">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-white p-12 flex-col justify-between relative overflow-hidden border-r border-slate-100">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00BFA6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-edu-teal/[0.05] blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-edu-teal rounded-lg flex items-center justify-center shadow-lg shadow-edu-teal/20">
            <span className="text-edu-navy font-bold text-xl">E</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-edu-navy">EduLink</span>
        </div>

        <div className="relative z-10 space-y-8 mb-20">
          <h1 className="text-5xl font-bold text-edu-navy leading-tight">
            Education Without <span className="text-edu-teal">Borders</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
            The first professional network where teachers share how they teach — and students everywhere benefit.
          </p>

          <div className="space-y-4 pt-4">
            {[
              'Verified course materials',
              'Real teaching methodologies',
              'A global community of educators',
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="text-edu-teal">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-lg text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-slate-300 text-sm">
          © 2026 EduLink. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50 relative">
        <div className="absolute top-8 left-8 lg:hidden">
           <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-edu-teal rounded-md flex items-center justify-center">
              <span className="text-edu-navy font-bold text-sm">E</span>
            </div>
            <span className="text-lg font-bold text-edu-navy">EduLink</span>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-edu-navy tracking-tight">
              {isLogin ? 'Welcome back' : 'Join EduLink'}
            </h2>
            <p className="text-slate-500 mt-2">
              {isLogin 
                ? 'Enter your credentials to access your account' 
                : 'Create an account to start sharing or learning'}
            </p>
          </div>

          <div className="space-y-6">
            {!isLogin && (
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700">I am a...</label>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setRole('teacher')}
                    className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                      role === 'teacher' 
                        ? 'border-edu-teal bg-edu-teal/5 text-edu-navy' 
                        : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <GraduationCap size={28} className={role === 'teacher' ? 'text-edu-teal' : ''} />
                    <span className="text-sm font-bold">Teacher</span>
                  </button>
                  <button 
                    onClick={() => setRole('student')}
                    className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                      role === 'student' 
                        ? 'border-edu-teal bg-edu-teal/5 text-edu-navy' 
                        : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <User size={28} className={role === 'student' ? 'text-edu-teal' : ''} />
                    <span className="text-sm font-bold">Student</span>
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-edu-teal focus:ring-1 focus:ring-edu-teal transition-all"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  {role === 'teacher' && !isLogin ? 'Institutional Email' : 'Email Address'}
                </label>
                <input 
                  type="email" 
                  placeholder={role === 'teacher' && !isLogin ? 'name@university.edu' : 'name@example.com'} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-edu-teal focus:ring-1 focus:ring-edu-teal transition-all"
                />
                {role === 'teacher' && !isLogin && (
                  <p className="text-[10px] text-slate-400 ml-1">We'll verify your institution automatically.</p>
                )}
              </div>

              <div className="space-y-1.5 relative">
                <div className="flex justify-between items-center sm:ml-1">
                   <label className="text-sm font-semibold text-slate-700">Password</label>
                   {isLogin && (
                     <button className="text-xs font-bold text-edu-teal hover:underline transition-all">Forgot password?</button>
                   )}
                </div>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-edu-teal focus:ring-1 focus:ring-edu-teal transition-all"
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-1.5 relative">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Confirm Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-edu-teal focus:ring-1 focus:ring-edu-teal transition-all"
                  />
                </div>
              )}
            </div>

            {!isLogin && (
               <div className="flex items-center gap-3 px-1">
                  <input type="checkbox" id="terms" className="w-5 h-5 accent-edu-teal rounded-md border-slate-300" />
                  <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
                    By creating an account, you agree to our <span className="text-edu-navy font-semibold hover:underline cursor-pointer">Terms of Service</span> and <span className="text-edu-navy font-semibold hover:underline cursor-pointer">Privacy Policy</span>.
                  </label>
               </div>
            )}

            <button 
              onClick={handleLogin}
              className="w-full h-14 bg-edu-teal text-edu-navy font-bold rounded-2xl shadow-lg shadow-edu-teal/10 hover:shadow-edu-teal/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center text-lg"
            >
              {isLogin ? 'Log in' : 'Create Account'}
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-50 px-2 text-slate-400 font-bold tracking-widest">or</span></div>
            </div>

            <button className="w-full h-14 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.9 0 3.53.68 4.87 2.01l3.65-3.65C18.31 1.41 15.42 0 12 0 7.31 0 3.32 2.69 1.41 6.64l4.24 3.28C6.67 7.03 9.1 5.04 12 5.04z" />
                <path fill="#4285F4" d="M23.49 12.27c0-.85-.07-1.68-.21-2.47H12v4.68h6.44c-.28 1.44-1.09 2.66-2.31 3.48l3.62 2.81c2.12-1.95 3.34-4.82 3.34-8.5z" />
                <path fill="#FBBC05" d="M5.65 14.36c-.23-.68-.36-1.41-.36-2.16s.13-1.48.36-2.16L1.41 6.64C.51 8.5 0 10.5 0 12.6s.51 4.1 1.41 5.96l4.24-3.24c-.23-.68-.36-1.41-.36-2.16z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.92l-3.62-2.81c-1.1.74-2.5 1.17-4.33 1.17-3.34 0-6.17-2.25-7.18-5.28l-4.24 3.24C3.32 21.31 7.31 24 12 24z" />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="text-center">
            <p className="text-slate-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={toggleAuthMode}
                className="ml-2 font-bold text-edu-navy hover:text-edu-teal transition-colors"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isRoleModalOpen} 
        onClose={() => setIsRoleModalOpen(false)} 
      />
    </div>
  );
};

export default AuthPage;

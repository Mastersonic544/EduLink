import { useState, useEffect } from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

const SubscriptionPage = () => {
  const [role, setRole] = useState<'teacher' | 'student'>('student');

  useEffect(() => {
    const savedRole = localStorage.getItem('edu_user_role') as 'teacher' | 'student' | 'admin';
    if (savedRole && savedRole !== 'admin') {
      setRole(savedRole as 'teacher' | 'student');
    }
  }, []);

  const studentPlans = [
    {
      name: 'Free Learning',
      price: '0',
      description: 'Perfect for getting started with EduLink.',
      features: ['Access to public courses', 'Join 2 study groups', 'Basic profile', 'Peer networking'],
      buttonText: 'Current Plan',
      popular: false
    },
    {
      name: 'Student Pro',
      price: '9.99',
      description: 'Accelerate your learning journey.',
      features: ['Access to premium materials', 'Unlimited study groups', 'Verified student badge', 'Priority Q&A support', 'Offline downloads'],
      buttonText: 'Upgrade to Pro',
      popular: true
    },
    {
      name: 'Group Plus',
      price: '19.99',
      description: 'Ideal for collaborative teams.',
      features: ['Everything in Pro', 'Shared team workspace', 'Advanced analytics', 'Group project tools', 'Private mentorship slots'],
      buttonText: 'Get Group plus',
      popular: false
    }
  ];

  const teacherPlans = [
    {
      name: 'Educator',
      price: '0',
      description: 'Share your knowledge with the world.',
      features: ['Host 3 public classes', 'Basic course sharing', 'Public profile', 'Teacher network access'],
      buttonText: 'Current Plan',
      popular: false,
      comments: []
    },
    {
      name: 'Premium Educator',
      price: '29.99',
      description: 'Advanced tools for top educators.',
      features: ['Unlimited classes', 'Premium monetization tools', 'Advanced student analytics', 'Verified educator badge', 'Custom branding'],
      buttonText: 'Upgrade to Premium',
      popular: true,
      comments: []
    },
    {
      name: 'Institutional',
      price: '99.99',
      description: 'Power your entire department.',
      features: ['Everything in Premium', 'Admin management tools', 'Bulk student verified', 'SLA support', 'API access'],
      buttonText: 'Contact for Enterprise',
      popular: false,
      comments: []
    }
  ];

  const plans = role === 'teacher' ? teacherPlans : studentPlans;

  return (
    <div className="p-10 font-sora text-edu-navy min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Simple, transparent <span className="text-edu-teal">pricing</span></h1>
          <p className="text-slate-500 text-xl">Choose the plan that's right for your {role} journey</p>
          
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-sm flex">
              <button 
                onClick={() => setRole('student')}
                className={`px-8 py-2 rounded-xl font-bold transition-all ${role === 'student' ? 'bg-edu-teal text-edu-navy shadow-lg' : 'text-slate-400 hover:text-edu-navy'}`}
              >
                Student
              </button>
              <button 
                onClick={() => setRole('teacher')}
                className={`px-8 py-2 rounded-xl font-bold transition-all ${role === 'teacher' ? 'bg-edu-teal text-edu-navy shadow-lg' : 'text-slate-400 hover:text-edu-navy'}`}
              >
                Teacher
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border border-slate-100 transition-all duration-300 hover:scale-[1.02] flex flex-col ${plan.popular ? 'ring-2 ring-edu-teal shadow-2xl shadow-edu-teal/10' : 'shadow-xl shadow-slate-900/5'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-edu-teal text-edu-navy text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-edu-navy">{plan.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-400 font-sora">$</span>
                  <span className="text-5xl font-black text-edu-navy">{plan.price}</span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">/ mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-lg bg-edu-teal/10 flex items-center justify-center text-edu-teal shrink-0 mt-0.5 border border-edu-teal/20">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-slate-600 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group ${plan.popular ? 'bg-edu-teal text-edu-navy shadow-lg shadow-edu-teal/20 hover:shadow-edu-teal/40' : 'bg-slate-50 text-slate-400 hover:bg-edu-navy hover:text-white border border-slate-100 hover:border-edu-navy'}`}
              >
                {plan.buttonText}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-edu-navy rounded-[48px] relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-edu-teal/10 blur-[100px] rounded-full" />
          <div className="relative z-10 flex-1">
            <h2 className="text-4xl font-bold mb-4 font-sora tracking-tight">Need a custom plan?</h2>
            <p className="text-slate-300 text-lg max-w-lg">Get in touch with our institutional team for university-wide licenses and custom integrations.</p>
          </div>
          <button className="relative z-10 bg-white text-edu-navy px-10 py-5 rounded-3xl font-black hover:bg-edu-teal hover:scale-105 transition-all shadow-xl flex items-center gap-3 group">
            <ShieldCheck size={24} className="text-edu-teal" />
            Contact Institutional Sales
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;

import { useState } from 'react';
import { Plus, MessageSquare, Search, ArrowRight, BookOpen, Globe, Lightbulb } from 'lucide-react';

const GroupsPage = () => {
  const [activeGroup, setActiveGroup] = useState<any>(null);

  const groups = [
    {
      id: 1,
      name: 'STEM Educators Hub',
      description: 'Sharing innovative methodologies for Science, Tech, Engineering and Math.',
      members: 1240,
      posts: 89,
      icon: Globe,
      color: 'bg-blue-500',
      trending: true
    },
    {
      id: 2,
      name: 'AI in the Classroom',
      description: 'Discussing the ethics and practical use of LLMs in education.',
      members: 3100,
      posts: 256,
      icon: Lightbulb,
      color: 'bg-edu-teal',
      trending: true
    },
    {
      id: 3,
      name: 'Higher Ed Pedagogy',
      description: 'Network for university professors and researchers.',
      members: 850,
      posts: 42,
      icon: BookOpen,
      color: 'bg-purple-500',
      trending: false
    }
  ];

  const mockDiscussions = [
    { id: 1, user: 'Prof. Marcus Chen', text: "Has anyone tried the new adaptive learning tools for Year 2 Calculus?", time: '10m ago', replies: 3 },
    { id: 2, user: 'Sarah Jenkins', text: "Just shared a rubric for peer-review in large chemistry lectures. Check it out!", time: '45m ago', replies: 12 },
    { id: 3, user: 'Dr. Robert Fox', text: "Looking for guest speakers on Quantum Computing for my undergrad seminar.", time: '2h ago', replies: 0 }
  ];

  if (activeGroup) {
    return (
      <div className="p-10 font-sora text-edu-navy h-full bg-slate-50 animate-in fade-in duration-300">
        <button 
          onClick={() => setActiveGroup(null)}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-edu-teal font-bold transition-all group"
        >
          <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Groups
        </button>

        <div className="flex gap-10">
          <div className="flex-1 space-y-8">
            <div className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-xl shadow-slate-900/5 relative overflow-hidden">
               <div className={`absolute top-0 right-0 w-64 h-64 ${activeGroup.color} opacity-5 blur-[80px] rounded-full`} />
               <div className="relative z-10">
                <div className={`w-16 h-16 ${activeGroup.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}>
                  <activeGroup.icon size={32} />
                </div>
                <h1 className="text-4xl font-bold mb-4">{activeGroup.name}</h1>
                <p className="text-slate-500 text-lg max-w-2xl">{activeGroup.description}</p>
                
                <div className="flex gap-6 mt-8">
                  <div className="text-center">
                    <p className="text-2xl font-black text-edu-navy">{activeGroup.members}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Educators</p>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-edu-navy">{activeGroup.posts}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Discussions</p>
                  </div>
                </div>
               </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold px-4">Active Discussions</h2>
              {mockDiscussions.map((disc) => (
                <div key={disc.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-edu-teal transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-100" />
                      <div>
                        <p className="font-bold text-sm">{disc.user}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{disc.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-edu-teal transition-colors">
                      <MessageSquare size={16} />
                      <span className="text-xs font-bold">{disc.replies}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"{disc.text}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-80 space-y-6">
            <div className="bg-edu-navy p-8 rounded-[40px] text-white overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-edu-teal/20 blur-[40px] rounded-full" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Start a Thread</h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed">Share a challenge or a win with your fellow educators in this group.</p>
              <button className="w-full py-4 bg-edu-teal text-edu-navy font-bold rounded-2xl relative z-10 shadow-lg shadow-edu-teal/20 hover:scale-105 transition-all">
                Compose Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 font-sora text-edu-navy min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Teacher <span className="text-edu-teal">Collaboration</span></h1>
            <p className="text-slate-500">Connect, share, and grow with educators worldwide.</p>
          </div>
          <button className="bg-edu-navy text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-edu-teal hover:text-edu-navy transition-all shadow-xl group">
            <Plus size={24} className="group-hover:rotate-90 transition-transform" />
            Create New Group
          </button>
        </div>

        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for groups by subject, methodology, or level..."
            className="w-full h-16 pl-16 pr-6 bg-white border border-slate-200 rounded-[28px] shadow-sm focus:outline-none focus:border-edu-teal transition-all text-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <button 
              key={group.id}
              onClick={() => setActiveGroup(group)}
              className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-edu-teal/10 hover:border-edu-teal transition-all group text-left relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${group.color} opacity-[0.03] blur-[40px] rounded-full`} />
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-14 h-14 ${group.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <group.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{group.name}</h3>
                    {group.trending && (
                      <span className="bg-orange-50 text-orange-500 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">Trending</span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{group.members} Members</p>
                </div>
              </div>
              <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">{group.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${group.id}-${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-edu-teal flex items-center justify-center text-[10px] font-bold text-edu-navy shadow-sm">
                    +12
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-edu-teal group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;

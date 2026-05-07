import { TEACHERS } from '../data/mockData';
import { BadgeCheck, Plus } from 'lucide-react';

const SidebarRight = () => {
  return (
    <div className="w-80 h-screen flex flex-col p-6 sticky top-0 border-l border-slate-200 hidden xl:flex bg-white">
      <h2 className="text-xl font-bold font-sora mb-6 text-edu-navy">Trending Teachers</h2>

      <div className="space-y-4">
        {TEACHERS.slice(0, 4).map((teacher) => (
          <div
            key={teacher.id}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-edu-teal/30 hover:bg-white hover:shadow-edu transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-edu-teal/20 border border-edu-teal/30 flex items-center justify-center text-edu-teal font-bold text-sm overflow-hidden">
                <img src={teacher.avatar} alt={teacher.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold truncate text-edu-navy">{teacher.name}</span>
                  {teacher.verified && <BadgeCheck size={14} className="text-edu-blue shrink-0" />}
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium truncate">
                  Level {Math.floor(teacher.xp / 100)} • {teacher.subject}
                </p>
              </div>
            </div>

            <button className="w-full py-2 px-4 rounded-xl border border-slate-200 bg-white hover:border-edu-teal/50 hover:text-edu-teal text-sm font-bold transition-all flex items-center justify-center gap-2 text-slate-600">
              <Plus size={16} />
              Follow
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-edu-teal/20 to-transparent border border-edu-teal/20">
        <h3 className="text-sm font-bold mb-1 text-edu-navy">Upgrade to Premium</h3>
        <p className="text-xs text-slate-500 mb-4">Get 150 downloads and priority access to top teachers.</p>
        <button className="text-edu-teal text-xs font-bold hover:underline">Learn more →</button>
      </div>
    </div>
  );
};

export default SidebarRight;

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Users, UserCheck, GraduationCap, FilePlus, TrendingUp, ArrowUpRight, Check, X as CloseIcon } from 'lucide-react';

const kpis = [
  { title: 'Total Users', value: '124,850', change: '+12%', icon: Users },
  { title: 'Total Teachers', value: '8,420', change: '+5%', icon: GraduationCap },
  { title: 'Total Students', value: '116,430', change: '+14%', icon: UserCheck },
  { title: 'Total Posts', value: '45,210', change: '+8%', icon: FilePlus },
];

const barData = [
  { month: 'Jan', posts: 400, downloads: 2400 },
  { month: 'Feb', posts: 300, downloads: 1398 },
  { month: 'Mar', posts: 200, downloads: 9800 },
  { month: 'Apr', posts: 278, downloads: 3908 },
  { month: 'May', posts: 189, downloads: 4800 },
  { month: 'Jun', posts: 239, downloads: 3800 },
];

const pieData = [
  { name: 'Premium', value: 35, color: '#00BFA6' },
  { name: 'Free', value: 65, color: '#E2E8F0' },
];

const lineData = [
  { name: 'Jan', mau: 4000 },
  { name: 'Feb', mau: 3000 },
  { name: 'Mar', mau: 2000 },
  { name: 'Apr', mau: 2780 },
  { name: 'May', mau: 1890 },
  { name: 'Jun', mau: 2390 },
  { name: 'Jul', mau: 3490 },
  { name: 'Aug', mau: 4000 },
  { name: 'Sep', mau: 5000 },
  { name: 'Oct', mau: 6800 },
  { name: 'Nov', mau: 7500 },
  { name: 'Dec', mau: 8200 },
];

const pendingVerifications = [
  { id: 1, name: 'Dr. Sarah Ahmed', institution: 'University of Cairo', date: '2026-05-01' },
  { id: 2, name: 'Prof. James Wilson', institution: 'Oxford University', date: '2026-05-03' },
  { id: 3, name: 'Maria Garcia', institution: 'UP Valencia', date: '2026-05-04' },
];

const AdminOverview = () => {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen text-slate-900 font-sora">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-edu-navy">System Overview</h1>
        <div className="text-sm text-slate-400">Last updated: Just now</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div key={kpi.title} className="bg-white p-6 rounded-2xl border border-slate-200 relative overflow-hidden group hover:shadow-edu transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-edu-teal transition-colors">
                <kpi.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-edu-teal bg-edu-teal/10 px-2 py-1 rounded-full uppercase tracking-wider">
                <TrendingUp size={10} />
                {kpi.change}
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400">{kpi.title}</p>
            <p className="text-2xl font-bold mt-1 text-edu-teal">{kpi.value}</p>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-edu-teal/5 blur-[40px] rounded-full group-hover:bg-edu-teal/10 transition-all" />
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
          <h2 className="text-lg font-semibold text-edu-navy">Post vs Download Activity</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  itemStyle={{ color: '#0F1F3D' }}
                />
                <Bar dataKey="posts" fill="#00BFA6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="downloads" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
          <h2 className="text-lg font-semibold text-edu-navy">Free vs Premium Users</h2>
          <div className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      className={entry.name === 'Free' ? 'stroke-white/10 stroke-[2px]' : ''} 
                    />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-slate-400">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Line Chart */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
          <h2 className="text-lg font-semibold text-edu-navy">Monthly Active Users</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorMau" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00BFA6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00BFA6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px' }}
                />
                <Area type="monotone" dataKey="mau" stroke="#00BFA6" strokeWidth={3} fillOpacity={1} fill="url(#colorMau)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Verification Table */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-edu-navy">Pending Verifications</h2>
            <button className="text-xs text-edu-teal hover:underline font-bold">View All</button>
          </div>
          <div className="space-y-4">
            {pendingVerifications.map((teacher) => (
              <div key={teacher.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-edu-teal/20 transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-edu-navy">{teacher.name}</p>
                    <p className="text-xs text-slate-400">{teacher.institution}</p>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium">{teacher.date}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="flex-1 px-3 py-2 bg-edu-teal/10 text-edu-teal rounded-lg text-xs font-bold hover:bg-edu-teal hover:text-edu-navy transition-all flex items-center justify-center gap-1">
                    <Check size={14} />
                    Approve
                  </button>
                  <button className="px-3 py-2 bg-slate-100 text-slate-400 rounded-lg text-xs font-bold hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-center">
                    <CloseIcon size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-6 text-edu-navy">Conversion Funnel</h2>
        <div className="relative flex items-center">
          {[
            { label: 'Registered', value: '124.8k', pct: '100%', color: 'from-edu-teal/20 to-edu-teal/40' },
            { label: 'Active', value: '82.4k', pct: '66%', color: 'from-edu-teal/40 to-edu-teal/70' },
            { label: 'Premium', value: '28.9k', pct: '23%', color: 'from-edu-teal/70 to-edu-teal' }
          ].map((step, i) => (
            <div key={step.label} className="relative flex-1 group">
               <div className={`h-24 bg-gradient-to-r ${step.color} rounded-lg flex flex-col items-center justify-center border border-white/5 shadow-xl transition-transform hover:scale-[1.02]`}>
                  <p className="text-xs uppercase tracking-widest font-bold text-white/70 mb-1">{step.label}</p>
                  <p className="text-2xl font-bold text-white">{step.value}</p>
               </div>
               <div className="text-center mt-3">
                  <span className="text-sm font-bold text-edu-teal">{step.pct}</span>
               </div>
               {i < 2 && (
                 <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowUpRight size={14} className="text-edu-teal rotate-45" />
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;

import { useState } from 'react';
import { POSTS, TEACHERS } from '../data/mockData';
import FeedCard from './FeedCard';
import { Search } from 'lucide-react';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Course Material', 'Teaching Methodology', 'Experience & Reflection'];
  const tags = ['Mathematics', 'Computer Science', 'Physics', 'History', 'Engineering', 'Biology', 'Economics'];

  const filteredPosts = activeTab === 'All' 
    ? POSTS 
    : POSTS.filter(post => post.type === activeTab);

  return (
    <div className="flex-1 min-h-screen max-w-2xl mx-auto px-4 py-6 scrollbar-hide">
      {/* Header / Search */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for materials, teachers, topics..."
            className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-edu-teal/50 transition-all shadow-sm focus:bg-white"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-slate-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-all ${
              activeTab === tab
                ? 'border-edu-teal text-edu-teal'
                : 'border-transparent text-slate-400 hover:text-edu-navy'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tags Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto mb-6 scrollbar-hide no-scrollbar">
        {tags.map((tag) => (
          <button
            key={tag}
            className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-medium hover:border-edu-teal/50 hover:text-edu-teal transition-all shadow-sm"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post List */}
      <div className="space-y-6 pb-20">
        {filteredPosts.map((post) => (
          <FeedCard 
            key={post.id} 
            post={post} 
            teacher={TEACHERS.find(t => t.id === post.teacherId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;

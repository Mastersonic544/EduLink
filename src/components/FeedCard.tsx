import { useState } from 'react';
import { BadgeCheck, Heart, MessageSquare, Share2, Download, MoreHorizontal, FileText, Send } from 'lucide-react';

interface Post {
  id: number;
  teacherId: number;
  type: string;
  tags: string[];
  title: string;
  description: string;
  likes: number;
  comments: any[];
  shares: number;
  downloads: number;
  createdAt: string;
  fileName?: string;
  fileSize?: string;
}

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  verified: boolean;
  institution: string;
  subject: string;
}

interface FeedCardProps {
  post: Post;
  teacher?: Teacher;
}

const FeedCard = ({ post, teacher }: FeedCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments || [
    { id: 1, user: 'Dr. Emily Vance', avatar: 'https://i.pravatar.cc/150?u=emily', text: 'This approach to interactive calculus is revolutionary! I’ll definitely try it next week.', time: '2h ago' },
    { id: 2, user: 'Mark Thompson', avatar: 'https://i.pravatar.cc/150?u=mark', text: 'Do you have the accompanying slides for the third module?', time: '1h ago' }
  ]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  if (!teacher) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 transition-all hover:shadow-edu group">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-edu-teal/10 p-1">
            <img src={teacher.avatar} alt={teacher.name} className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-base text-edu-navy">{teacher.name}</h3>
              {teacher.verified && <BadgeCheck size={16} className="text-edu-blue" />}
            </div>
            <p className="text-xs text-slate-400">{teacher.institution} • {post.createdAt}</p>
          </div>
        </div>
        <button className="text-slate-300 hover:text-edu-navy p-2 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Content */}
      <div className="space-y-4">
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-edu-teal/10 text-edu-teal text-[10px] font-bold uppercase tracking-wider">
            {post.type}
          </span>
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
              #{tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold leading-tight group-hover:text-edu-teal transition-colors tracking-tight">
          {post.title}
        </h2>
        
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* File Preview (if applicable) */}
        {post.fileName && (
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group/file cursor-pointer hover:border-edu-teal/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-edu-teal/10 flex items-center justify-center text-edu-teal">
              <FileText size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-edu-navy">{post.fileName}</p>
              <p className="text-xs text-slate-400">{post.fileSize}</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-edu-teal/10 flex items-center justify-center text-edu-teal opacity-0 group-hover/file:opacity-100 transition-all">
              <Download size={18} />
            </button>
          </div>
        )}

        {/* Interaction Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <div className="flex gap-4 sm:gap-8">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-2 group transition-all ${isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'}`}
            >
              <Heart size={20} className={isLiked ? 'fill-current scale-110' : 'group-hover:scale-110'} />
              <span className="text-sm font-bold">{likesCount}</span>
            </button>
            <button 
              onClick={() => setIsCommentsOpen(!isCommentsOpen)}
              className={`flex items-center gap-2 group transition-all ${isCommentsOpen ? 'text-edu-teal' : 'text-slate-400 hover:text-edu-teal'}`}
            >
              <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">{comments.length}</span>
            </button>
            <button className="flex items-center gap-2 text-slate-400 hover:text-edu-blue group transition-all">
              <Share2 size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">Share</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold border border-slate-200 hover:bg-edu-teal hover:text-edu-navy hover:border-edu-teal transition-all group">
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            Download Source
          </button>
        </div>

        {/* Comments Section */}
        {isCommentsOpen && (
          <div className="mt-8 pt-8 border-t border-slate-100 animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-6 mb-8">
              {comments.map((comment: any) => (
                <div key={comment.id} className="flex gap-4">
                  <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full border-2 border-slate-100 shadow-sm" />
                  <div className="flex-1 bg-slate-50 p-4 rounded-3xl rounded-tl-none relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-edu-navy">{comment.user}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{comment.time}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-edu-teal/20 flex items-center justify-center text-edu-teal font-black text-sm border-2 border-white shadow-sm shrink-0">
                ME
              </div>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts on this resource..."
                  className="w-full h-12 pl-6 pr-14 bg-slate-50 border-2 border-transparent focus:border-edu-teal focus:bg-white rounded-2xl transition-all focus:outline-none text-sm placeholder:text-slate-400 text-edu-navy font-medium"
                />
                <button 
                  onClick={() => {
                    const comment = { id: Date.now(), user: 'Me', avatar: 'https://i.pravatar.cc/150?u=me', text: newComment, time: 'Just now' };
                    setComments([...comments, comment]);
                    setNewComment('');
                  }}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all ${newComment.trim() ? 'bg-edu-teal text-edu-navy shadow-lg' : 'text-slate-300'}`}
                  disabled={!newComment.trim()}
                >
                  <Send size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedCard;

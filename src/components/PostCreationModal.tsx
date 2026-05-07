import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, FileText, Link, MessageSquare, Lightbulb, Check } from 'lucide-react';

interface PostCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POST_TYPES = [
  { id: 'Course Material', icon: FileText },
  { id: 'Teaching Methodology', icon: Lightbulb },
  { id: 'Experience & Reflection', icon: MessageSquare },
  { id: 'Resource Link', icon: Link },
];

const SUGGESTED_TAGS = ['Artificial Intelligence', 'Pedagogy', 'STEM'];

const PostCreationModal: React.FC<PostCreationModalProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedType('');
      setTitle('');
      setDescription('');
      setTags([]);
      setFile(null);
    }
  }, [isOpen]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => setFile(null);

  const isFormValid = title.trim() !== '' && selectedType !== '';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-[640px] rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-edu-navy tracking-tight">Share with the Community</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-edu-navy hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh]">
          {/* Post Type Selector */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">Post Type</label>
            <div className="flex flex-wrap gap-2">
              {POST_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold transition-all duration-200 shadow-sm ${
                      isSelected 
                        ? 'bg-edu-teal border-edu-teal text-edu-navy' 
                        : 'border-slate-200 bg-white text-slate-500 hover:border-edu-teal hover:text-edu-teal'
                    }`}
                  >
                    <Icon size={16} />
                    {type.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Title</label>
            <input
              type="text"
              placeholder="e.g. Linear Algebra — Week 3 Lecture Slides"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-edu-teal focus:ring-1 focus:ring-edu-teal transition-all"
            />
          </div>

          {/* Description Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Description</label>
            <textarea
              placeholder="Describe your approach, what worked, what didn't..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-edu-teal focus:ring-1 focus:ring-edu-teal transition-all resize-none"
            />
          </div>

          {/* Tags Section */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-edu-teal/10 border border-edu-teal/30 text-edu-teal text-xs font-semibold rounded-lg">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="hover:text-white">
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Press Enter to add tags..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-edu-teal transition-all"
            />
            <div className="flex items-center gap-2 mt-2 ml-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Suggested:</span>
              {SUGGESTED_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => !tags.includes(tag) && setTags([...tags, tag])}
                  className="text-xs text-slate-400 hover:text-edu-teal transition-colors font-medium"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* File Upload Zone */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Attachment</label>
            {!file ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-edu-teal/50 hover:bg-edu-teal/5 transition-all group bg-slate-50/50"
              >
                <div className="p-3 rounded-full bg-white shadow-sm text-slate-400 group-hover:text-edu-teal transition-colors">
                  <Upload size={24} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-600">Drag & drop or click to upload</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, PPT, DOCX, ZIP (max 50MB)</p>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload}
                  className="hidden" 
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.zip"
                />
              </div>
            ) : (
              <div className="bg-edu-teal/5 border border-edu-teal/20 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-edu-teal/20 text-edu-teal rounded-lg">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-edu-navy truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-slate-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                <button 
                  onClick={removeFile}
                  className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Posts remaining this month: <span className="text-slate-600 font-bold">34/50</span>
          </p>
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-edu-navy transition-colors"
            >
              Cancel
            </button>
            <button 
              disabled={!isFormValid}
              className={`flex items-center gap-2 px-8 py-3 rounded-2xl text-base font-bold transition-all shadow-lg ${
                isFormValid 
                  ? 'bg-edu-teal text-edu-navy hover:scale-[1.02] active:scale-[0.98]' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-100'
              }`}
            >
              {isFormValid && <Check size={16} />}
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreationModal;

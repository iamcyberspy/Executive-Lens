import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Briefcase, Mail, Building2, Tag, Upload, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: any) => void;
}

export function OnboardingModal({ isOpen, onClose, onSave }: OnboardingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    department: 'Engineering',
    email: '',
    status: 'Active',
    tags: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `EL-${Math.floor(Math.random() * 90000) + 10000}-${formData.name.split(' ').map(n => n[0]).join('').toUpperCase()}`;
    onSave({
      ...formData,
      id: newId,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=4f46e5&color=fff&size=128`,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t !== ''),
      startDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    });
    setFormData({
      name: '',
      role: '',
      department: 'Engineering',
      email: '',
      status: 'Active',
      tags: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-3xl shadow-2xl z-[70] overflow-hidden"
          >
            <div className="p-8 border-b border-outline-variant flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-on-surface">Onboard New Employee</h2>
                <p className="text-sm text-on-surface-variant font-medium">Capture essential details for the workforce directory.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-variant"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1.5 col-span-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input 
                      required
                      className="block w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Professional Role</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Briefcase size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input 
                      required
                      className="block w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Lead Solutions Architect"
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Department</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Building2 size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <select 
                      className="block w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                      value={formData.department}
                      onChange={e => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Marketing</option>
                      <option>HR</option>
                      <option>Legal</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 col-span-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input 
                      required
                      type="email"
                      className="block w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="j.doe@executive-lens.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 col-span-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Tags (Comma separated)</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Tag size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input 
                      className="block w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Remote, Leadership, Security"
                      value={formData.tags}
                      onChange={e => setFormData({ ...formData, tags: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 text-sm font-bold text-on-surface-variant hover:bg-surface-container rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/10 hover:bg-primary-container transition-all flex items-center justify-center gap-2"
                >
                  Finalize Onboarding
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

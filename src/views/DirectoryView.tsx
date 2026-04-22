import { useState } from "react";
import { motion } from "motion/react";
import { UserPlus, Filter, ChevronDown, ChevronLeft, ChevronRight, UserCheck, MapPin, Clock, Search } from "lucide-react";
import { EMPLOYEES as INITIAL_EMPLOYEES } from "@/src/constants/data";
import { cn } from "@/src/lib/utils";
import { Link } from "react-router-dom";
import { OnboardingModal } from "../components/OnboardingModal";

const CATEGORIES = ["All Teams", "Engineering", "Design", "Marketing", "HR", "Legal"];

export function DirectoryView() {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEmployee = (newEmployee: any) => {
    setEmployees([newEmployee, ...employees]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">Employee Directory</h2>
            <p className="text-on-surface-variant font-medium text-sm">Manage and connect with 1,248 workforce members across global regions.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 shadow-md shadow-primary/10 hover:bg-primary-container transition-all font-bold text-sm tracking-wide"
          >
            <UserPlus size={16} />
            Add Member
          </motion.button>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map((cat, i) => (
            <button 
              key={cat} 
              className={cn(
                "px-5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all",
                i === 0 
                  ? "bg-primary text-white shadow-sm" 
                  : "bg-white border border-outline-variant text-on-surface-variant hover:bg-surface"
              )}
            >
              {cat}
            </button>
          ))}
          
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">
              <span>Sort:</span>
              <span className="text-primary flex items-center gap-1">Name <ChevronDown size={14} /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map((emp, i) => (
          <motion.div 
            key={emp.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="group block bg-white rounded-2xl p-6 border border-outline-variant hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <Link to={`/profile/${emp.id}`} className="relative mb-4">
                <img 
                  alt={emp.name} 
                  className="w-20 h-20 rounded-xl object-cover bg-surface"
                  src={emp.avatar} 
                />
              </Link>
              <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">{emp.name}</h3>
              <p className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest mt-1">{emp.role}</p>

              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {emp.tags?.slice(0, 2).map((tag: string) => (
                  <span key={tag} className="text-[9px] bg-surface-container text-on-surface-variant/60 px-2 py-0.5 rounded font-bold uppercase tracking-tight">
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                to={`/profile/${emp.id}`} 
                className="mt-6 w-full py-2 bg-surface hover:bg-surface-container-low text-primary text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 border border-outline-variant/50"
              >
                View Profile
                <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}

        {/* Add Member Card */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center p-8 group cursor-pointer hover:bg-white hover:border-primary transition-all shadow-sm"
        >
          <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-3 text-on-surface-variant/40 group-hover:bg-primary group-hover:text-white transition-all">
            <UserPlus size={20} />
          </div>
          <p className="text-[10px] font-bold text-on-surface-variant/30 uppercase tracking-widest group-hover:text-primary">New Employee</p>
        </div>
      </div>

      {/* Pagination */}
      <footer className="mt-12 flex items-center justify-between border-t border-outline-variant pt-8">
        <p className="text-xs font-medium text-on-surface-variant/40">Showing {employees.length} of 1,248 results</p>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs shadow">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant hover:text-primary font-bold text-xs transition-colors">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant hover:text-primary font-bold text-xs transition-colors">3</button>
          <span className="text-on-surface-variant/20 px-1 font-bold">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant hover:text-primary font-bold text-xs transition-colors text-right">24</button>
        </div>
      </footer>

      <OnboardingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddEmployee}
      />
    </div>
  );
}

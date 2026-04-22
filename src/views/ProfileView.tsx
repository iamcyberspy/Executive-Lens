import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Edit3, MessageSquare, MoreHorizontal, Calendar, Briefcase, ChevronRight, Hash } from "lucide-react";
import { EMPLOYEES } from "@/src/constants/data";
import { cn } from "@/src/lib/utils";

export function ProfileView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = EMPLOYEES.find(e => e.id === id) || EMPLOYEES[0];

  return (
    <div className="space-y-12 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <section className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden p-10 flex flex-col md:flex-row items-center gap-10">
        <div className="relative group">
          <motion.img 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            alt={employee.name} 
            className="w-40 h-40 rounded-2xl object-cover border border-outline-variant shadow-sm bg-surface"
            src={employee.avatar} 
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded">{employee.status}</span>
            <span className="px-2.5 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-widest rounded">Verification Active</span>
          </div>
          <h1 className="text-4xl font-bold text-on-surface tracking-tight">{employee.name}</h1>
          <p className="text-lg font-medium text-on-surface-variant/60">{employee.role}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Mail size={16} />
              <span className="text-sm font-medium">{employee.email}</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <MapPin size={16} />
              <span className="text-sm font-medium">{employee.department}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-container transition-all">
            Message
          </button>
          <button className="p-2.5 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface transition-all">
            <Edit3 size={18} />
          </button>
        </div>
      </section>

      {/* Profile Content */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Sidebar Info */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-on-surface mb-2">Employee Metadata</h3>
            <div className="space-y-4">
              <MetaRow label="UUID" value={employee.id.slice(0, 8)} />
              <MetaRow label="Joined" value={employee.startDate || "2021-04-12"} />
              <MetaRow label="Reports to" value="Director Ops" />
              <MetaRow label="Level" value="Senior L4" />
            </div>
          </div>

          <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
              <Briefcase size={20} />
            </div>
            <div>
              <p className="text-primary font-bold text-sm">Full Benefits Active</p>
              <p className="text-indigo-700 text-xs">Standard internal tier package</p>
            </div>
          </div>
        </div>

        {/* Career Journey */}
        <div className="col-span-12 lg:col-span-8 bg-white p-10 rounded-2xl border border-outline-variant shadow-sm space-y-10">
          <h3 className="text-lg font-bold text-on-surface">Career Trajectory</h3>
          <div className="space-y-12">
            <TimelineItem 
              active 
              period="2023 — Present" 
              title={employee.role}
              description="Extending organizational leadership and operational strategy across global regions. Focused on maximizing team efficiency and data-driven resource allocation."
            />
            <TimelineItem 
              period="2021 — 2023" 
              title="Regional Lead" 
              description="Spearheaded the development of regional frameworks and internal documentation standards."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
      <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-semibold text-on-surface">{value}</span>
    </div>
  );
}

function TimelineItem({ active, period, title, description }: { active?: boolean, period: string, title: string, description: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-3 h-3 rounded-full mt-1.5",
          active ? "bg-primary shadow-[0_0_0_4px_rgba(79,70,229,0.1)]" : "bg-outline-variant"
        )}></div>
        <div className="w-px flex-1 bg-outline-variant mt-2 group-last:hidden"></div>
      </div>
      <div className="space-y-1.5 pb-2">
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">{period}</span>
        <h4 className="text-base font-bold text-on-surface">{title}</h4>
        <p className="text-sm text-on-surface-variant/70 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

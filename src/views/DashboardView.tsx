import { motion } from "motion/react";
import { Users, LayoutGrid, Briefcase, History, Star, ArrowRight, CheckCircle2, PartyPopper, UserPlus } from "lucide-react";
import { EMPLOYEES, ACTIVITIES } from "@/src/constants/data";
import { cn } from "@/src/lib/utils";

const STATS = [
  { label: "Total Employees", value: "1,284", icon: Users, color: "bg-blue-50 text-blue-600", trend: "+4%", trendColor: "text-green-600" },
  { label: "Departments", value: "24", icon: LayoutGrid, color: "bg-slate-100 text-slate-600", trend: "Stable", trendColor: "text-slate-400" },
  { label: "Open Positions", value: "12", icon: Briefcase, color: "bg-amber-50 text-amber-600", trend: "Urgent", trendColor: "text-error" },
];

export function DashboardView() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Banner - Reimagined as a clean overview header */}
      <section className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface">สวัสดีตอนเช้า, ผู้บริหาร</h2>
          <p className="text-on-surface-variant font-medium text-sm">Your workforce ecosystem is performing optimally. Here is your overview for today, October 24th.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3 items-center">
            {EMPLOYEES.slice(0, 3).map((emp, i) => (
              <img key={i} src={emp.avatar} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-surface" alt={emp.name} />
            ))}
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-container transition-all">
            Manage Team
          </button>
        </div>
      </section>

      {/* Metric Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -2 }}
            className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-all group"
          >
            <p className="text-sm font-medium text-on-surface-variant mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-on-surface">{stat.value}</p>
            <div className={cn("mt-2 text-xs font-semibold flex items-center gap-1", stat.trendColor === 'text-error' ? 'text-amber-500' : 'text-emerald-600')}>
              {stat.trend === 'Stable' ? 'Monitoring active' : stat.trend + ' from last week'}
            </div>
          </motion.div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Recent Activities - Table style */}
        <section className="lg:col-span-8 bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-bold text-on-surface flex items-center gap-2">
              <History size={18} className="text-on-surface-variant/40" />
              Recent Operations
            </h3>
            <button className="text-primary text-sm font-medium hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-on-surface-variant/50 border-b border-outline-variant/30 bg-surface/50 font-bold uppercase tracking-widest">
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Activity</th>
                  <th className="px-6 py-3 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {ACTIVITIES.map((activity) => (
                  <tr key={activity.id} className="border-b border-outline-variant/30 last:border-0 hover:bg-surface transition-colors cursor-pointer group">
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        activity.type === 'payroll' ? 'bg-emerald-50 text-emerald-600' :
                        activity.type === 'celebration' ? 'bg-amber-50 text-amber-600' : 
                        'bg-blue-50 text-blue-600'
                      )}>
                        {activity.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-on-surface">{activity.title}</div>
                      <div className="text-xs text-on-surface-variant font-medium line-clamp-1">{activity.description}</div>
                    </td>
                    <td className="px-6 py-4 text-right text-on-surface-variant/60 font-medium whitespace-nowrap">
                      {activity.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* New talent section */}
        <section className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm">
            <h3 className="text-sm font-bold mb-4 text-on-surface flex gap-2 items-center">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              Infrastructure Team
            </h3>
            <div className="space-y-4">
              {EMPLOYEES.slice(1, 4).map((emp, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-lg object-cover bg-surface" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">{emp.name}</p>
                    <p className="text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-tight">{emp.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 bg-surface hover:bg-surface-container transition-colors rounded-lg text-xs font-bold text-primary border border-outline-variant">
              Copy Deployment Snippet
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 italic">
            <h3 className="text-blue-900 font-bold text-sm mb-2">Internal Advisory</h3>
            <p className="text-blue-700 text-xs leading-relaxed">
              Use Workforce Admin for one-click global distribution. Your internal build folder is ready for review in /reports.
            </p>
          </div>
        </section>
      </div>
      <footer className="pt-12 text-center">
        <p className="text-[10px] font-black text-on-surface-variant/20 uppercase tracking-[0.3em]">End of Intelligence Stream • Workforce Admin Portal v2.4.0</p>
      </footer>
    </div>
  );
}

function PlusIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

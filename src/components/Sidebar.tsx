import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Clock, CreditCard, TrendingUp, Settings, HelpCircle, Plus } from "lucide-react";
import { cn } from "@/src/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Directory", icon: Users, path: "/directory" },
  { label: "Attendance", icon: Clock, path: "/attendance" },
  { label: "Payroll", icon: CreditCard, path: "/payroll" },
  { label: "Performance", icon: TrendingUp, path: "/performance" },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-white flex flex-col p-4 space-y-2 z-40 border-r border-outline-variant">
      <div className="p-6 flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-on-surface">ExecutiveLens</span>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest px-3 mb-2 mt-4">Infrastructure</div>
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm group",
                isActive
                  ? "bg-surface-container-low text-primary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
              )}
            >
              <item.icon size={18} className={cn(isActive ? "text-primary" : "text-on-surface-variant group-hover:text-primary")} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
          <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Backend Status</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm font-semibold">Firebase Connected</span>
          </div>
        </div>
      </div>

      <footer className="space-y-1 pt-4 border-t border-outline-variant">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-medium text-sm text-left">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-medium text-sm text-left">
          <HelpCircle size={18} />
          <span>Support</span>
        </button>
      </footer>
    </aside>
  );
}

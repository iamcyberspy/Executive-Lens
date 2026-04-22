import { Search, Bell, HelpCircle } from "lucide-react";
import { EMPLOYEES } from "@/src/constants/data";

export function TopNav() {
  const admin = EMPLOYEES[2]; // Using Marcus Thorne as the "Admin" logged in person for UI

  return (
    <header className="h-16 w-full sticky top-0 z-50 bg-white flex items-center justify-between px-8 border-b border-outline-variant">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-on-surface">Project Overview</h1>
        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">Vite v6.2</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-on-surface-variant/40" size={14} />
          </span>
          <input
            className="bg-surface-container-low border-none rounded-lg py-1.5 pl-9 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
            placeholder="Search insights..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant/70 hover:bg-surface-container-low rounded-lg transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-error rounded-full border-2 border-white"></span>
          </button>
        </div>

        <div className="h-8 w-px bg-outline-variant mx-2"></div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-container transition-colors">
            Deploy Project
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-xs font-bold border border-outline-variant text-primary">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}

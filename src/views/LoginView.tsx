import { motion } from "motion/react";
import { User, Lock, Eye, ArrowRight, Check } from "lucide-react";

export function LoginView({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex items-center justify-center p-6 bg-surface-container-low">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-outline-variant"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <div className="w-6 h-6 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <h2 className="text-2xl font-bold text-on-surface">Sign in</h2>
          <p className="text-on-surface-variant font-medium text-sm mt-1">Access the admin console</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                className="block w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none" 
                placeholder="name@organization.com"
                required
                type="email"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Password</label>
              <a className="text-[10px] font-bold text-primary hover:underline transition-colors" href="#">Forgot?</a>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock size={16} className="text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                className="block w-full pl-10 pr-10 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none" 
                placeholder="••••••••••••"
                required
                type="password"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant/40 hover:text-primary transition-colors" type="button">
                <Eye size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center pt-1 px-1">
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input className="peer appearance-none w-4 h-4 border border-outline-variant rounded checked:bg-primary checked:border-primary transition-all" type="checkbox" />
                <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" strokeWidth={4} />
              </div>
              <span className="text-xs font-semibold text-on-surface-variant group-hover:text-on-surface transition-colors">Keep me signed in</span>
            </label>
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/10 hover:bg-primary-container transition-all flex items-center justify-center gap-2 text-sm mt-2"
            type="submit"
          >
            Continue
            <ArrowRight size={16} />
          </motion.button>
        </form>

        <div className="mt-8 text-center text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
          Version 6.2.0 • Build #102482
        </div>
      </motion.div>
    </div>
  );
}

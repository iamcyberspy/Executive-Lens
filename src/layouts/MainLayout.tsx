import React from "react";
import { Sidebar } from "../components/Sidebar";
import { TopNav } from "../components/TopNav";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <div className="ml-64 flex flex-col min-h-screen">
        <TopNav />
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

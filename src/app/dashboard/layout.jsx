"use client";

import { useState } from "react";
import Topbar from "../components/Dashboard/Topbar";
import Sidebar from "../components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard layout with sidebar and content area */}
      <div className="flex">
        {/* Sidebar component (positioned outside of main content) */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content area with proper spacing for sidebar */}
        <div className="flex-1 min-w-0 lg:ml-64">
          <Topbar onMenu={() => setSidebarOpen((s) => !s)} />

          {/* Dashboard content */}
          <main className="p-4 lg:p-6 space-y-4 bg-gray-50">{children}</main>
        </div>
      </div>
    </div>
  );
}

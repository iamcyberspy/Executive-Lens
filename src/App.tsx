/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LoginView } from './views/LoginView';
import { DashboardView } from './views/DashboardView';
import { DirectoryView } from './views/DirectoryView';
import { ProfileView } from './views/ProfileView';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/directory" element={<DirectoryView />} />
          <Route path="/profile/:id" element={<ProfileView />} />
          <Route path="/attendance" element={<div className="p-10 font-headline text-2xl font-bold text-primary-container">Attendance Module (Vite Setup Complete)</div>} />
          <Route path="/payroll" element={<div className="p-10 font-headline text-2xl font-bold text-primary-container">Payroll Module (Vite Setup Complete)</div>} />
          <Route path="/performance" element={<div className="p-10 font-headline text-2xl font-bold text-primary-container">Performance Module (Vite Setup Complete)</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

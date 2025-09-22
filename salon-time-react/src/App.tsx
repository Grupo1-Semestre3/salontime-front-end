import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Navbar from './components/layout/Navbar/Navbar';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Home from './pages/client/Home/Home';
import Login from './pages/client/Login/Login';
import Register from './pages/client/Register/Register';
import './styles/global.css';
import './App.css';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

// Client Layout Component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="client-layout">
      <Navbar />
      <main className="client-content">
        {children}
      </main>
    </div>
  );
};

// Admin Layout Component
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="dash_section_pai">
        <Sidebar />
        <div className="dash_section_filho">
          {children}
        </div>
      </div>
    </div>
  );
};

// Placeholder components for admin pages
const AdminCalendar = () => <div>Admin Calendar - Em desenvolvimento</div>;
const AdminServices = () => <div>Admin Services - Em desenvolvimento</div>;
const AdminUsers = () => <div>Admin Users - Em desenvolvimento</div>;
const AdminControl = () => <div>Admin Control - Em desenvolvimento</div>;
const AdminProfile = () => <div>Admin Profile - Em desenvolvimento</div>;
const Services = () => <div>Services Page - Em desenvolvimento</div>;

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <ClientLayout>
                <Home />
              </ClientLayout>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/servicos" element={
              <ClientLayout>
                <Services />
              </ClientLayout>
            } />

            {/* Protected Admin Routes */}
            <Route path="/admin/calendario" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminCalendar />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/servicos" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminServices />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/usuarios" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminUsers />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/controle" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminControl />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/perfil" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminProfile />
                </AdminLayout>
              </ProtectedRoute>
            } />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import APIEndpoints from './components/APIEndpoints';
import Authentication from './components/Authentication';
import APITester from './components/APITester';
import Documentation from './components/Documentation';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { Box } from '@mui/material';

// Add these imports
import { TaskProvider } from './context/TaskContext';
import Tasks from './components/Tasks';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}> {/* To offset the fixed Navbar */}
                      <Tasks />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}>
                      <Profile />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}>
                      <Settings />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/endpoints"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}>
                      <APIEndpoints />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}>
                      <Authentication />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/tester"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}>
                      <APITester />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/docs"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar />
                    <Box sx={{ mt: '64px' }}>
                      <Documentation />
                    </Box>
                  </Box>
                </PrivateRoute>
              }
            />
            {/* Redirect dashboard to tasks */}
            <Route path="/dashboard" element={<Navigate to="/tasks" />} />
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

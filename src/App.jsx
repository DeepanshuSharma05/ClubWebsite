import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import Home from './pages/Home';
import Events from './pages/Events';
import Management from './pages/Management';
import History from './pages/History';
// src/App.jsx
import AdminDashboard from './pages/AdminDashboard';

// Add this to your routes


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Header />
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Add this catch-all route */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/management" element={<Management />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DebugPage from './pages/DebugPage';
import ProjectPage from './pages/ProjectPage';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/debug" element={<DebugPage />} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;

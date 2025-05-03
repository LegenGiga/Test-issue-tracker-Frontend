import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.tsx';

import { BrowserRouter, Route, Routes } from 'react-router';

import Details from './pages/Profiles/details/index.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="profiles/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

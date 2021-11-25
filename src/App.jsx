import React from 'react';
import { 
    Routes,
    Route,
    Outlet,
} from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './routes/home';
import Layout from './routes/layout';
import About from './routes/about';
import Download from './routes/download';
import FAQ from './routes/faq';
import Guide from './routes/guide';
import './App.css';

function App() {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="guide" element={<Guide />} />
                <Route path="download" element={<Download />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="*" element={
                    <>
                        <h1 className="biggest-header">404</h1>
                        <span className="big-header">That page is missing... 🤒</span>
                    </>
                } />
            </Route>
        </Routes>
    </main>
  );
}

export default App;
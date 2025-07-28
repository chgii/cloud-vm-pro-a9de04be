import Layout from "./Layout.jsx";

import Home from "./Home";

import Features from "./Features";

import Pricing from "./Pricing";

import About from "./About";

import FAQ from "./FAQ";

import Terms from "./Terms";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Features: Features,
    
    Pricing: Pricing,
    
    About: About,
    
    FAQ: FAQ,
    
    Terms: Terms,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Features" element={<Features />} />
                
                <Route path="/Pricing" element={<Pricing />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/FAQ" element={<FAQ />} />
                
                <Route path="/Terms" element={<Terms />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
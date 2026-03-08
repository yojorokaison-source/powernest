/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Home from './pages/Home';
import MinecraftPlans from './pages/MinecraftPlans';
import PremiumPlans from './pages/PremiumPlans';
import VPSHosting from './pages/VPSHosting';
import Domains from './pages/Domains';
import ControlPanel from './pages/ControlPanel';
import Support from './pages/Support';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <BackgroundEffects />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minecraft-plans" element={<MinecraftPlans />} />
            <Route path="/premium-plans" element={<PremiumPlans />} />
            <Route path="/vps-hosting" element={<VPSHosting />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/control-panel" element={<ControlPanel />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './styles/App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const PanIndiaCarService = lazy(() => import('./pages/PanIndiaCarService'));
const Promise = lazy(() => import('./pages/Promise'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const Loading = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--color-navy)'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pan-india-cabs" element={<PanIndiaCarService />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/promise" element={<Promise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

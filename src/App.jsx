import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import ChatWidget from './components/chat/ChatWidget';
import './styles/App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
// REMOVED: Services page merged into About page
// const Services = lazy(() => import('./pages/Services'));
const CorporateEvents = lazy(() => import('./pages/CorporateEvents'));
const FlightBooking = lazy(() => import('./pages/FlightBooking'));
const Hotels = lazy(() => import('./pages/Hotels'));
const CarRental = lazy(() => import('./pages/CarRental'));
const Visa = lazy(() => import('./pages/Visa'));
const Promise = lazy(() => import('./pages/Promise'));
// DEPRECATED: Destinations page temporarily disabled
const Terms = lazy(() => import('./pages/Terms'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

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
      <ScrollToTop />
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* REMOVED: Services page merged into About page
              <Route path="/services" element={<Services />} />
              */}
              <Route path="/corporate-events" element={<CorporateEvents />} />
              <Route path="/flight-booking" element={<FlightBooking />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/car-rental" element={<CarRental />} />
              <Route path="/visa" element={<Visa />} />
              {/* DEPRECATED: Destinations page temporarily disabled
              <Route path="/destinations" element={<Destinations />} />
              */}
              <Route path="/promise" element={<Promise />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
      <ChatWidget />
    </Router>
  );
}

export default App;

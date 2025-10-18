
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { useAnalytics } from './hooks/useAnalytics';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const PageTracker: React.FC = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  return null;
};

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
);


function App() {
  return (
    <HashRouter>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPage />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
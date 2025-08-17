// src/components/FirebaseAnalyticsProvider.tsx
'use client';
import React, { useEffect } from 'react';
import { initializeFirebaseAnalytics } from '@/lib/firebase'; // Adjust path if needed

interface FirebaseAnalyticsProviderProps {
  children: React.ReactNode;
}

const FirebaseAnalyticsProvider: React.FC<FirebaseAnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Call the initialization function when this component mounts on the client
    initializeFirebaseAnalytics();
  }, []); // Empty dependency array means this runs once on mount

  return <>{children}</>;
};

export default FirebaseAnalyticsProvider;
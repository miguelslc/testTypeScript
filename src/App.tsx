import React, { Suspense } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={'Loading...'}>
          <AppRouter></AppRouter>
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;

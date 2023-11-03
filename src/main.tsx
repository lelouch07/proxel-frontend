import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './context/authContext.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <CookiesProvider><App /></CookiesProvider>
    </AuthProvider>
    </React.StrictMode>
)

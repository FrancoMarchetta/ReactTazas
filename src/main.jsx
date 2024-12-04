import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './assets/css/styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Auth0Provider
      domain="dev-6vw3dzx40qctwb6j.us.auth0.com" // Reemplaza con tu dominio de Auth0
      clientId="PszL2vCdrtUPWUZsGoAashi88q0tEDJr" // Reemplaza con tu clientId
      authorizationParams={{
        redirect_uri: window.location.origin, // Configuración para redirección tras el login
      }}
      useRefreshTokens={true} // Esto habilita la refresco de tokens si es necesario
      cacheLocation="localstorage" // Asegura que la sesión se mantenga entre recargas de página
    >
 <App />
    </Auth0Provider>
   
  </StrictMode>,
);

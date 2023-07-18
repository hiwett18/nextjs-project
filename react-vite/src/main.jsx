import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FavoritesContextProvider } from './store/favorites-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </FavoritesContextProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { IdeasProvider } from './lib/Context/ideas.jsx'
import { UserProvider } from './lib/Context/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <React.StrictMode>
    <UserProvider>
      <IdeasProvider>
        <App />
      </IdeasProvider>
    </UserProvider>
  </React.StrictMode>,
  </React.StrictMode>,
)

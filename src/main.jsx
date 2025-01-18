import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import { NavigationProvider } from './context/navigation.jsx'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </Provider>
)

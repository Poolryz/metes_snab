import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './components/AppComponent/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
)

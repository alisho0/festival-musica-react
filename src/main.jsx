import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import FestivalApp from './FestivalApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FestivalApp/>
  </StrictMode>,
)

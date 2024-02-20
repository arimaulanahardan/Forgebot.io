import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Terms from './components/terms/index.tsx'
import Navbar from './components/Navbar.tsx'
import styles from './styles'
import Footer from './components/Footer.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/term&condition',
    element: <Terms />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-primary w-full'>
      <div className={` ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <RouterProvider router={router} />
              <Footer/>
            </div>
          </div>
        </div>
  </React.StrictMode >,
)

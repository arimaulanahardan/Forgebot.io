import React from 'react'
import styles from './styles'
import {
  Navbar,
  Hero,
  Count,
  Benefit,
  Feature,
  CTA,
  Testimonial,
  Footer
} from "./components"


function App() {
  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Count />
          <Benefit />
          <Feature />
          <Testimonial />
          <CTA/>
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import styles from './styles'
import {
  Navbar,
  Hero,
  Count
} from "./components"


function App() {
  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Count />
        </div>
      </div>
    </div>
  )
}

export default App

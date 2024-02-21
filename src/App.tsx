import styles from './styles'
import {
  Hero,
  Count,
  Benefit,
  Feature,
  CTA,
  Testimonial
} from "./components"


function App() {
  return (
      <div className={`bg-primary ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Count />
          <Benefit />
          <Feature />
          <Testimonial />
          <CTA/>
        </div>
      </div>
  )
}

export default App

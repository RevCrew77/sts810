import React from 'react'
import sts810 from '../../../pictures/sts810.jpg'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="wrapper">
      <img src={sts810} alt="machine" />
      <p className="paragraph">Изчисляване параметрите за етикираща машина STS 810</p>

      <section className="buttons">
        <Link to="/labeling-machines/STS810/1-label" className="label1">
          1 етикет
        </Link>
        <Link to="/labeling-machines/STS810/2-labels" className="label2">
          2 етикета
        </Link>
      </section>
    </div>
  )
}

export default Home

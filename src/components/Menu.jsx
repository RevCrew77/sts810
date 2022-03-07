import React from 'react'
import labelmachine from '../pictures/labeling-machine-STS808.png'
import dosingmachine from '../pictures/dozirashti.jpg'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
      <Link to="/labeling-machines" className="labelMach">
        <span className="title">
          <h3>Етикиращи машини</h3>
        </span>
        <span className="imgWrap">
          <img src={labelmachine} alt="lalbel-machine" className='image' />
        </span>
      </Link>

      <Link to="/dosing-machines" className="labelMach">
        <span className="title">
          <h3>Дозиращи машини</h3>
        </span>
        <span className="imgWrap">
          <img src={dosingmachine} alt="dosing-machine" className='image' />
        </span>
      </Link>
    </div>
  )
}

export default Menu

import React from 'react'
import { Link } from 'react-router-dom'
import dosing from '../../pictures/dozirashti.jpg'
import './DosingMachines.css'

function DosingMachines() {
  return (
    <div className="dosing">
      <div className="sts809">
        <Link to="#" className='linkTo'>
          <h3>
            Дозираща машина <br />
            <strong>STS809</strong>
          </h3>
          <span className='imgWraper'>
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
      <div className="sts809">
        <Link to="#" className='linkTo'>
          <h3>
            Дозираща машина <br />
            <strong>STS812</strong>
          </h3>
          <span className='imgWraper'>
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
      <div className="sts809">
        <Link to="#" className='linkTo'>
          <h3>
            Дозираща машина <br />
            <strong>STS811G</strong>
          </h3>
          <span className='imgWraper'>
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
      <div className="sts809">
        <Link to="#" className='linkTo'>
          <h3>
            Дозираща машина <br />
            <strong>STS813G</strong>
          </h3>
          <span className='imgWraper'>
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default DosingMachines

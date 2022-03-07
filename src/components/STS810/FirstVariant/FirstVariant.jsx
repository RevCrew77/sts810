import { Alert } from '@mui/material'
import React, { useState, useEffect } from 'react'
import onelabel from '../../../pictures/sts810-1label.png'
import './FirstVariant.css'
import CountUp from 'react-countup'

function FirstVariant() {
  const [first, setFirst] = useState('')
  const [empty, setEmpty] = useState('')

  const [resultA, setResultA] = useState('')

  useEffect(() => {
    const _first = +first
    const _empty = +empty

    if (_empty !== 0 && _first !== 0) {
      let x1 = 64 - _first - _empty / 2
      let offset = 0

      if (x1 < 0) {
        offset = 0
      } else if (x1 === 0) {
        offset = 0
      } else {
        let x2 = x1 - _first - _empty

        if (x2 < 0) {
          offset = x1
        } else if (x2 === 0) {
          offset = 1
        } else {
          let x3 = x2 - _first - _empty

          if (x3 < 0) {
            offset = x2
          } else if (x3 === 0) {
            offset = 1
          } else {
            let x4 = x3 - _first - _empty

            if (x4 < 0) {
              offset = x3
            } else if (x4 === 0) {
              offset = 1
            } else {
              offset = x4
            }
          }
        }
      }
      if (offset === 0) {
        offset = 1
      }
      

      setResultA(offset)
    }
  }, [first, empty])

  return (
    <div className="calc">
      <form action="submit" className="forma">
        <img src={onelabel} alt="label" className="imageLabelA" />
        <div className="divDescr">
          <span className="descrA">Лента с етикети</span>
          <span className="descr1A">Етикет преден</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L0 =</span>
            <div className="labelInpt">
              <label htmlFor="l0">Процеп между етикетите</label>
              <input name="l0" className="a" onChange={(e) => setEmpty(e.target.value)} value={empty} type="number" />
              {/* <Alert severity='info' className='alrt'>
                Трябва да е { '>=' } 64мм
              </Alert> */}
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L =&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="l">Дължина на етикетите</label>
              <input name="l" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
      </form>
      <div className="result">
        <div className="offset">
          <span className="offsetres">Офсет стоп </span>
          <span className="offres">
            <CountUp end={resultA} duration={1} /> mm
          </span>
        </div>
      </div>
    </div>
  )
}

export default FirstVariant

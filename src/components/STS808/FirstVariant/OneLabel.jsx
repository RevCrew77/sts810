import React, { useState, useEffect } from 'react'
import { Alert } from '@mui/material'
import CountUp from 'react-countup'
import onelabel from '../../../pictures/sts808-1label.png'
import './OneLabel.css'
import { toast } from 'react-toastify'

function OneLabel() {
  const [empty, setEmpty] = useState(0)
  const [first, setFirst] = useState(0)
  const [diameter, setDiameter] = useState(0)

  const [resultA, setResultA] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const _empty = +empty
    const _first = +first
    const _diameter = +diameter

    if (_empty !== 0 && _first !== 0 && _diameter !== 0) {
      let x1 = 100 - _first - _empty / 2
      let offset = 0
      if (x1 < 0) {
        offset = 100
      } else if (x1 === 0) {
        offset = 1
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
      setResultA(offset)
      let T = (_diameter * 3.1416) / 88.2

      setTime((Number(Math.round(parseFloat(T + 'e' + 2)) + 'e-' + 2)).toFixed(2))
    }
  }, [first, diameter, empty])

  return (
    <div className="calcS">
      <form action="submit" className="forma">
        <img src={onelabel} alt="label" className="imageLabel" />
        <div className="divDescr">
          <span className="descr">Лента с етикети</span>
          <span className="descr1">Етикет</span>
          <span className="descr2">Съд</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L0 = </span>
            <div className="labelInpt">
              <label htmlFor="l0">Процеп между етикетите</label>
              <input
                name="l0"
                min={2}
                max={60}
                className="a"
                onChange={(e) => setEmpty(e.target.value)}
                value={empty}
                type="number"
              />
              <Alert severity="info" className="alrt">
                2 {'<'} L0 {'<'} 60мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L =&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="L">Дължина на етикетите</label>
              <input name="L" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
              <Alert severity="info" className="alrt">
                20 {'<'} L {'<'} 600
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">D =&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="D">Диаметър на съда</label>
              <input
                name="D"
                className="a"
                onChange={(e) => setDiameter(e.target.value)}
                value={diameter}
                type="number"
              />
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
      </form>
      <div className="result">
        <div className="offset">
          <span className="offsetres">Офсет стоп</span>
          <span className="offres">
            <CountUp end={resultA} duration={1} /> mm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">
            Време движение <br /> (Препоръчително)
          </span>
          <span className="offres">
            &nbsp;
            <CountUp end={time} duration={1} /> s
          </span>
        </div>
      </div>
    </div>
  )
}

export default OneLabel

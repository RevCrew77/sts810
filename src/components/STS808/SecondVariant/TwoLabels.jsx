import { Alert } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import twolabel from '../../../pictures/sts808-2labels.png'
import './TwoLabels.css'
import CountUp from 'react-countup'

function TwoLabels() {
  const [first, setFirst] = useState('')
  const [empty, setEmpty] = useState('')
  const [second, setSecond] = useState('')
  const [diameter, setDiameter] = useState('')

  const [resultA, setResultA] = useState('')
  const [resultB, setResultB] = useState('')
  const [distance, setDistance] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    const _first = +first
    const _empty = +empty
    const _second = +second
    const _diameter = +diameter

    if (_first !== 0 && _empty !== 0 && _second !== 0 && _diameter !== 0) {
      let x1 = 100 - _second - _empty / 2
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
          let x3 = x2 - _second - _empty
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
      if (offset === 100) {
        offset = 97
      }
      setResultA(offset)

      let y1 = 100 - _first - _empty / 2
      let offset2 = 0

      if (y1 < 0) {
        offset2 = 100
      } else if (y1 === 0) {
        offset2 = 1
      } else {
        let y2 = y1 - _second - _empty
        if (y2 < 0) {
          offset2 = y1
        } else if (y2 === 0) {
          offset2 = 1
        } else {
          let y3 = y2 - _first - _empty
          if (y3 < 0) {
            offset2 = y2
          } else if (y3 === 0) {
            offset2 = 1
          } else {
            let y4 = y3 - _second - _empty
            if (y4 < 0) {
              offset2 = y3
            } else if (y4 === 0) {
              offset2 = 1
            } else {
              offset2 = y4
            }
          }
        }
      }

      if (offset2 === 0) {
        offset2 = 1;
      }
      if (_second === 100) {
        offset2 = 97;
      }

      setResultB(offset2)

      let l3 = (_diameter * 3.1416 - _first - _second) / 20
      
      setDistance(l3.toFixed(2))

      let T = (_diameter * 3.1416) / 88.2

      setTime(Number.parseFloat(T).toFixed(2))
    }
  }, [first, second, diameter, empty])

  return (
    <div className="calcS">
      <form action="submit" className="forma">
        <img src={twolabel} alt="label" className="imageLabelCS" />
        <div className="divDescr">
          <span className="descrB">Лента с етикети</span>
          <span className="descr1B">Етикет преден</span>
          <span className="descr2B">Етикет заден</span>
          <span className="descr3B">Съд</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L1 =</span>
            <div className="labelInpt">
              <label htmlFor="l1">Дължина преден етикет</label>
              <input name="l1" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
              <Alert severity="info" className="alrt">
                Трябва да е {'<'} 64мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L0 =</span>
            <div className="labelInpt">
              <label htmlFor="l0">Процеп между етикетите</label>
              <input name="l0" className="a" onChange={(e) => setEmpty(e.target.value)} value={empty} type="number" />
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L2 =</span>
            <div className="labelInpt">
              <label htmlFor="l2">Дължина заден етикет</label>
              <input name="l2" className="a" onChange={(e) => setSecond(e.target.value)} value={second} type="number" />
              <Alert severity="info" className="alrt">
                Трябва да е {'>='} 64мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">D =&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="D">Диаметър на съда</label>
              <input name="D" className="a" onChange={(e) => setDiameter(e.target.value)} value={diameter} type="number" />
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
      </form>
      <div className="result">
        <div className="offset">
          <span className="offsetres">Офсет стоп 1</span>
          <span className="offres">
            <CountUp end={resultA} duration={1} />
            mm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">Офсет стоп 2</span>
          <span className="offres">
            {' '}
            &nbsp;
            <CountUp end={resultB} duration={0.8} /> mm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">Разстояние между етикетите</span>
          <span className="offres">
            {' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CountUp end={distance} duration={0.8} /> cm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">
            Време движение <br /> (Препоръчително)
          </span>
          <span className="offres">
            {' '}
            &nbsp;&nbsp;
            <CountUp end={time} duration={0.8} /> s
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default TwoLabels

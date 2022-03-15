import { Alert } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import twolabel from '../../../pictures/sts808-2labels.png'
import './TwoLabels.css'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

function TwoLabels() {
  const [first, setFirst] = useState('')
  const [empty, setEmpty] = useState('')
  const [second, setSecond] = useState('')
  const [diameter, setDiameter] = useState('')

  const [resultA, setResultA] = useState('')
  const [resultB, setResultB] = useState('')
  const [distance, setDistance] = useState(Number)
  const [time, setTime] = useState(Number)

  const [open, setOpen] = useState({ empty: false, first: false, second: false, diameter: false })

  useEffect(() => {
    const _first = +first
    const _empty = +empty
    const _second = +second
    const _diameter = +diameter

    if (_empty && !(_empty > 2.5 && _empty < 60)) setOpen((open) => ({ ...open, empty: true }))
    else setOpen((open) => ({ ...open, empty: false }))

    if (_first && !(_first > 25 && _first < 520)) setOpen((open) => ({ ...open, first: true }))
    else setOpen((open) => ({ ...open, first: false }))

    if (_second && !(_second > 25 && _second < 520)) setOpen((open) => ({ ...open, second: true }))
    else setOpen((open) => ({ ...open, second: false }))

    if (_diameter && !(_diameter > 25 && _diameter < 160)) setOpen((open) => ({ ...open, diameter: true }))
    else setOpen((open) => ({ ...open, diameter: false }))

    // if ((_first + _second) < 520) setOpen((open) => ({ ...open, first: true, second: true }))
    // else setOpen((open) => ({ ...open, first: false, second: false }))

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
      if (_first === 100) {
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
        offset2 = 1
      }

      setResultB(offset2)

      let l3 = (_diameter * 3.1416 - _first - _second) / 20

      setDistance(l3)

      let T = (_diameter * 3.1416) / 88.2
      setTime(T)
    }
  }, [first, second, diameter, empty])

  const { t } = useTranslation()

  return (
    <div className="calcS">
      <form action="submit" className="forma">
        <img src={twolabel} alt="label" className="imageLabelCS" />
        <div className="divDescr">
          <span className="descrB">{t('ЛентаСЕтикети')}</span>
          <span className="descr1B">{t('ЕтикетПреден')}</span>
          <span className="descr2B">{t('ЗаденЕтикет')}</span>
          <span className="descr3B">{t('Съд')}</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L1 =</span>
            <div className="labelInpt">
              <label htmlFor="l1">{t('ДължинаПреденЕтикет')}</label>
              <input name="l1" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
              {(open.first && (
                <Alert severity="error" variant="filled" className="alrt">
                  25 {'<'} L2 {'<'} 520mm
                </Alert>
              )) || open.first && (
                <Alert severity="error" variant="filled" className="alrt">
                  L1 + L2 {'<'} 520mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L0 =</span>
            <div className="labelInpt">
              <label htmlFor="l0">{t('ПроцепМуЕтикет')}</label>
              <input name="l0" className="a" onChange={(e) => setEmpty(e.target.value)} value={empty} type="number" />
              {open.empty && (
                <Alert severity="error" variant="filled" className="alrt">
                  2.5 {'<'} L0 {'<'} 60mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L2 =</span>
            <div className="labelInpt">
              <label htmlFor="l2">{t('ДължинаЗаденЕтикет')}</label>
              <input name="l2" className="a" onChange={(e) => setSecond(e.target.value)} value={second} type="number" />
              {(open.second && (
                <Alert severity="error" variant="filled" className="alrt">
                  25 {'<'} L2 {'<'} 520mm
                </Alert>
              )) || open.second && (
                <Alert severity="error" variant="filled" className="alrt">
                  L1 + L2 {'<'} 520mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">D =&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="D">{t('ДиаметърСъд')}</label>
              <input
                name="D"
                className="a"
                onChange={(e) => setDiameter(e.target.value)}
                value={diameter}
                type="number"
              />
              {open.diameter && (
                <Alert severity="error" variant="filled" className="alrt">
                  25 {'<'} D {'<'} 160mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
      </form>
      <div className="result">
        <div className="offset">
          <span className="offsetres">{t('ОфсетСтоп')}</span>
          <span className="offres">
            <CountUp end={resultA} duration={1} /> mm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">{t('ОфсетСтопБ')}</span>
          <span className="offres">
            {' '}
            &nbsp;
            <CountUp end={resultB} duration={0.8} /> mm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">{t('РазстояниеМуЕтикети')}</span>
          <span className="offres">
            {' '}
            &nbsp;&nbsp;&nbsp;
            <CountUp end={distance} decimals={2} duration={0.8} /> cm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">
            <Trans components={{ br: <br /> }}>{t('Време')}</Trans>
          </span>
          <span className="offres">
            {' '}
            &nbsp;&nbsp;
            <CountUp end={time} decimals={2} duration={0.8} /> s
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default TwoLabels

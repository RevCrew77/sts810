import { Alert, Snackbar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import onelabel from '../../../pictures/sts810-1label.png'
import './OneLbl.css'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

function OneLbl() {
  const [first, setFirst] = useState('')
  const [empty, setEmpty] = useState('')

  const [resultA, setResultA] = useState('')
  const [open, setOpen] = useState({ empty: false, first: false })


  useEffect(() => {
    const _first = +first
    const _empty = +empty

    if (_empty && !(_empty > 2.5 && _empty < 60)) setOpen((open) => ({ ...open, empty: true }))
    else setOpen((open) => ({ ...open, empty: false }))

    if (_first && !(_first > 25 && _first < 120))  setOpen((open) => ({ ...open, first: true }))
    else setOpen((open) => ({ ...open, first: false }))

    if (_empty !== 0 && _first !== 0) {
      let x1 = 100 - _first - _empty / 2
      let offset = 0

      if (x1 < 0) {
        offset = 64
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

      if (_first === 100) {
        offset = 97
      }

      setResultA(offset)
    }
  }, [first, empty])

  const { t } = useTranslation()

  return (
    <div className="calc">
      <form action="submit" className="forma">
        <img src={onelabel} alt="label" className="imageLabelA" />
        <div className="divDescr">
          <span className="descrA">{t('ЛентаСЕтикети')}</span>
          <span className="descr1A">{t('ЕтикетПреден')}</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L0&nbsp;=</span>
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
            <span className="label">L&nbsp;=&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="l">{t('Дължина')}</label>
              <input name="l" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
              {open.first && (
                <Alert severity="error" variant="filled" className="alrt">
                  25 {'<'} L {'<'} 120mm
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
      </div>
    </div>
  )
}

export default OneLbl

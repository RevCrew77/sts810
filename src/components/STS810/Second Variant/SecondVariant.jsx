import { Alert } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import twolabel from '../../../pictures/sts810-2labels.png'
import './SecondVariant.css'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

function SecondVariant() {
  const [first, setFirst] = useState('')
  const [empty, setEmpty] = useState('')
  const [second, setSecond] = useState('')

  const [resultA, setResultA] = useState('')
  const [resultB, setResultB] = useState('')

  useEffect(() => {
    const _first = +first || 0
    const _second = +second || 0
    const _empty = +empty || 0

    if (_first < 64 && _second < 64) {
      if (_first + _second + _empty >= 67) {
        setResultA(64 - (_second + _empty / 2))
        setResultB(_second + _empty / 2)
      } else if (61 < _first + _second + _empty < 67) {
        setResultA(_empty / 2)
        setResultB(_second + _empty / 2)
      } else if (_first + _second + _empty <= 61) {
        setResultA(64 - (_first + _second + (3 * _empty) / 2))
        if (resultA < 0) {
          setResultA(1)
        }
        setResultB(_second + _empty / 2)
      }
    }

    if (_first >= 64) {
      setResultA(64 + _empty / 2)
      setResultB(_second + _empty / 2)
    } else if (_first < 64 && _second >= 64) {
      setResultA(64 + _empty / 2)
      setResultB(_first + _empty / 2)
      toast.info('Машината трябва да стартира с по-дългия етикет', { position: toast.POSITION.TOP_CENTER })
    }
  }, [first, second, empty])

  const { t } = useTranslation()

  return (
    <div className="calc">
      <form action="submit" className="forma">
        <img src={twolabel} alt="label" className="imageLabelC" />
        <div className="divDescr">
          <span className="descrBB">{t('ЛентаСЕтикети')}</span>
          <span className="descr1BB">{t('ЕтикетПреден')}</span>
          <span className="descr2BB">{t('ЗаденЕтикет')}</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L1 =</span>
            <div className="labelInpt">
              <label htmlFor="l1">{t('ДължинаПреденЕтикет')}</label>
              <input name="l1" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
              <Alert severity="info" className="alrt">
                25 {'<'} L0 {'<'} 210мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L0 =</span>
            <div className="labelInpt">
              <label htmlFor="l0">{t('ПроцепМуЕтикет')}</label>
              <input name="l0" className="a" onChange={(e) => setEmpty(e.target.value)} value={empty} type="number" />
              <Alert severity="info" className="alrt">
                2.5 {'<'} L0 {'<'} 60мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L2 =</span>
            <div className="labelInpt">
              <label htmlFor="l2">{t('ДължинаЗаденЕтикет')}</label>
              <input name="l2" className="a" onChange={(e) => setSecond(e.target.value)} value={second} type="number" />
              <Alert severity="info" className="alrt">
                25 {'<'} L2 {'<'} 210мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
      </form>
      <div className="result">
        <div className="offset">
          <span className="offsetres">{t('ОфсетСтоп1')}</span>
          <span className="offres">
            <CountUp end={resultA} duration={1} />
            mm
          </span>
        </div>
        <div className="offset">
          <span className="offsetres">{t('ОфсетСтопБ')}</span>
          <span className="offres">
            {' '}
            <CountUp end={resultB} duration={0.8} /> mm
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SecondVariant

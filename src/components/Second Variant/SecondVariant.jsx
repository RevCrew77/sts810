import { Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import twolabel from '../../pictures/sts810-2labels.png';
import "../Second Variant/SecondVariant.css";
import CountUp from 'react-countup';

function SecondVariant() {
  const [first, setFirst] = useState("");
  const [empty, setEmpty] = useState("");
  const [second, setSecond] = useState("");

  const [resultA, setResultA] = useState("");
  const [resultB, setResultB] = useState("");

  useEffect(() => {
    const _first = +first || 0;
    const _second = +second || 0;
    const _empty = +empty || 0;

    const _resultA = 64 + _empty / 2;
    const _resultB = _first + _empty / 2;

    if (_first < 64 && _resultA){
      setResultA(_resultA);
    } else{
      setResultA("");
    }

    if(_second >= 64 && _resultB){
      setResultB(_resultB)
    } else{
      setResultB("")
    }

    
  }, [first, second, empty]);

  useEffect(() =>{
    toast.info('Машината ще стартира с по-дългия етикет', {position: toast.POSITION.TOP_CENTER});
  },[])

  // const notify = () => 

  return (
    <div className="calc">
      <form action="submit" className="forma">
        <img src={twolabel} alt="label" className='imageLabel' /> 
        <div className="divDescr">
          <span className="descr">Лента с етикети</span>
          <span className="descr1">Етикет преден</span>
          <span className="descr2">Етикет заден</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L1 =</span>
            <div className="labelInpt">
              <label htmlFor="l1">Дължина преден етикет</label>
              <input
                name="l1"
                className="a"
                onChange={(e) => setFirst(e.target.value)}
                value={first}
              />
              <Alert severity='info' className='alrt'>
              Трябва да е { '<' } 64мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L0 =</span>
            <div className="labelInpt">
              <label htmlFor="l0">Процеп между етикетите</label>
              <input
                name="l0"
                className="a"
                onChange={(e) => setEmpty(e.target.value)}
                value={empty}
                type="number"
              />
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L2 =</span>
            <div className="labelInpt">
              <label htmlFor="l2">Дължина заден етикет</label>
              <input
                name="l2"
                className="a"
                onChange={(e) => setSecond(e.target.value)}
                value={second}
              />
            <Alert severity='info' className='alrt'>
            Трябва да е { '>=' } 64мм
            </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
      </form>
      <div className="result">
        <div className="offset">
          <span className="offsetres">Офсет стоп 1</span>
          <span className="offres"><CountUp end={resultA} duration={1} />mm</span>
        </div>
        <div className="offset">
          <span className="offsetres">Офсет стоп 2</span>
          <span className="offres"> <CountUp end={resultB} duration={0.8} />  mm</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SecondVariant
import { Alert, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import twolabel from '../../../pictures/sts810-2labels.png';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import './ThirdVariant.css';

function ThirdVariant() {
    const [first, setFirst] = useState("");
    const [empty, setEmpty] = useState("");
    const [second, setSecond] = useState("");
  
    const [resultA, setResultA] = useState("");
    const [resultB, setResultB] = useState("");
  
    const [open, setOpen] = React.useState(true);


    useEffect(() => {
      const _first = +first || 0;
      const _second = +second || 0;
      const _empty = +empty || 0;
  
      const _resultA = 64 - ( _second + _empty / 2);
      const _resultB = _second + _empty / 2;
  
      if (_first + _second + _empty >= 67 && _resultA){
        setResultA(_resultA);
      } else{
        setResultA("");
      }
  
      if(_resultB && _resultA){
        setResultB(_resultB)
      } else{
        setResultB("")
      }
  
      
    }, [first, second, empty]);

      // if(resultA === resultB)
      // useEffect(() => {
      //   toast.info('Въведеното да е  L1 + L2 + L0 >= 67', {position: toast.POSITION.BOTTOM_CENTER});
      // }, [])

      useEffect(() =>{
          if(resultA !== resultB){
            toast.info('Машината ще стартира с по-дългия етикет', {position: toast.POSITION.TOP_CENTER});
            console.log("heyyy"); 
            
          }else{
          }
        },[second])
  

    return (
      <div className="calc">
        <ToastContainer />
        <form action="submit" className="forma">
          <img src={twolabel} alt="label" className='imageLabelC' /> 
          <div className="divDescr">
            <span className="descrB">Лента с етикети</span>
            <span className="descr1B">Етикет преден</span>
            <span className="descr2B">Етикет заден</span>
          </div>
          <div className="labelcontainer">
            <Stack sx={{ width: '100%' }} spacing={2}>
                {open && <Alert severity='info' onClose={() => { setOpen(false) }}>Трябва Преден етикет + Заден етикет + Процеп {'>='} 67</Alert>  }     
            </Stack>
            <div className="labelcalc">
              <span className="label">L1 =</span>
              <div className="labelInpt">
                <label htmlFor="l1">Дължина преден етикет</label>
                <input
                  name="l1"
                  className="a"
                  onChange={(e) => setFirst(e.target.value)}
                  value={first}
                  type="number"
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
                  type="number"
  
                />
              <Alert severity='info' className='alrt'>
              Трябва да е { '<' } 64мм
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
    
        <section className="buttonsCC">
          <Link to="#" className='buttonsC'>Вариант 1</Link>
          <Link to="#" className='buttonsC'>Вариант 2</Link>
        </section>
      </div>
    );
  }
  
  export default ThirdVariant
import React, {useState, useEffect} from 'react';
import { Alert } from '@mui/material';
import CountUp from 'react-countup';
import onelabel from "../../../pictures/sts808-1label.png";
import "./OneLabel.css"


function OneLabel() {
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
    const _resultB = _second + _empty / 2;

    if (_first >= 64 && _resultA){
      setResultA(_resultA);
    } else{
     setResultA("");
    }
    if (_resultB){
      setResultB(_resultB);
    } else{
      setResultB("");
    } 
  }, [first, second, empty]);

  return (
    <div className="calcS">
      <form action="submit" className="forma">
        <img src={onelabel} alt="label" className='imageLabel' /> 
        <div className="divDescr">
          <span className="descr">Лента с етикети</span>
          <span className="descr1">Етикет</span>
          <span className="descr2">Съд</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L0 =  </span>
            <div className="labelInpt">
              <label htmlFor="l0">Процеп между етикетите</label>
              <input
                name="l0"
                className="a"
                onChange={(e) => setFirst(e.target.value)}
                value={first}
                type="number"
                />
              <Alert severity='info' className='alrt'>
                2 { '<' }  L1 { '<' } 60мм
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L = </span>
            <div className="labelInpt">
              <label htmlFor="L">Дължина на етикетите</label>
              <input
                name="L"
                className="a"
                onChange={(e) => setEmpty(e.target.value)}
                value={empty}
                type="number"
              />
              <Alert severity='info' className='alrt'>
                20 { '<' } L1 { '<' } 600
              </Alert>
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">D =</span>
            <div className="labelInpt">
              <label htmlFor="D">Диаметър на съда</label>
              <input
                name="D"
                className="a"
                onChange={(e) => setSecond(e.target.value)}
                value={second}
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
          <span className="offres"><CountUp end={resultA} duration={1} /> mm</span>
        </div>
        <div className="offset">
          <span className="offsetres">Време движение <br /> (Препоръчително)</span>
          <span className="offres"><CountUp end={resultB} duration={1} /> mm</span>
        </div>
      </div>
    </div>
  )
}

export default OneLabel
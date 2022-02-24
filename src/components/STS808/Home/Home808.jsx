import React from 'react';
import sts808 from "../../../pictures/labeling-machine-STS808.png";
import "./Home808.css"
import { Link } from 'react-router-dom';


function Home808() {
  return (
      
    <div className="wrapper">
       <img src={sts808} alt="machine" /> 
       <p className="paragraph">Изчисляване параметрите за етикираща машина STS 810</p>

       <section className="buttons">
       <Link to="/labeling-machines/STS808/variant-a" className="label1">1 етикет</Link>
       <Link to="/variant-b" className="label2">2 етикета</Link>
       </section>


      </div>
  )
}

export default Home808
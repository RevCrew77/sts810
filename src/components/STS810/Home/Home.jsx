import React from 'react';
import sts810 from "../../../pictures/sts810.jpg";
import "./Home.css"
import { Link } from 'react-router-dom';


function Home() {
  return (
      
    <div className="wrapper">
       <img src={sts810} alt="machine" /> 
       <p className="paragraph">Изчисляване параметрите за етикираща машина STS 810</p>

       <section className="buttons">
       <Link to="/labeling-machines/STS810/variant-a" className="label1">1-ви вариант</Link>
       <Link to="/labeling-machines/STS810/variant-b" className="label2">2-ри вариант</Link>
       <Link to="/labeling-machines/STS810/variant-c" className="label3">3-ти вариант</Link>
       </section>


      </div>
  )
}

export default Home
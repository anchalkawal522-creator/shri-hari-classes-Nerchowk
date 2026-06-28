import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className='hero'>

        <div className="container">
            <div className="left">
                <div className="content-hero">

                    <h1>sri hari<br /><span className='name-i'>classes</span></h1>
                    <p className="goal">learn <span className='list-h'> • </span> achive<span> • </span> succeed</p>
                    <p className="peh-h">Quality education, experienced teachers and a supportive environment to help students achieve their dream</p>
                     <div className="btn-hero">
                                 <Link to="/courses">
 <button className="btn-1">explore courses</button></Link>
                                  <Link to="/contact">
<button className="btn-1">Contact us</button></Link>
                     </div>
                </div>
                </div>
               

        </div>
    </div>
  )
}

export default Hero;
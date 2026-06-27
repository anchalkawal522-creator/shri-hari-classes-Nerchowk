import { IoIosPeople } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuMonitorCheck } from "react-icons/lu";
import { AiFillSafetyCertificate } from "react-icons/ai";
import "./twhy.css"
export default function whyustop() {
  return (
    <div className='why-us'>
      <div className="container">
        <div className="heading">
                  <h1>---why choose shri hari classes---</h1>

        </div>
         <div className="bottom-hero">
                    <div className="box-hero">
                        <h1><IoIosPeople className="text-violet-600"/></h1>                     
                          <h2>experienced faculities</h2>
                    </div>
                    <div className="box-hero">
                       <h1>     <FaBook  className="text-violet-600"/></h1>    

                        <h2>Quility education</h2>
                    </div>
                    <div className="box-hero">
                        <h1> <PiTargetBold className="text-violet-600" /></h1>  

                        <h2>personalized attention</h2>
                    </div>
                    <div className="box-hero">
                      <h1>  <LuChartNoAxesCombined className="text-violet-600" /></h1>  

                        <h2>best result</h2>
                    </div>
                    <div className="box-hero">
                       <h1>  <LuMonitorCheck className="text-violet-600" /></h1>  

                        <h2>modern classroom</h2>
                    </div>
                    <div className="box-hero">
                      <h1>   <AiFillSafetyCertificate className="text-violet-600" /></h1>  
                        <h2>safe & friendly environment</h2>
                    </div>
                </div>
          </div>  
    </div>
  )
}

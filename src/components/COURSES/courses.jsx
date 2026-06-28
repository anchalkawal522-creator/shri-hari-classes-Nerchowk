import { CgGoogleTasks } from "react-icons/cg";
import { HiOutlineBookOpen } from "react-icons/hi";

import "./cor.css";

import {
  FaUserDoctor,
  FaRocket,
  FaFlask,
  FaAtom,
  FaDna,
  FaVial,
  FaBullseye,
  FaClipboardCheck,
  FaFire,
  FaCrosshairs,
} from "react-icons/fa6";

import { FaShieldAlt } from "react-icons/fa";

import { IoSettingsOutline } from "react-icons/io5";

import { TiHomeOutline } from "react-icons/ti";

import { MdOutlineGppGood } from "react-icons/md";

import { GiThreeLeaves, GiAnchor } from "react-icons/gi";

import { TbNurse } from "react-icons/tb";

import {
  IoLocationOutline,
  IoCallOutline,
  IoNavigateOutline,

  IoTimeOutline,
} from "react-icons/io5";


  function Courses() {
  
    const openWhatsApp = () => {
    const phoneNumber = "916230020555";

    const message =
      "Hello Shri Hari Classes, I want to know more about your courses.";

    const url =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const openlocation = () => {
    const url=`https://www.google.com/maps/place/Sri+Hari+Classes/@31.6073849,76.9131114,17.29z/data=!4m6!3m5!1s0x39051f73b288990b:0x341371ccdb76da52!8m2!3d31.6072814!4d76.9129998!16s%2Fg%2F11tt27f8gy?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D`;
    window.open(url,"_blank");
  }
  const makecall= ()=>{
    window.open("tel:916230020555");

  }

  return (
    <div className="courses">

      <div className="container">

        <div className="main-all-about">

          <div className="frist-about">

            <div className="heading-about">

              <h1>About Sri Hari Classes</h1>

              <p>
                Sri Hari Classes is one of the pioneer coaching institutes
                in Ner Chowk, Mandi. We provide the best guidance and
                resources for a wide range of competitive exams with a
                focus on building concepts, confidence and career.
              </p>

              <div className="bottom-about">

                <div className="icon-con-about">
                  <h1><CgGoogleTasks /></h1>

                  <p>
                    Great curriculum, academics and environment.
                  </p>
                </div>

                <div className="icon-con-about">
                  <h1><CgGoogleTasks /></h1>

                  <p>
                    Highly result-oriented coaching with a supportive environment.
                  </p>
                </div>

                <div className="icon-con-about">
                  <h1><CgGoogleTasks /></h1>

                  <p>
                    Excellent coaching classes in Ner Chowk.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* COURSES SECTION */}

          <div className="second-courses">

            <div className="all-courses">

              <div className="box-course">
                <h1><HiOutlineBookOpen className="text-green-500"/></h1>
                <p>CBSE Exam</p>
              </div>

              <div className="box-course">
                <h1><FaUserDoctor className="text-blue-600"/></h1>
                <p>NEET <br /> Entrance Coaching</p>
              </div>

              <div className="box-course">
                <h1><IoSettingsOutline  className="text-amber-500"/></h1>
                <p>JEE <br /> Coaching</p>
              </div>

              <div className="box-course">
                <h1><FaRocket className="text-blue-500"/></h1>
                <p>Engineering <br /> Entrance Coaching</p>
              </div>

              <div className="box-course">
                <h1><TiHomeOutline className="text-amber-900"/></h1>
                <p>Government <br /> Exam Coaching</p>
              </div>

              <div className="box-course">
                <h1><MdOutlineGppGood className="text-green-700"/></h1>
                <p>NDA <br /> Coaching</p>
              </div>

              <div className="box-course">
                <h1><GiThreeLeaves className="text-green-500"/></h1>
                <p>ICAR <br /> Exam Coaching</p>
              </div>

              <div className="box-course">
                <h1><TbNurse className="text-amber-900" /></h1>
                <p>Nursing <br /> Coaching</p>
              </div>

              <div className="box-course">
                <h1><GiAnchor className="text-green-500" /></h1>
                <p>MNS <br /> Coaching</p>
              </div>

              <div className="box-course">
                <h1><FaFlask className="text-blue-500" /></h1>
                <p>IISER / NEST <br /> Coaching</p>
              </div>

              <div className="box-course">
                <h1><FaAtom  className="text-amber-900" /></h1>
                <p>Physics <br /> Exam</p>
              </div>

              <div className="box-course">
                <h1><FaDna  className="text-blue-500"/></h1>
                <p>Biology <br /> Exams</p>
              </div>

              <div className="box-course">
                <h1><FaVial className="text-green-500" /></h1>
                <p>Chemistry <br /> Exams</p>
              </div>

              <div className="box-course">
                <h1><FaBullseye className="text-blue-500" /></h1>
                <p>JEE-Main</p>
              </div>

              <div className="box-course">
                <h1><FaRocket className="text-green-500" /></h1>
                <p>JEE-Advance</p>
              </div>

              <div className="box-course">
                <h1><FaClipboardCheck className="text-amber-500" /></h1>
                <p>HP Board <br /> Exams</p>
              </div>

              <div className="box-course">
                <h1><FaFire className="text-blue-500"  /></h1>
                <p>NEET <br /> Crash Course</p>
              </div>

              <div className="box-course">
                <h1><FaCrosshairs className="text-green-500"  /></h1>
                <p>JEE <br /> Crash Course</p>
              </div>

              <div className="box-course">
                <h1><FaShieldAlt  className="text-blue-500" /></h1>
                <p>NDA <br /> Crash Course</p>
              </div>

            </div>

          </div>

          {/* LOCATION SECTION */}

          <div className="third-location">

            <div className="address-section">

              <div className="address-icon">
                <IoLocationOutline />
              </div>

              <div className="address-text">
                <p>2nd Floor, near PNB,</p>
                <p>Ner Chowk, Ner,</p>
                <p>Himachal Pradesh 175008</p>

                <button onClick={openlocation}>View on Map</button>
              </div>

            </div>

            <div className="line"></div>

            <div className="contact-links">

              <div className="link-item">
                <IoCallOutline />
                <button onClick={openWhatsApp}>062300 20555</button>
              </div>

              <div className="link-item">
                <IoNavigateOutline />
                <p onClick={openlocation}>Directions</p>
              </div>

              <div className="link-item">
                <IoCallOutline />
                <p onClick={makecall}>Call</p>
              </div>

            </div>

            <div className="line"></div>

            <div className="open-time">

              <IoTimeOutline />

              <p>
                <span>Open</span> • Closes 8 pm
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Courses;
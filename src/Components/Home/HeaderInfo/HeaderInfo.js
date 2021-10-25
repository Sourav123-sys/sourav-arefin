import React from 'react';
import myImage from '../../../image/khan.png';
import './HeaderInfo.css';
import 'react-typewriting-effect/dist/index.css'
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
const HeaderInfo = () => {            
    return (
        <section  className="background-header">
            <ParticlesBg type="bail" bg={true}     />

            <div  className="pb-5">
  
                <div  className="container">   

                    <div className="row header ">
                        <div className=" header-info col-md-7">
                            <h1>Hl!  my name is</h1>
                            <h2  >SOURAV AREFIN</h2>
                            <h3 className="mb-4 mt-3  cursor">
                                <Typewriter
                                    options={{
                                        strings: [ "A Front-End developer", "A Full-stack web developer"," A Curious web Developer"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 200,
                                    }}
                                />

                            </h3>

                            <p  > A self-spurred and energetic web designer with a profound interest in JavaScript. To work in the Software business with current web innovations of various neighborhood and worldwide Software/IT offices of Bangladesh and develop quickly with expanding duties.  </p>

                           <div style={{marginBottom:'70px'}} className="">
                           <Link to="/about"><button className=" btn-success uniq-button mb-5">About Me</button></Link>
                            <Link  to="/contract"> <button  className="get-touch btn-success ">Get In touch</button></Link>
                           </div>
                        </div>

                        <div className="col-md-5 ">

                            <img src={myImage} className="img-fluid" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderInfo;
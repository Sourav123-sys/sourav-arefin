import React, { useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import html from '../../../image/logo-html-5.png';
import css from '../../../image/css.png';
import js from '../../../image/java.png';
import react from '../../../image/react.png';
import node from '../../../image/node.png';
import mon from '../../../image/mon.png';
import fire from '../../../image/firebase.png';
import ex from '../../../image/express.png';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




const Skills = () => {
    const value = .66;

    useEffect(()=>{   
    
        AOS.init({duration:3000})
    },[])
    

    return (
        <section className="project pt-5" >
            <div className="container skils pb-5">
  
                <h1  data-aos="fade-right"className="skills-content" >Some Of my skills</h1>

                <div className="row text-center">

                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }} className="text-center">
                            <CircularProgressbarWithChildren value={91}>
                                <img style={{ width: 55, marginTop: -5 }} src={html} alt="doge" />
                                <div style={{ fontSize: 20, marginTop: -2 }}>
                                    <strong>90%</strong> HTML
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>



                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={87}>
                                <img style={{ width: 40, marginTop: -5 }} src={css} alt="doge" />
                                <div style={{ fontSize: 20, marginTop: -2 }}>
                                    <strong>87%</strong> CSS
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>
                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={70}>
       
                                <img style={{ width: 40, marginTop: -5 }} src={js} alt="doge" />
                                <div style={{ fontSize: 17, marginTop: -2 }}>
                                    <strong>70%</strong> Javascript
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>
                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={84}>
                                <img style={{ width: 70, marginTop: -5 }} src={react} alt="doge" />
                                <div style={{ fontSize: 20, marginTop: -2 }}>
                                    <strong>84%</strong> React
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>
                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={78}>
                                <img style={{ width: 40, marginTop: -5 }} src={mon} alt="doge" />
                                <div style={{ fontSize: 20, marginTop: -2 }}>
                                    <strong>78%</strong> Mongo
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>
                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={74}>
                                <img style={{ width: 70, marginTop: -5 }} src={node} alt="doge" />
                                <div style={{ fontSize: 20, marginTop: -2 }}>
                                    <strong>74%</strong> Node
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>
                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={81}>
                                <img style={{ width: 40, marginTop: -5 }} src={fire} alt="doge" />
                                <div style={{ fontSize: 18, marginTop: -2 }}>
                                    <strong>81%</strong> Firebase
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>
                    <div className="mt-4 mb-3 col-md-3 col-sm-6 col-auto skill-part">
                        <div style={{ width: '150px' }}>
                            <CircularProgressbarWithChildren value={68}>
                                <img style={{ width: 60, marginTop: -5 }} src={ex} alt="doge" />
                                <div style={{ fontSize: 17, marginTop: -2 }}>
                                    <strong>68%</strong> Express
                             </div>
                            </CircularProgressbarWithChildren>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Sidevar from '../../Shared/sideBar/Sidevar';
import souravImg from '../../../image/arefin.png';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const About = () => {

   const link = 'https://drive.google.com/uc?export=download&id=1QYYjLmW7zPK3aR0P0mEfyf_WJhPrJ3Q0';

    AOS.init();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section className="project">
            <NavBar />
            <Sidevar />
            <div style={{ paddingTop: '8%' }} className="container sm-mt-0 ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-5"><img className="img-fluid myimg" style={{ width: '400px', borderRadius: '10px' }} src={souravImg } alt="" /></div>

                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <h2 style={{ color: '#384764', fontFamily: 'arial', fontWeight: '600' }} className="p-3"> <span style={{ color: '#ea37bb' }}>I'm</span> SOURAV AREFIN</h2>
                        </div>



                        <p style={{ textAlign: 'justify', fontFamily: 'arial' }}>A self-spurred and energetic web designer with a profound interest in JavaScript. To work in the Software business with current web innovations of various neighborhood and worldwide Software/IT offices of Bangladesh and develop quickly with expanding duties.</p>

                        <div className=" mb-5"><a href={link}><button className="uniq-button"> <FontAwesomeIcon icon={faDownload} /> Download CV</button></a></div>
                    </div>
                    <div className="col-md-6">
                        <h3  data-aos="fade-right" className="skills-content mt-0">Programming Skills</h3>
                        <div>
                            <div className="page-title">
                                <h3>Expertise</h3>
                            </div>
                            <div className="technology">
                                <span>React</span>
                                <span>Javascript</span>
                                <span>ES6</span>
                                <span>Firebase</span>
                                <span> Bootstrap.js</span>
                                <span>React Bootstrap.js</span>
                                <span>Css.js</span>
                                <span>Html</span>
                            </div>

                            <div className="page-title">
                                <h3>Comfortable</h3>
                            </div>
                            <div className="technology">
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>JSON</span>
                                <span> SASS</span>
                                <span> Material UI</span>
                            </div>

                            <div className="page-title">
                                <h3>Familiar</h3>
                            </div>
                            <div className="technology">
                                <span>Redux.js</span>
                                <span>TypeScript</span>
                                <span> React Native</span>
                                <span>JSON</span>
                            </div>

                            <div className="page-title">
                                <h3 className="page-title">Tools</h3>
                            </div>
                            <div className="technology">
                                <span>Git</span>
                                <span>Webpack</span>
                                <span> Create React App</span>
                                <span>VS Code</span>
                                <span>Netlyfi</span>
                                <span>Heroku</span>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </section>
    );
};

export default About;
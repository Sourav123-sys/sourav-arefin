import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import Sidevar from '../../Shared/sideBar/Sidevar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';
import Footer from '../../Shared/Footer/Footer';

import Temp from '../../../image/temp.png';
import Mern from '../../../image/Mern.png';
import covid from '../../../image/covid.png';
import leag from '../../../image/leag.PNG';
import ema from '../../../image/ema.PNG';
import cooking from '../../../image/cooking.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

// import ProjectsInfo from '../../../projectsData.json';
// import ProjectsCard from './ProjectsCard';


const Projects = () => {
    useEffect(() => {

        AOS.init({ duration: 3000 })
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className="project mt-0">
            <NavBar />
            <Sidevar />
            <div className="container" style={{ paddingTop: '1px' }}>



                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h2 style={{ marginTop: "100px" }} className="skills-content ">My Projects</h2>
                </div>



                <div className="row mb-5 products-details">
                    <div className="card-container-info" data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">

                        <Card style={{ backgroundColor: '#dbdbdb' }}>
                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={covid} />

                                <div className="service-details-info">
                                    A responsive single-page app where users can check covid updates

                                </div>

                            </div>

                            <Card.Body className="card-details-web">
                                <Card.Title>Covid News Checker</Card.Title>
                                <div>
                                    <div className="technology">
                                    <span>React.js</span>
                                        <span>REST API</span>
                                        <span>React Bootstrap</span>
                                    </div>
                                    <div className="site-link">
                                        <a href="https://github.com/Sourav123-sys/covid-meter" target="_blank" >Github <FontAwesomeIcon icon={faGithub} /></a>

                                        <a href="https://covid-news-checker.netlify.app/" target="_blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
                        <Card style={{ backgroundColor: '#dbdbdb' }}>

                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={ema} />
                                <div className="service-details-info">
                                    This is a E-commerce website. Where customer buy any products with VISA card. And they can order place more products.
                                </div>
                            </div>

                            <Card.Body className="card-details-web">
                                <Card.Title>EmaJhon Simple</Card.Title>
                                <div>
                                    <div className="technology">
                                        <span>React.js</span>
                                        <span>Node.js</span>
                                        <span>MongoDB.js</span>
                                        <span>Express.js</span>
                                        <span>CSS.js</span>
                                        <span>Stripe</span>
                                        <span>Firebase</span>
                                        <span>React Bootstrap</span>
                                    </div>
                                    <div className="site-link">
                                        <a href="https://github.com/Sourav123-sys/new-ema-john" target="_blank" >Github <FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://angry-wright-b5717f.netlify.app/" target="blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
                        <Card style={{ backgroundColor: '#dbdbdb' }}>

                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={Mern} />
                                <div className="service-details-info">
                                A full-stack e-commerce website , where customers can buy and see their purchase history
                                </div>
                            </div>

                            <Card.Body className="card-details-web">
                                <Card.Title>Online Book Shop</Card.Title>
                                <div>
                                    <div className="technology">
                                    <span>React.js</span>
                                        <span>Node.js</span>
                                        <span>Express.js</span>
                                        <span>MongoDB</span>
                                        <span>React Bootstrap</span>
                                    </div>
                                    <div className="site-link">
                                        <a href="https://github.com/Sourav123-sys/ONLINE_SITE_FRONT" target="_blank" >Github <FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://online-shop-book.herokuapp.com/" target="blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>



                    <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
                        <Card style={{ backgroundColor: '#dbdbdb' }}>

                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={leag} />
                                <div className="service-details-info">
                                    A full responsive react project. Where users can know about English premier league details and history. And users can see their player's logo and so on...
                                </div>
                            </div>

                            <Card.Body className="card-details-web">
                                <Card.Title>Racket Sports</Card.Title>
                                <div>
                                    <div className="technology">
                                        <span>React.js</span>
                                        <span>Bootstrap</span>
                                        <span>CSS</span>
                                        <span>React Router</span>
                                        <span>API</span>
                                    </div>
                                    <div className="site-link">
                                        <a href="https://github.com/Sourav123-sys/React-sports" target="_blank" >Github <FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://unruffled-knuth-8f7e44.netlify.app/" target="blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
                        <Card style={{ backgroundColor: '#dbdbdb' }}>

                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={Temp} />
                                <div className="service-details-info">
                                    On this website, user can check temprature.
                                </div>

                            </div>

                            <Card.Body className="card-details-web">
                                <Card.Title>Weather Temperature</Card.Title>
                                <div>
                                    <div className="technology">
                                    <span>Javascript</span>
                                        <span>ES6</span>
                                        <span>CSS</span>
                                        <span>HTML</span>
                                        <span>API</span>


                                    </div>
                                    <div className="site-link">
                                        <a href="https://github.com/Sourav123-sys/TempWather" target="_blank">Github <FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://sourav123-sys.github.io/TempWather/" target="_blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
                        <Card style={{ backgroundColor: '#dbdbdb' }}>

                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={cooking} />
                                <div className="service-details-info">
                                    A cooking Master site created with Javascript . In this site user can search any type of food and they can see details of food.
                                </div>
                            </div>

                            <Card.Body className="card-details-web">
                                <Card.Title>Cooking Master</Card.Title>
                                <div>
                                    <div className="technology">
                                        <span>Javascript</span>
                                        <span>ES6</span>
                                        <span>CSS</span>
                                        <span>HTML</span>
                                        <span>API</span>
                                    </div>
                                    <div className="site-link">
                                        <a href="https://github.com/Sourav123-sys/Cooking-master" target="_blank" >Github <FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="https://sourav123-sys.github.io/Cooking-master/" target="blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            </div>
            <Footer />
        </section>
    );
};

export default Projects;
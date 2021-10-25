import React, { useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './SliderAnimation.css';
import carrepair from '../../../image/carrepair.PNG';
import Mern from '../../../image/Mern.png';
import ridrs from '../../../image/car.PNG';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import covid from '../../../image/covid.png';

import ema from '../../../image/ema.PNG';

const SliderAnimation = () => {

    useEffect(() => {

        AOS.init({ duration: 3000 })
    }, [])

    const content = [
        {
            title: 'covid checker',
            description: 'A responsive single-page app with authentication where users can book their services with a credit card', siteImage: covid, siteLink: 'https://covid-news-checker.netlify.app/'
        },
        {
            title: 'Dream Riders',
            description: 'On this website, user can select their preferred vehicles and compare the cost of those vehicles for their preferred routes.',
            siteImage: ridrs,
            siteLink: 'https://dream-riders-2b0ae.firebaseapp.com/'
        },

        {
            title: 'Online book site',
            description: 'A full-stack e-commerce website , where customers can buy and see their purchase history',
            siteImage: Mern,
            siteLink: 'https://dream-riders-auth.web.app/'
        }




    ]

    return (

        <section className="project">
            <div className="container">
                <h1 data-aos="fade-right" className="skills-content">My Latest Work</h1>
                <div className="row">
                    <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
                        <Card style={{ backgroundColor: '#dbdbdb' }}>
                            <div className="image-box">
                                <Card.Img variant="top" style={{ height: '300px' }} src={covid} />

                                <div className="service-details-info">
                                    A responsive single-page app with authentication where users can book their services with a
                                    credit card.
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
                                        <a href="https://github.com/Sourav123-sys/covid-meter" target="_blank" >Client <FontAwesomeIcon icon={faGithub} /></a>


                                        {/* <a href="https://github.com/abdullahalnomanfb/fixmiox-auto-service-server" target="_blank" >Server <FontAwesomeIcon icon={faGithub} /></a> */}

                                        <a href="https://covid-news-checker.netlify.app/" target="_blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
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
                                   .
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
                                        <a href="https://github.com/Sourav123-sys/ONLINE_SITE_FRONT" target="_blank" >Client <FontAwesomeIcon icon={faGithub} /></a>

                                        <a href="https://github.com/Sourav123-sys/ONLINE_SITE_BACK" target="_blank" >Server <FontAwesomeIcon icon={faGithub} /></a>

                                        <a href="https://online-shop-book.herokuapp.com/" target="blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
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
                                        <a href="https://github.com/Sourav123-sys/new-ema-john" target="_blank" >Client <FontAwesomeIcon icon={faGithub} /></a>

                                        <a href="https://github.com/Sourav123-sys/ema-john-server" target="_blank" >Server <FontAwesomeIcon icon={faGithub} /></a>

                                        <a href="https://angry-wright-b5717f.netlify.app/" target="blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>

            <div className="text-center">
                

                <Link to="/projects">

                    <button style={{ borderRadius: '17px', width: '150px', backgroundColor: '#6047ec', border: '1px solid #6047ec' }} className="mt-5 btn-primary p-2">See All Projects</button>
                </Link>

                
            </div>

        </section>
    );
};

export default SliderAnimation;
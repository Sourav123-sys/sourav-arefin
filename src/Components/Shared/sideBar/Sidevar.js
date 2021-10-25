import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Sidevar.css';
import { faEnvelope, faMailBulk, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Sidevar = () => {


    return (
        <main className="project">
            <section >
                <div className="small-size-icon d-block d-md-none project ">
                    <ul className="list-items">
                        <li><a title="GITHUB" href="https://github.com/Sourav123-sys" target="_blank">
                            < FontAwesomeIcon className="github" icon={faGithub} />
                        </a></li>
                        <li><a title="LINKEDIN" className="linkedin" href="https://www.linkedin.com/in/sourav-arefin-35a462206/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a></li>
                        <li><a title="FACEBOOK" className="facebook" href="https://www.facebook.com/profile.php?id=100013452185380" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a></li>
                        <li><a title="khansourav58@gmail.com" className="mailto" href="mailto:abdullahalnoman1512@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a></li>
                    </ul>
                </div>

                <div className="social-bar d-none d-md-block pl-2">
                    <ul className="list-unstyled">
                        <li><a title="GITHUB" href="https://github.com/Sourav123-sys" target="_blank">
                            < FontAwesomeIcon className="github" icon={faGithub} />
                        </a></li>
                        <li><a title="LINKEDIN" className="linkedin" href="https://www.linkedin.com/in/sourav-arefin-35a462206/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a></li>
                        <li><a title="FACEBOOK" className="facebook" href="https://www.facebook.com/profile.php?id=100013452185380" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a></li>

                        <li><a title="khansourav58@gmail.com" className="mailto" href="mailto:khansourav58@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a></li>
                      
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Sidevar;
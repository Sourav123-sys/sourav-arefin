import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const ProjectsCard = (props) => {

  

    const { title, image,details,live,client } = props.projectDetailsInfo;
    const {react,node,express,mongo,reactBootstrap,firebase,Stripe,css} = props.projectDetailsInfo.skills;

    return (

        <div data-aos="flip-left" data-aos="flip-left" className="col-md-4 mt-4 card-info">
            <Card style={{ backgroundColor: '#dbdbdb' }}>
                <div className="image-box">
                    <Card.Img variant="top" style={{ height: '300px' }} src={image} />

                    <div className="service-details-info">
                        {details}
                      
                    </div>

                </div>

                <Card.Body className="card-details-web">
                    <Card.Title>{title}</Card.Title>
                    <div>
                        <div className="technology">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>React Bootstrap</span>
                            <span>Firebase</span>
                        </div>
                        <div className="site-link">
                            <a href={client} target="_blank" >Github <FontAwesomeIcon icon={faGithub} /></a>

                            <a href={live} target="_blank">Live <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    
    );
};

export default ProjectsCard;
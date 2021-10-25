import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const CardDetails = (props) => {


    const { title, image, date, details, link } = props.singleData;


    useEffect(() => {

        Aos.init({ duration: 3000 })
    }, [])

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="col-md-4 mb-5 " data-aos="flip-left">
            <Card className="card-article">
                <a style={{ textDecoration: 'none', color: 'black' }} href={link} target="_blank">
                    <Card.Img style={{ height: '200px' }} variant="top" src={image} />

                    <div style={{ backgroundColor: '#7d69ea30' }}>
                        <Card.Body >

                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <p style={{ textAlign: 'justify' }}>{details}</p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            <small>{date}</small>
                        </Card.Footer>
                    </div>
                </a>
            </Card>
        </div>
    );
};

export default CardDetails;
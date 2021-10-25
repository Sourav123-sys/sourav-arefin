import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';
import Sidevar from '../../Shared/sideBar/Sidevar';
import './Contract.css';
import Footer from '../../Shared/Footer/Footer';
import ParticlesBg from "particles-bg";
import { useEffect } from 'react';

const Contract = () => {





    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm('gmail', 'template_cz4w05m', e.target, 'user_nDi2jySzO0Wkm4EjoGDE6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        alert('Successfully send...')

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section >
            <NavBar />
            <ParticlesBg type="lines" bg={true} />
            <div className="container">
                <div style={{ paddingTop: "100px", }}>

                    <h3 style={{ fontFamily: "cursive", color: "#ff31a1" }} className="text-center mb-3"> Get In Touch</h3>



                    <div className="contract-form ">
                        <Form className="contact-form " onSubmit={sendEmail}>

                            <Form.Group controlId="formBasicEmail">

                                <Form.Label> <h6>Email</h6> </Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email*" required />

                                <Form.Label> <h6>Subject</h6> </Form.Label>
                                <Form.Control type="text" name="subject" placeholder="Subject*" required />

                                <Form.Label> <h6>Message</h6> </Form.Label>
                                <textarea className="form-control" name="message" cols="10" rows="5" placeholder="Message*" required></textarea>

                            </Form.Group>

                            <div className="text-center pb-5">

                                <input className="btn-success uniq-button  " type="submit" value="Send" />
                            </div>

                        </Form>
                    </div>


                </div>
            </div>
            <Sidevar />
            <Footer />

        </section>
    );
};

export default Contract;
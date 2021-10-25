
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const GetTouch = () => {

    useEffect(()=>{
        AOS.init({duration:2000});

    },[])
    return (
     <section className="project">
            <div className="container ">
            <div className="text-center">
            <div data-aos="fade-right">   <h1  style={{ fontFamily: 'arial', fontWeight: "600" }}>Get In Touch</h1></div>
             
                <p>I'd like to hear from you. Regardless of whether you suffer a heart attack or simply need to say hey, go ahead and drop a message. I'll make an honest effort to hit you up!</p>
                <Link to="/contract">
                    <button className=" get-touch btn-success mb-5">Say hi  ! </button>
                </Link>

            </div>
        </div>
     </section>
    );
};

export default GetTouch;
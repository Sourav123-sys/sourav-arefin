import { Link } from '@react-pdf/renderer';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ArticleData from '../Article/ArticleData.json';
import CardDetails from './CardDetails';

const Articles = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    const first3 = ArticleData.slice(0, 3);


    const history = useHistory();

    const handleButtonClick=() =>{

        history.push('/blog')
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="project">
            <div className="container">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                  <div style={{paddingTop:'120px'}}>
                  <h2 className="skills-content ">Some of My Article</h2>
                  </div>
                </div>

                <div className="row">
                    {
                        first3.map(singleData => <CardDetails singleData={singleData} />)
                    }
                </div>

            </div>
            <div className="text-center">
                
                    <button onClick={handleButtonClick} style={{ borderRadius: '17px', width: '150px', backgroundColor: '#6047ec', border: '1px solid #6047ec',marginBottom:"20px" }} className="mt-5 btn-primary p-2"> All Article</button>
              
            </div>


        </section>
    );
};

export default Articles;
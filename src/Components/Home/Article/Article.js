import React, { useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Sidevar from '../../Shared/sideBar/Sidevar';
import articleData from './ArticleData.json';
import CardDetails from './CardDetails';

const Article = () => {

    console.log(articleData);
    return (
        <section className="project mt-0">
            <NavBar />
            <Sidevar />
            <div className="container" style={{ paddingTop: '1px' }}>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h2 style={{ marginTop: "100px" }} className="skills-content ">My blogs</h2>
                </div>
                <div className="row">
                    {
                        articleData.map(articleInfo => <CardDetails articleInfo={articleInfo} />)
                    }
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Article;
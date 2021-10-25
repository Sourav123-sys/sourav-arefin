import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Articles from '../Articles/Articles';
import GetTouch from '../GetTouch/GetTouch';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import SliderAnimation from '../SliderAnimation/SliderAnimation';

const Home = () => {
    return (
        <div  >
            <Header />
            <Skills />
            <SliderAnimation />
            <Articles />
            <GetTouch />
            <Footer />
        </div>
    );
};

export default Home;
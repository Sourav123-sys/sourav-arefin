import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import NavBar from '../../Shared/NavBar/NavBar';
import './Header.css';
import Sidevar from '../../Shared/sideBar/Sidevar';

const Header = () => {
    return (<div >
        <NavBar />
        <HeaderInfo />
        <Sidevar />
     
    </div>
    );
};

export default Header;
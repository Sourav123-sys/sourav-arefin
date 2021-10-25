import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "react-loader-spinner";
import Loader from 'react-loader-spinner';
const Loading = () => {

    return (
        <div style={{marginTop:'250px'}} className='text-center'>

           <Loader
                type="Bars"
                color="#2261f1"
                height={100}
                width={100}
                timeout={3000}
            
            />
            
        </div>
    );
};

export default Loading;
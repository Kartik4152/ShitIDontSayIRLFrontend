import React from 'react';
import './Loader.css'

const Loader=()=>{
    return(
        <div className='loaderContainer' id='lc'>
            <div className='loader'>
                <div id="outer"></div>
                <div id="middle"></div>
                <div id="inner"></div>
            </div>
        </div>
    )
}

export default Loader;
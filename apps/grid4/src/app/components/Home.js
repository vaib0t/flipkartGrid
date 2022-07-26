/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Home.css';

/* Component import */
import Slider from './Hero/Hero'
import DesktopCard from './Hero/DesktopCard';
/* Asset imports */

function Home(){

    return(
        <div className='Home'>
            <Slider/>
        </div>
    );
}

export default Home;
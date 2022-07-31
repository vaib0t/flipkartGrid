/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Home.css';

/* Component import */
import Slider from './Hero/Hero'
import DesktopCard from './Hero/DesktopCard';

import Desktop from './Hero/DesktopCard1'
/* Asset imports */

function Home(){

    return(
        <div className='Home'>
            <Desktop/>
        </div>
    );
}

export default Home;
/* Library import */
import {useState,useEffect} from 'react';
import Navbar from '../Navbar';

/* Dependency import */
import './css/Home.css';

/* Component import */

/* Asset imports */

function Home(prop){
    return(
        <div className='Home'>
            <Navbar holderId = {prop.currentAccount} />
        </div>
    );
}

export default Home;
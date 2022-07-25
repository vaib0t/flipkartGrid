/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/DesktopCard1.css';

/* Component import */

/* Asset imports */

function DesktopCard1(){

    return(
        // <div className='DesktopCard1'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='contentWrapper'>
                        <div className='copyContainer'>
                            <div className='tittle'>
                                Discover & shit
                            </div>
                            <div className='description'>
                                Sea is the world&apos;s
                            </div>
                            <div className='ctaContainer'>
                                <button className='accentButton'> Explore </button>
                                <button className='button'> Create </button>
                            </div>
                        </div>
                        <div className='cardContainer'>
                            <img
                                className='cdCont'
                                src="https://openseauserdata.com/files/zoonies_featured_image_4Z8jsfR.jpg"
                                alt=""
                            />
                            <div className='author'>
                                <div className='name'>
                                    Bulla
                                </div>
                                <a className='auth'
                                    href='https://openseauserdata.com/files/zoonies_featured_image_4Z8jsfR.jpg'
                                > bulla ka dolla </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        //</div>
    );
}

export default DesktopCard1;
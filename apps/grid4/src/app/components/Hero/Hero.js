/* Library import */
import {useState,useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Dependency import */
import './css/Hero.css';
import DesktopCard from './DesktopCard1';

/* Component import */

/* Asset imports */

function Hero(){

    return(
        <div className='Hero'>

            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={20000}
                stopOnHover={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                swipeable={true}
                emulateTouch={true}
            >
                <DesktopCard
                    bgColor={'https://openseauserdata.com/files/3863ca6c5110362246a23fa924bc8b57.jpg'}
                    lowerbarBg={'https://static.opensea.io/solana/home-banner.png'}
                    lowerbarText = {'Join Our Discord Community'}
                />
                <DesktopCard
                    bgColor={'https://openseauserdata.com/files/efb728ea8d7e1e87bd95cae9d66934c9.png'}
                    lowerbarBg={'https://static.opensea.io/solana/home-banner.png'}
                />
                <DesktopCard
                    bgColor={'https://openseauserdata.com/files/99a4f20e30ce2cfe20376ee180547a0f.jpg'}
                    lowerbarBg={'https://static.opensea.io/solana/home-banner.png'}
                />
            </Carousel>
        </div>
    );
}

export default Hero;
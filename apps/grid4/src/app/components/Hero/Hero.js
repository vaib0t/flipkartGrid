/* Library import */
import {useState,useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Dependency import */
import './css/Hero.css';
import DesktopCard from './DesktopCard';

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
                    contimg={'https://storage.googleapis.com/opensea-prod.appspot.com/files/partner_featured_image_mk6002.gif'}
                    lowerbarText = {'Join Our Discord Community'}
                />
                <DesktopCard
                    bgColor={'https://openseauserdata.com/files/efb728ea8d7e1e87bd95cae9d66934c9.png'}
                    contimg={'https://lh3.googleusercontent.com/W3InpeH2KCJrsrRt968UKPZCni16KrKXU7yNy5cTZ9eEihVdopqok0BtnlL88InZSxL6Ov54dyD3Hbx-yttumSw=w600'}
                />
                <DesktopCard
                    bgColor={'https://openseauserdata.com/files/99a4f20e30ce2cfe20376ee180547a0f.jpg'}
                    contimg={'https://lh3.googleusercontent.com/yyRzgdsD39Qf3VmPgdo7G33i1dpjnFC8b76YzNVMt-mLOUkN4JLAPTkS5ghyOU-N0xcC03EhPQzpGh3b5UCctCgpoBUohYqjfKOGrg=w600'}
                />
            </Carousel>
        </div>
    );
}

export default Hero;
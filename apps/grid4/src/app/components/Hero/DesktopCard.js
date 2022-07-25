/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/DesktopCard.css';

/* Component import */

/* Asset imports */

function DesktopCard({
    bgColor,
    lowerbarBg
}){

    let cardStyle ={
        backgroundImage: `url("${bgColor}")`
    }

    let lowerbarStyle = {
        backgroundImage: `url("${lowerbarBg}")`
    }

    return(
        <div
            className='DesktopCard'
            style={cardStyle}
        >
            <div className="backgroundCover"></div>
            <div className="cardContent">
                <div className="upper-cardContent">
                    <div className="upper-cardContent-left">
                        Discover, Collect &
                    </div>
                    <div className="upper-cardContent-right">

                    </div>
                </div>
                <div
                    className="lowerbar-cardContent"
                    style={lowerbarStyle}
                >
                    <div className="lowerbarText">
                        Explore More Products
                    </div>
                    <div className="lowerbarButton">
                        EXPLORE NOW
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopCard;
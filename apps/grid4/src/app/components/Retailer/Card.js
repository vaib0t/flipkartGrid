/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Card.css';

/* Component import */

/* Asset imports */

function Card(){

    return(
        <div className='Card'>
            <div className="container">
            <div className="card">
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-card-ui-design-using-html-and-css/img.png" alt="" class="card__img" />

                {/* <!-- <div class="card__content">  --> */}
                <div className="card__data">
                <h1 className="card__title">Nike Air Jordan</h1>
                <span className="card__preci">$99</span>
                <p className="card__description">Nike Air Jordan Footwear basketball sneakers.</p>
                <a href="#" className="card__button">Buy Now</a>
                </div>
                {/* <!-- </div> --> */}
            </div>
            </div>
        </div>
    );
}

export default Card;
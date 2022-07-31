/* Library import */
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
/* Dependency import */
import './css/Card.css';

/* Component import */

/* Asset imports */

function Card(
    {title,price,link, image, description,button}
){

    return(
        <div className='Card'>
            <div className="container">
            <div className="card">
                <img src={image} alt="" class="card__img" />

                {/* <!-- <div class="card__content">  --> */}
                <div className="card__data">
                <h1 className="card__title">{title}</h1>
                <span className="card__preci">${price}</span>
                <p className="card__description">{description}</p>
                <a href={link} className="card__button">{button}</a>
                </div>
                {/* <!-- </div> --> */}
            </div>
            </div>
        </div>
    );
}

export default Card;
/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/ProductPage.css';

/* Component import */
import NftImage from './NftImage';
import SaleCont from './SaleCont';
/* Asset imports */

function ProductPage(){

    return(
        <div className='ProductPage'>
            <NftImage/>
            <SaleCont/>
        </div>
    );
}

export default ProductPage;
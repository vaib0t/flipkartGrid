/* Library import */
import {useState,useEffect} from 'react';
/* Dependency import */
import './css/LoginButton.css';

/* Component import */

/* Asset imports */

function LoginButton({
    Acnt,
    ...rootDOMAttributes
}){

    return(
        <div className='LoginButton' {...rootDOMAttributes}>
            <div className='LoginButtonBorder'>
                {Acnt}
            </div>
        </div>
    );
}

export default LoginButton;
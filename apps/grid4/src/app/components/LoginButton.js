/* Library import */
import {useState,useEffect} from 'react';
/* Dependency import */
import './css/LoginButton.css';

/* Component import */

/* Asset imports */

function LoginButton(prop){

    return(
        <div className='LoginButton'>
            <div className='LoginButtonBorder'>
                {prop.Acnt}
            </div>
        </div>
    );
}

export default LoginButton;
/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Navbar.css';
import useWindowDimensions from "./hooks/useWindowSize";
import {Link, useHref} from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
/* Component import */
import Searchbar from './Searchbar/Searchbar';
import Menubar from "./Menubar/Menubar";
import LoginButton from './LoginButton';
/* Asset imports */


function Navbar({
    holderId,
    ConnectMetamask
}){
    const {screenHeight,screenWidth} = useWindowDimensions();
    const [Loading, setLoading] = useState(false);


    const changeNavbarColor = () => {
        if(window.scrollY>0){
            // document.getElementById("navbar").style.background = ""
            document.getElementById("navbar").style.background = "rgba(255,255,255,0.7)";
            document.getElementById("navbar").style.backdropFilter="blur(20px)";
        }else{
            document.getElementById("navbar").style.removeProperty('backdrop-filter');
            document.getElementById("navbar").style.background = "transparent";
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll',changeNavbarColor);
        return () => {
            window.addEventListener('scroll',changeNavbarColor);
        }
    },[])
    return(
        <div className='Navbar' id='navbar'>
            {/* heading */}
            <Link to='/'>
                <div className='Navbar-Heading'>
                    <img src =  'https://cdn.discordapp.com/attachments/751494279586775124/1003286875718557716/beaerth.png'/>
                </div>
            </Link>
            {/* searchbar */}
            <Searchbar/>
            <Menubar/>
            {
                (screenWidth>900)?
                <div className='desktopLoginButtonContainer'>
                    <LoginButton
                        onClick={async() => await ConnectMetamask()}
                        Acnt = {holderId}
                    />
                </div>
                :''
            }

        </div>
    );
}

export default Navbar;
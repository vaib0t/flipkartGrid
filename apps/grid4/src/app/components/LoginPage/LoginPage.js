/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/LoginPage.css';

/* Component import */
import Navbar from "../Navbar";
/* Asset imports */

function LoginPage(prop){

    const [Loading, setLoading] = useState(false);

    const detectProvider = () => {
        let provider;
        if(window.etherium){
            provider = window.etherium;
        }else if (window.web3) {
            provider = window.web3.currentProvider;
        }else{
            window.alert("No Etherium browser detected! check metamask");
        }
        return provider;
    };

    const onLoginHandler = async () => {
        const provider = detectProvider();
        if(provider){
            if(provider !== window.etherium) {
                console.error(
                    "Not Window.etherium do you have multiple wallet installed ?"
                );
            }
            setLoading(true);
            await provider.request({
                method: "eth_requestAccounts"
            });
            setLoading(false);
            prop.onLogin(provider);
        }
    };

    return(
        <>
        <Navbar holderId = "Connect Wallet"/>
        <div className='LoginPage'>
        <button onClick={onLoginHandler} type='button'>
        {!Loading && "Connect"}
        {Loading && "Loading..."}
        </button>
        </div>
        </>
    );
}

export default LoginPage;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, Router, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/LoginPage";
import Web3 from 'web3';
import { strict } from 'assert';


export function App() {
  const [IsConnected, setIsConnected] = useState(false);
  const [currentAccount, setcurrentAccount] = useState("");

  const onLogin = async (provider:string) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts()
    if(accounts.length == 0){
      console.log("Please connect to MetaMask")
    }else if(accounts[0] !== currentAccount){
      setcurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };


  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            {!IsConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
            {IsConnected && <Home currentAccount={currentAccount}/>}
          </>
        }/>
        {/* <Route path="login" element={<Login />}/> */}
      </Routes>
    </>
  );
}

export default App;

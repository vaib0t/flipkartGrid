// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, Router, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';
import {useAsyncEffect} from 'use-async-effect'
import Web3 from 'web3';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Retailer from "./components/Retailer/RetailerProfilePage"
import AddProduct from './components/Retailer/AddingProduct';
export function App() {
  const [currentAccount, setAccount] = useState("");

  const ConnectMetamask = async () => {
		if(window.ethereum){
			const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
			const accounts = await web3.eth.requestAccounts();
			setAccount(accounts[0]);
		}else{
			alert("PLEASE INSTALL METAMASK!");
		}
	}

  useAsyncEffect(async () => {
    try{
      await ConnectMetamask();
    }catch{
      console.log("connecting");
    }
  },[]);

  return (
    <>
      <Navbar
        holderId={(currentAccount!=='')?currentAccount:"Connect Wallet"}
        ConnectMetamask={ConnectMetamask}
      />
      <Routes>
        <Route path="/" element={
          <Home/>
        }/>
        <Route path="/retailer" element={
          <Retailer/>
        }/>
        <Route path='/addproduct' element={
          <AddProduct/>
        }/>
      </Routes>
    </>
  );
}

export default App;

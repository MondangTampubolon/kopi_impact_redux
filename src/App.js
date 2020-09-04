import React, { useEffect, useState } from 'react';

import store from './store';
import { beliCappucinoAction } from './actions/beliCappucinoAction';
import { beliChocolateAction } from './actions/beliChocolateAction';
import { beliCoffeeMochaAction } from './actions/beliCoffeeMochaAction';
import { beliTeaAction } from './actions/beliTeaAction';
import './App.css';


function App() {
 
  const initialStateCoffeeMocha= {
    quantity: 0,
  }

  const initialStateCappucino = {
    quantity: 0,
  }

  const initialStateChocolate = {
    quantity: 0,
  }

  const initialStateTea = {
    quantity: 0,
  }
 
  const wallet = store.getState().wallet.wallet
  console.log(wallet);
  const [coffeeMocha, setCoffeeMocha] = useState(initialStateCoffeeMocha);
  const [chocolate, setChocolate] = useState(initialStateChocolate);
  const [cappucino, setCappucino] = useState(initialStateCappucino);
  const [tea, setTea] = useState(initialStateTea);
  const [wallett, setWallet] = useState(0)

  useEffect(() => {
    // BLOCK CODE SAAT PERTAMA KALI HALAMAN DIAKSES ATAU DIRENDER ULANG

    // Daftarkan redux kedalam App.js
    const state = store.getState();

    console.log(state)

    // Declare data yang dibutuhkan pada App.js
    const coffeeMocha = state.coffeeMocha;
    const chocolate = state.chocolate;
    const cappucino = state.cappucino;
    const tea = state.tea;
    const wallet = state.wallet.wallet
    
    // Set data from local scope variable in app.js to global variable
    setCoffeeMocha(coffeeMocha);
    setCappucino(cappucino);
    setChocolate(chocolate);
    setTea(tea);
    setWallet(wallet);

    // SUBSCRIBE
    // BLOCK CODE SAAT ADA ACTION/UPDATE DARI REDUX
    store.subscribe(() => {
      const state = store.getState();
      // Declare data yang dibutuhkan pada App.js
      const coffeeMocha = state.coffeeMocha;
      const chocolate = state.chocolate;
      const cappucino = state.cappucino;
      const tea = state.tea;
      const wallet = state.wallet.wallet;
      
      // Set data from local scope variable in app.js to global variable
      setCoffeeMocha(coffeeMocha);
      setCappucino(cappucino);
      setChocolate(chocolate);
      setTea(tea);
      setWallet(wallet);

    });
  }, [])


  const handleCoffeeMocha = () => {
    store.dispatch(beliCoffeeMochaAction);
    console.log(store.getState().coffeeMocha);
  }

  const handleCappucino = () => {
    store.dispatch(beliCappucinoAction);
    console.log(store.getState().cappucino);
  }

  const handleChocolate = () => {
    store.dispatch(beliChocolateAction);
    console.log(store.getState().chocolate);
  }

  const handleTea = () => {
    store.dispatch(beliTeaAction);
    console.log(store.getState().tea);
  }

  return (
    <div className="App">
      <h1>IMPACT COFFESHOP</h1>
      <div className="product">
        <div>Delete </div>
        <div>Saldo: Rp.{wallet} </div>
      </div>
      <div className="wrapperProducts">
        <h2>Products</h2>
        <div className="Products">
          
          <div onClick={handleCoffeeMocha}>Coffee Mocha {coffeeMocha.quantity} Rp. 50.000
          
          </div>
          <div onClick={handleChocolate}>Chocolate {chocolate.quantity} Rp. 25.000
          
          </div>
          <div onClick={handleCappucino}>Cappucino {cappucino.quantity} Rp. 35.000
          
          </div>
          <div onClick={handleTea}>Tea {tea.quantity} Rp. 30.000
          </div>         
        </div>
      </div>      
    </div>
  );
}

export default App;

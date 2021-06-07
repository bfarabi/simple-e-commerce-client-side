import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

function App() {
  const [cart, setCart] = useState([]);

  const addClickPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  };

  return (
    <>
      <Header></Header>
      <main className="container my-5">
        <div className="row">
          <div className="col-md-9">
            <Players addClickPlayer={addClickPlayer}></Players>
          </div>
          <div className="col-md-3">
            <Sidebar cart={cart}></Sidebar>
          </div>
  
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

import "./App.css";
import React, { createContext, useState }  from "react";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import {

  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Login from "./Components/Login/Login";
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const userContext = createContext();
function App() {
  
const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]} >
  
    <BrowserRouter>
    <Header></Header>
      <Routes>
      
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shipment" element={<PrivateRoute><Shipment /></PrivateRoute>} />
        <Route path="/inventory" element={<PrivateRoute> <Inventory /></PrivateRoute> } />
        <Route path="/product/:productKey" element={<ProductDetail />} />
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      
    </userContext.Provider>
  );
}

export default App;

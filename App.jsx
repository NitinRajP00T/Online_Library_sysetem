import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css'; 

function App(){
  return (
    <>
      <Navbar />
      
      <h1 className="message">WELCOMECOME TO ONLINE BOOK LIBRARY </h1>
      
      <Outlet />

    
      <br />

      <h2 className="footerheader"></h2>

      <br />


      <footer>
        <p className="footerchild"> Copyright @ 2024 Online Book Library</p>
                
        <p className="footerchild">Mostly all types of Categories Available</p>
                
        <p className="footerchild">Add your Favourite Books to our Library</p>

        <p className="footerchild">Expilore more </p>

      </footer>

    </>
  )
}

export default App;
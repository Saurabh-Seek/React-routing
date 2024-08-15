import React from "react";
import { Link } from "react-router-dom";

 export const SidebarPage = () =>{

    return(
        <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

        
        </>
    )
}

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiFillHeart } from "react-icons/ai";
import { StateContext } from "../../context";

function Navbar() {
  const { state, dispatch } = useContext(StateContext);
  return (
    <nav>
      {/* <h1>{num}</h1>
       <h1>{number}</h1>
        <button onClick={()=>setNumber(number + 1)}>plyus </button>
        <button onClick={()=>setNumber(number - 1)}>minus</button> */}
      <NavLink className={"nav-link"} to={"/main"}>
        Main
      </NavLink>
      <NavLink className={"nav-link"} to={"/basket"}>
        Basket <AiFillHeart />
        <sup>{state.basket.length} </sup>
      </NavLink>
      {/* <NavLink className={"nav-link"} to={"/register"}>
        Register
      </NavLink> */}
      {/* <button onClick={()=>dispatch({type: "LOGGED_OUT"})}>Log Out</button> */}
    </nav>
  );
}

export default Navbar;

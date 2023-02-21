import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import { StateContext } from "./context";
import Basket from "./pages/basket/Basket";
import { useEffect } from "react";
import Navbar from './components/navbar/Navbar'
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import {useState} from 'react'
import ChoosenData from "./components/choosenData/ChoosenData";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [raqam, setRaqam] = useState(state.state)

 




  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/main" element={<Main raqam = {raqam} setRaqam = {setRaqam}/>} />
          <Route path="/basket" element={<Basket raqam = {raqam} setRaqam = {setRaqam}/>} />
         
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;

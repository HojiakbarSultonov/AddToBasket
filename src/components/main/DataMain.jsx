import React, { useContext, useState } from "react";
import { StateContext } from "../../context";
import { cars } from "../../datas";


function DataMain({id, image, title, price, raqam, setRaqam}) {
  const { state, dispatch,} = useContext(StateContext);
console.log(raqam);
  const [son, setSon] = useState(raqam)


  const dataInfo = cars.find(item=>item.id === id)
 
  const AddBasket = () => {
   
    const check = state.basket.some((item) => item.id === id);
    if (check) alert("bu qoshilgan");
    else dispatch({ type: "ADD_TO_BASKET", payload:dataInfo}) && dispatch({type:"ADD_COUNT"});
  };

  const minusBtn =()=>{
    if(son > 1)setSon((prev)=>prev-1)
    else setSon(1)
  }

  return (
    <div className="info">
      <img width={"250px"} height={"200px"} src={image} alt="" />
      <h1>{title}</h1>
      <h2>Narxi:{price} $</h2>
      <button onClick={AddBasket}>Add To Basket</button>
     <div className="valueData">
     <button onClick={()=>setSon((prev)=>prev+1)} >+</button>
      <h1>{son}</h1>
      <button onClick={minusBtn} >-</button>
     </div>
    </div>
  );
}

export default DataMain;
 
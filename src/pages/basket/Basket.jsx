import React, {useContext} from 'react'
import { StateContext } from '../../context';
import './Basket.css'
import ChoosenData from '../../components/choosenData/ChoosenData';
function Basket({raqam}) {
  const {state} =  useContext(StateContext)

return(
  <div className='basket'>
        {state.basket.map(item=>(
            <ChoosenData key={item.id} raqam={raqam} {...item}/>
        ))}
       
    </div>
  )
}

export default Basket
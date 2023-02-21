import React from 'react'
import { cars } from '../../datas'
import DataMain from './DataMain'
import './Main.css'
function Main({raqam, setRaqam}) {
  console.log(raqam);
    // const [number, setNumber] = useState(0)
  return (
    <main className='main'>
        {/* <h1>{num}</h1> */}
       {/* <h1>{number}</h1> */}
        {/* <button onClick={()=>setNumber(number + 1)}>plyus </button>
        <button onClick={()=>setNumber(number - 1)}>minus</button> */}
        {cars.map(item => (
           <DataMain key = {item.id} raqam = {raqam} setRaqam = {setRaqam} {...item}/>
        ))}
    </main>
  )
}

export default Main
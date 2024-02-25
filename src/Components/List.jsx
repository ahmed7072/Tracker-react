import React , {useState , useContext} from 'react'
import { GlobalState } from '../context/GlobalContext'
import Add from './Add';
import style from './List.module.css';

export default function List() {
    const {transaction} = useContext(GlobalState)
    const{DeleteAmount} = useContext(GlobalState)
    let total  = 0;
    
    total = transaction.reduce((totalAmount , item)=>totalAmount+item.amount,0)
    
    return (
        <>  
            <div className='w-screen h-screen flex flex-col justify-center align-items-center'>
                <div className={`w-1/2 d-flex justify-content-between`}>
                    <p className='uppercase text-2xl'>total</p>
                    <p className='uppercase text-2xl'>{total}</p>
                </div>
                {transaction.map(item=>(<div key={item.id} className={`w-1/2 ${style.parent} d-flex justify-content-between`}>
                    <p>{item.text}</p>
                    <p>{item.amount}</p>
                    <button className={`${style.deleteBtn} btn btn-danger `} onClick={()=> DeleteAmount(item.id)}>X</button>
                </div>))}
                <Add/>
            </div>
        </>
    )
}

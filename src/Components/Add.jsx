import React ,{useState , useContext} from 'react'
import { GlobalState } from '../context/GlobalContext'

export default function Add() {
    const {AddAmount} = useContext(GlobalState)
    let [name , setName] = useState('')
    let [amount ,setAmount] = useState(0)


    function handleSubmit(e){
        e.preventDefault()

    }
    return (
        <>
            <form onSubmit={handleSubmit} className="w-1/2 d-flex flex-col justify-center align-items-center">
                <input onChange={e=>setName(e.target.value)} className='form-control mt-2' type="text" placeholder='name' />
                <input onChange={e=>setAmount(e.target.value)} type="number" className='form-control mt-2' placeholder='amount' />

                <button onClick={()=>AddAmount(
                    {
                        id:Math.floor(Math.random()*100),
                        text:name,
                        amount: +amount
                    }
                )} className="btn btn-primary mt-2">Add</button>
            </form>
        </>
    )
}

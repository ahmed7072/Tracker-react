import React,{createContext , useReducer} from 'react'
import Reducer from './Reducer';

const data = {
    transaction:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}
export const GlobalState = createContext(data);
export default function GlobalContext({children}){
    let [state,dispatch] = useReducer(Reducer , data)
    function DeleteAmount(id){
        dispatch({
            type:'delete',
            payload:id
        })
    }
    function AddAmount(item){
        dispatch({
            type:'add',
            payload:item
        })
    }
    return(
        <GlobalState.Provider value={{
            transaction:state.transaction
            ,DeleteAmount
            ,AddAmount
        }}>
            {children}
        </GlobalState.Provider>
    )
}

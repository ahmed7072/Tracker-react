export default (state , action) =>{
    switch(action.type){
        case 'add':
            return{
                ...state,
                transaction: [action.payload,...state.transaction]
            }
        case 'delete':
            return{  
                ...state
                ,transaction: state.transaction.filter(item => item.id !== action.payload)
            }

        default:
            return state
    }
}
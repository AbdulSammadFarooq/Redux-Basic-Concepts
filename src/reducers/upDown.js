const initialState =10;

const changeTheNumber = (state= initialState, action)=>{
    console.log(`Checking action.type ${action.type}`)
    switch(action.type){
        case "INCREMENT": return state +1
        case "DECREMENT": return state -1
        default: return state
    }
}

export default changeTheNumber;
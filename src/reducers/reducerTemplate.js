const initialState = {
    counter: 0,
    daily: []
}

//purpose of reducer is to return a new global state
const reducerTemplate = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE":
            return{
                ...state,
                daily: action.payload

            }
        default:
            return state;
    }
}


export default reducerTemplate

const initialState = {
    counter: 0
}

//purpose of reducer is to return a new global state
const reducerTemplate = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                counter: state.counter + action.data
            }
        default:
            return state;
    }
}


export default reducerTemplate

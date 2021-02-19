


//action creator and it returns an object
export const update = (n) => {
    return {
        type: "UPDATE",
        payload: n

    }
}

//this is not a named  export. when we import into our component we have to import like this....


//import {increment} from './path'



//named exprt
//export default increment
//import increment from './path'
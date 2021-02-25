//acts as event
// this is the action creator. Action creators return actions
export const update = (n) => {
    // This is the action
    return {
        type: "UPDATE",
        payload: n

    }
}




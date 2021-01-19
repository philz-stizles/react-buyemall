const currentState = {
    loggedInUser: null
}

export const authReducer = (currentState, action) => {
    const { type, payload } = action
    switch(type) {
        case 'SET_LOGGGED_IN_USER':
        return {
            ...currentState,
            loggedInUser: payload
        }
        default:
            return currentState
    }
}
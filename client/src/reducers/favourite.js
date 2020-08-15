const favouriteReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_FAVOURITE":
            return action.payload
        case "UPDATE_FAVOURITE_EMPTY":
            return {};
        default:
            return state
    }
}
export default favouriteReducer;
const currentPageReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_CURRENT_PAGE":
            return action.payload
        default:
            return state
    }
}
export default currentPageReducer;
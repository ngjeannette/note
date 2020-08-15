const notesReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_CURRENT_PAGE":
            return action.payload
        case "UPDATE_SIDEBAR":
            return action.payload;
        case "UPDATE_CURRENT_NOTE_INFO":
            return action.payload;
        default:
            return state
    }
}
export default notesReducer;
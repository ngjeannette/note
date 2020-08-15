export const updateinfo = (info) => {
    return {
        type: 'UPDATE_LOGIN',
        payload: info
    }
}
export const updateinfoempty = (info) => {
    return {
        type: 'UPDATE_LOGIN_EMPTY',
        payload: info
    }
}
export const updatefavourite = (info) => {
    return {
        type: 'UPDATE_FAVOURITE',
        payload: info
    }
}
export const updatecurrentpage = (info) => {
    return {
        type: 'UPDATE_CURRENT_PAGE',
        payload: info
    }
}
export const updatesidebar = (info) => {
    return {
        type: 'UPDATE_SIDEBAR',
        payload: info
    }
}
export const updateloading = (info) => {
    return {
        type: 'UPDATE_LOADING',
        payload: info
    }
}

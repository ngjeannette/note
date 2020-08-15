
import axios from 'axios';

// notepage
const axiosPostSavedChanges = value => {
    return axios.post('/notes/savedchanges', value)
};

const axiosCheckTitleDuplicate = (title) => {
    return axios.get('/notes/checktitleduplicate', { params: { title } })
}

const axiosUpdateTitle = async (title, prevTitle, username) => {
    return axios.post('/notes/updatetitle', { title, username, prevTitle });

};

const axiosCreateNewPost = passData => {
    return axios.post('/notes/createnewnote', passData)
}

const axiosFindSectionPage = (header, username) => {
    return axios.get('/notes/findsectionpage', { params: { header, username } })
}

// login
const axiosCheckLogin = values => {
    return axios.get('/user/login', { params: values })
}

//sidebar
const axiosPostRemoveNote = (item, username) => {
    const passParam = {
        username,
        header: item
    };
    return axios.post('/notes/removeNote', passParam);
};

const axiosGetFavourites = (username) => {
    return axios.get('/notes/getfavourites', { params: { username } })
}

const axiosSetHeaders = username => {
    return axios.get('/notes/findheader', { params: { username } })
}

//signup 
const axiosCheckDuplicate = (values) => {
    return axios.get('/user/checkuser', { params: values });
}

const axiosPostSignup = (values) => {
    return axios.post('/user/createuser', values);
}

export { axiosPostSignup, axiosCheckDuplicate, axiosSetHeaders, axiosGetFavourites, axiosPostRemoveNote, axiosCheckLogin, axiosFindSectionPage, axiosCreateNewPost, axiosPostSavedChanges, axiosCheckTitleDuplicate, axiosUpdateTitle }
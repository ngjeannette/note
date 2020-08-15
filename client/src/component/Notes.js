import React, { useEffect, useState } from 'react';
import '../App.scss';
import SideBar from './Sidebar'
import NotesPage from './Notespage'
import FavouritePage from './Favouritepage'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { updatesidebar, updatecurrentpage } from '../actions';
import { axiosSetHeaders, axiosCreateNewPost, axiosFindSectionPage } from './utils'

function Notes() {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false)
    const loginUsername = useSelector(state => state.loginReducer);
    const favouriteReducer = useSelector(state => state.favouriteReducer);
    const currentPageReducer = useSelector(state => state.currentPageReducer);
    const loadingReducer = useSelector(state => state.loadingReducer);

    useEffect(() => { }, [loginUsername, favouriteReducer])
    useEffect(() => {
        
        if (Object.keys(currentPageReducer).length == 0) setHeaders(loginUsername , 0)
        else setHeaders(loginUsername, currentPageReducer.index);
    },[]);

    useEffect(() => { setLoading(loadingReducer) }, [loadingReducer])

    const passData = {
        username: loginUsername,
        header: moment().format('MMMM Do YYYY, h:mm:SS a'),
        color: '#FFB6C1',
        text: 'Start your first note 📒📕📗📘📙📔',
        favourite: false,
        showarea: false
    };
    const setHeaders = async(username, index) => {
        try {
            // axiossetheaders will find all the headers
            const sidebarheaders = await axiosSetHeaders(username);
            if (sidebarheaders.data.length > 0) {
                //update sidebar + currentpage info
                const sidebarList = sidebarheaders.data[0].header;
                dispatch(updatesidebar(sidebarheaders.data[0].header));
                
                const updatedSections = await axiosFindSectionPage(sidebarList[index], loginUsername);
                dispatch(updatecurrentpage({ page: 'item', pageInfo: updatedSections.data }))
            } else {
                await axiosCreateNewPost(passData);
                setHeaders(loginUsername);
            }
        } catch (error) {
            console.log('error', error)
        }
    };

    return (
        <div className="notes">
            <div className="sidebar">
                <SideBar />
            </div>
                {
                    currentPageReducer.page == 'favourite' ? 
                    <div className="notepage">
                        <FavouritePage/> 
                    </div> :
                    <div className="notepage">
                        <NotesPage />
                    </div>
                }
        </div>
    );
}

export default Notes;

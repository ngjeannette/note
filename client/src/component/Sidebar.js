import React, {useEffect} from 'react';
import '../App.scss';
import { notification } from 'antd';
import { CloseSquareOutlined, HeartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updatesidebar, updatecurrentpage, updateloading } from '../actions';
import moment from 'moment';
import { axiosCreateNewPost, axiosFindSectionPage, axiosSetHeaders, axiosPostRemoveNote, axiosGetFavourites } from './utils'


function SideBar() {
    const dispatch = useDispatch();
    const loginUsername = useSelector(state => state.loginReducer);
    const sidebarReducer = useSelector(state => state.sidebarReducer);

    useEffect(() => {  }, [loginUsername, sidebarReducer])

    const openNotification = (text) => {
        notification.open({
            message: text,
            placement: 'bottomRight'
        });
    };

    const removeNote = async (item, index) => {
        try {
            await axiosPostRemoveNote(item, loginUsername);
            //after remove, update sidebar
            sidebarReducer.splice(index, 1);
            dispatch(updatesidebar(sidebarReducer));
            setHeaders(0);
            openNotification(`${item} removed`);
        } 
        catch(error){
        }
    }

    const findFavourite = async () => {
        try {
            return await axiosGetFavourites(loginUsername);
        } catch (error) {
            console.log('error', error)
        }
    };

    const addOnePost = async () => {
        //  make axios post 
        const newPost = await axiosCreateNewPost(passData);
        const sidebarheaders = await axiosSetHeaders(loginUsername);
        const sidebarList = sidebarheaders.data[0].header;
        dispatch(updatesidebar(sidebarList));
        return newPost;
    }

    const setHeaders = async (index) => {
        try {
            // axiossetheaders will find all the headers
            const sidebarheaders = await axiosSetHeaders(loginUsername);
            if (sidebarheaders.data.length > 0) {
                //update sidebar + currentpage info
                const sidebarList = sidebarheaders.data[0].header;
                dispatch(updatesidebar(sidebarheaders.data[0].header));

                const updatedSections = await axiosFindSectionPage(sidebarList[index], loginUsername);
                dispatch(updatecurrentpage({ page: 'item', pageInfo: updatedSections.data }))
            } else {
                await axiosCreateNewPost(passData);
                setHeaders(0)
            }
        } catch (error) {

        }
    };

    const passData = {
        username: loginUsername,
        header: moment().format('MMMM Do YYYY, h:mm:SS a'),
        color: '#FFB6C1',
        text: 'Start your first note 📒📕📗📘📙📔',
        favourite: false,
        showarea: false
    };

    const updatePage = async (value, item='') => {
        // dispatch(updateloading(true))s
        switch (value) {
            case 'favourite':
                const favouriteValue = await findFavourite();
                dispatch(updatecurrentpage({ page: 'favourite', pageInfo: favouriteValue.data }))
                // setTimeout(function () { dispatch(updateloading(false)) }, 2000);
                break;
            case 'addNew':
                const addPostValue = await addOnePost();
                dispatch(updatecurrentpage({ page: 'item', title: addPostValue.data.header, pageInfo: [addPostValue.data] }))
                // setTimeout(function () { dispatch(updateloading(false)) }, 2000);
                break;
            case 'item':
                const updatedSections = await axiosFindSectionPage(item, loginUsername);
                dispatch(updatecurrentpage({ page: 'item', title: updatedSections.data[0].header, pageInfo: updatedSections.data }))
                // setTimeout(function () { dispatch(updateloading(false))}, 2000);
                break;
            default:
                break;
        }
    }

    return (
        <div className="sidebar-notes">
            <div className="note-favorite" onClick={() => { updatePage('favourite') }}><HeartOutlined /><span>Favourite</span></div>
            <div className="note-add" onClick={() => { updatePage('addNew') }}> + Section</div>
            {
                sidebarReducer.length > 0 && sidebarReducer.map((item, index) => {
                    return (
                        <div className="note-item" key={index} >
                            <span onClick={() => { updatePage('item',  item) }} >{item}</span>
                            <CloseSquareOutlined onClick={() => { removeNote(item, index)}} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SideBar;

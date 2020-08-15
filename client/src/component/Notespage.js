import React, { useEffect, useState } from 'react';
import '../App.scss';
import { Input, Button, notification, Spin } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updatesidebar, updatecurrentpage, updateloading } from '../actions';
import { axiosFindSectionPage, axiosCreateNewPost, axiosPostSavedChanges, axiosCheckTitleDuplicate, axiosUpdateTitle } from './utils'
import LoaderWrapper from './LoaderWrapper';

function NotesPage() {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false)

    const loginUsername = useSelector(state => state.loginReducer);
    const currentPageReducer = useSelector(state => state.currentPageReducer);
    const sidebarReducer = useSelector(state => state.sidebarReducer);
    const loadingReducer = useSelector(state => state.loadingReducer);

    const { TextArea } = Input;
    const [value, setValue] = useState([]);
    const [title, setTitle] = useState('');
    const [inputChanged, setInputChanged] = useState(false);

    useEffect(() => {
        if(value && value.length > 0) {
            setTitle(value[0].header)
        }
    },[value]);

    useEffect(() => {}, [sidebarReducer, loginUsername]);
    // useEffect(() => { setLoading(loadingReducer) }, [loadingReducer])

    useEffect(() => { 
        if ( Object.keys(currentPageReducer).length > 0 && currentPageReducer.pageInfo.length > 0) {
            setValue(currentPageReducer.pageInfo);
            // setTimeout(function () { dispatch(updateloading(false)) }, 2000);
        }else {
            if (sidebarReducer) {
                addItem(sidebarReducer);
                // setTimeout(function () { dispatch(updateloading(false)) }, 2000);
             }   
        }
    }, [currentPageReducer])
    useEffect(()=>{},[title])
    useEffect(()=>{},[inputChanged])

    const addItem = async sidebarReducer => {
        const updatedSections = await axiosFindSectionPage(sidebarReducer[0], loginUsername);
        dispatch(updatecurrentpage({ page: 'item', pageInfo: updatedSections.data }))
    }

    const savedChanges = async (value, text) => {
        try {
            await axiosPostSavedChanges(value);
            openNotification(`${text} updated`)
        } catch (error) {
            openNotification('Changes not saved')
        }
    };

    const openNotification = (text) => {
        notification.open({
            message: text,
            placement: 'bottomRight'
        });
    };

    const updateTitle = async (title, prevTitle) => {
        // when title updated, make axios post to update title
        // make axios get to update;
        const username = loginUsername;
        if (title) {
            await axiosUpdateTitle(title, prevTitle, loginUsername);
            //update sidebar
            const updatedSidebar = await axios.get('/notes/findheader', { params: { username } })
            dispatch(updatesidebar(updatedSidebar.data[0].header))
            //update pageinfo
            const updatepageinfo = currentPageReducer.pageInfo.map(item => {
                item.header = title
                return item
            })
            currentPageReducer.pageInfo = updatepageinfo;
            dispatch(updatecurrentpage({ ...currentPageReducer }))
        };
    };

    const onBlurFunc = async value => {
        if (value.length > 0 && title !== value[0].header && title !== "") {
            // check duplicate
            try {
                const checkTitleDuplicate = await axiosCheckTitleDuplicate(title);
                if (checkTitleDuplicate.data !== null) {
                    openNotification('Title already exists, title not saved')
                } else {
                    updateTitle(title, value[0].header);
                    openNotification('Title updated')
                }
            } catch (error) {
                console.log('error', error)
            }
        } else if (title == "") {
            openNotification('Title needs to be at least 1 character')
        }
    };

    const addNewNote = async title => {
        // get title, 
        try {
            const passNewNote = {
                username: loginUsername,
                header: title,
                color: '#FFB6C1',
                text: 'Start your first note 📒📕📗📘📙📔',
                favourite: false,
                showarea: false
            };
            const newPost = await axiosCreateNewPost(passNewNote);
            currentPageReducer.pageInfo.push(newPost.data)
            dispatch(updatecurrentpage({ page: 'item', pageInfo: currentPageReducer.pageInfo }))
        } catch (error) { 
            console.log('error', error)
        }
    }

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Input placeholder="title" size="large" required className='title' value={title} onChange={(e) => { 
                setTitle(e.target.value);
            }} onBlur={async() => { onBlurFunc(value)
                }} />
            <div className="displaynotes">
                {
                    value && value.length > 0 && value.map((item, index) => {
                        return (
                            <div className="single-item"
                                style={{ backgroundColor: item.color }}
                                key={index}
                            >
                                <div className={item.favourite ? 'fill-red favourite-heart' : 'fill-black favourite-heart'}  >
                                    <Button onClick={() => { 
                                        item.favourite = !item.favourite
                                        // setValue([...value.slice(0, index), { ...item}, ...value.slice(index + 1)]);
                                        dispatch(updatecurrentpage({ page: 'item', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))

                                        savedChanges({ ...item}, 'Favourite')
                                        }} >
                                        <HeartOutlined />
                                    </Button>
                                    <input type="color" 
                                        value={item.color} 
                                        onChange={(e) => { 
                                            item.color = e.target.value;
                                            // setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)])
                                            dispatch(updatecurrentpage({ page: 'item', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))

                                        }} 
                                        onBlur={() => { savedChanges({ ...item }, 'Color')}}
                                        />
                                </div>
                                <div className='container'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // everthing from 0 to index => update item => everything from index + 1 to end
                                        if (!item.showarea) {
                                            item.showarea = true;
                                            // setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)])
                                            dispatch(updatecurrentpage({ page: 'item', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))

                                        }
                                    }}
                                    onBlur={() => {
                                        // everthing from 0 to index => update item => everything from index + 1 to end
                                        if (item.showarea && inputChanged) {
                                            item.showarea = false;
                                            // setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)]);
                                            dispatch(updatecurrentpage({ page: 'item', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))

                                            savedChanges({ ...item }, 'Text');
                                        } else if (item.showarea) {
                                            item.showarea = false;
                                            // setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)]);
                                            dispatch(updatecurrentpage({ page: 'item', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))

                                        }
                                    }}
                                >
                                    {
                                        item.showarea ? (
                                            <TextArea
                                                autoFocus
                                                defaultValue={item.text}
                                                onChange={(e) => { 
                                                    item.text = e.target.value;
                                                    // setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)]);
                                                    dispatch(updatecurrentpage({ page: 'item', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))

                                                    // find the e.target value is the same as the set value, 
                                                    setInputChanged(true);
                                                }}
                                                placeholder="Controlled autosize"
                                                autoSize={{
                                                    minRows: 2
                                                    // maxRows: 5 
                                                }}
                                                resize='false'
                                            />
                                        ) : 
                                        ( <pre>{item.text} </pre>)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {
                    value && value.length > 0 &&
                    <div className="add-item" onClick={()=>{addNewNote(value[0].header)}}>
                        <h2>+ Note</h2>
                    </div>
                }
            </div>
        </LoaderWrapper>
    );
}

export default NotesPage;

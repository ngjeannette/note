import React, { useEffect, useState } from 'react';
import '../App.scss';
import { Input, Button, notification, Empty } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updatecurrentpage } from '../actions';
import { axiosPostSavedChanges } from './utils'

function FavouritePage() {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false)
    const loadingReducer = useSelector(state => state.loadingReducer);
    const currentPageReducer = useSelector(state => state.currentPageReducer);
    const { TextArea } = Input;
    const [value, setValue] = useState([]);
    const [title, setTitle] = useState('');
    const [inputChanged, setInputChanged] = useState(false);
    
    useEffect(() => { setValue(currentPageReducer.pageInfo) }, [currentPageReducer])
    useEffect(() => {
        if (value.length > 0) {
            setTitle(value[0].header)
        }
    }, [value]);
    useEffect(() => { }, [title, inputChanged])

    const savedChanges = async (value, text) => {
        try {
            const axiosSaved = await axiosPostSavedChanges(value);
            openNotification(text)
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

    return (
        <>
            <h1>Favourite Notes</h1>
            <div className="displaynotes">
                {
                    value.length > 0 && value.filter(item => { return item.favourite }).length > 0 ? 
                    value.length > 0 && value.map((item, index) => {
                        if(item.favourite){
                            return (
                                <div className="single-item"
                                    style={{ backgroundColor: item.color }}
                                    key ={index}
                                >
                                    <div className={item.favourite ? 'fill-red favourite-heart' : 'fill-black favourite-heart'}  >
                                        <Button onClick={() => {
                                            item.favourite = !item.favourite
                                            // setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)])
                                            dispatch(updatecurrentpage({ page: 'favourite', pageInfo: [...value.slice(0, index), { ...item }, ...value.slice(index + 1)] }))
                                            savedChanges({ ...item }, 'Favourite Removed')
                                        }} >
                                            <HeartOutlined />
                                        </Button>
                                        <input type="color"
                                            value={item.color}
                                            onChange={(e) => {
                                                item.color = e.target.value;
                                                setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)])
                                            }}
                                            onBlur={() => { savedChanges({ ...item }, 'Color Updated') }}
                                        />
                                    </div>
                                    <div className='container'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // everthing from 0 to index => update item => everything from index + 1 to end
                                            if (!item.showarea) {
                                                item.showarea = true;
                                                setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)])
                                            }
                                        }}
                                        onBlur={() => {
                                            // everthing from 0 to index => update item => everything from index + 1 to end
                                            if (item.showarea && inputChanged) {
                                                item.showarea = false;
                                                setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)]);
                                                savedChanges({ ...item }, 'Text Updated');
                                            } else if (item.showarea) {
                                                item.showarea = false;
                                                setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)]);
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
                                                        setValue([...value.slice(0, index), { ...item }, ...value.slice(index + 1)]);
                                                        // find the e.target value is the same as the set value, 
                                                        setInputChanged(true);
                                                    }}
                                                    placeholder="Controlled autosize"
                                                    autoSize={{
                                                        minRows: 2
                                                    }}
                                                    resize='false'
                                                />
                                            ) : (
                                                <pre>{item.text}</pre>
                                                )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    })
                    : <Empty description={'You have no favourites 😢'} />
                }
            </div>
        </>
    );
}

export default FavouritePage;

import React, { useEffect } from 'react';
import '../App.scss';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateinfoempty } from '../actions';

function Navigation() {
    const loginInfoReducer = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    useEffect(() => {},[loginInfoReducer])

    return (
        <>
            <div className="navigation">
                <div className="sign-action">
                    
                    {
                        (loginInfoReducer && Object.keys(loginInfoReducer).length > 0) &&
                        <Avatar shape="square" size={30} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    }
                    <Button>
                        <a target="_blank" rel="noopener noreferrer" href="https://flaviocopes.com/sample-app-ideas/">
                            Project 7
                        </a>  
                    </Button>
                    <Button><Link to="/home">Home</Link></Button>
                    <Button>
                        {
                            (loginInfoReducer && Object.keys(loginInfoReducer).length > 0) ?
                            <Link to="/notes">Notes</Link>
                            :
                            <Link to="/notloggedin">Notes</Link>
                        }
                    </Button>
                    {
                        (!loginInfoReducer || Object.keys(loginInfoReducer).length == 0) &&
                        <Button><Link to="/login">Sign In</Link></Button>
                    }
                    <Button><Link to="/signup">Sign up</Link></Button>
                    {
                        (loginInfoReducer && Object.keys(loginInfoReducer).length > 0) &&
                        <Button onClick={() => dispatch(updateinfoempty())} >
                            <Link to="/home">Sign out</Link>
                        </Button>
                    }
                </div>
            </div>
        </>
    );
}

export default Navigation;

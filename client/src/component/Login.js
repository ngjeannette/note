import React from 'react';
import '../App.scss';
import { Form, Input, Button, notification  } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateinfo } from '../actions';
import { axiosCheckLogin} from './utils'


function Login(props) {
    const dispatch = useDispatch();
    const onFinish = values => {
        checkLogin(values);
    };

    const checkLogin = async (values) => {
        try {
            const loginResult = await axiosCheckLogin(values);
            if(loginResult.data === null) {
                openNotification('Username and password does not match')
            } else {
                openNotification('Logged In');
                dispatch(updateinfo(loginResult.data.username))
            }

        } catch (error) {
            openNotification('Username and password does not match');
        }
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const openNotification = (text) => {
        notification.open({
            message: text,
            placement: 'bottomRight'

        });
    };

    return (
        <div className="login">
            <div><h1>Login</h1></div>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username' }]}
                >
                    <Input autoComplete="username" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                >
                    <Input autoComplete="current-password" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button><Link to="/forgotpassword">Forgot Password</Link></Button>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;

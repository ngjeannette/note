import React from 'react';
import '../App.scss';
import { Form, Input, Button, notification } from 'antd';
import { axiosCheckDuplicate, axiosPostSignup } from './utils'

function Signup() {
    const onFinish = values => {
        applyCheck(values);
    };

    const applyCheck = async(values) => {
        try {
            // passing values
            const {username, email, password} = values;
            const checkDuplicateObj = { username, email };
            const addResult = { username, email, password };
            const checkResult = await axiosCheckDuplicate(checkDuplicateObj);
            if(checkResult.data.length === 0) {
                try {
                    const createResult = await axiosPostSignup(addResult);
                    console.log('createResult', createResult)
                    openNotification('Account Created');
                } catch (err) {
                    openNotification('Incorrect Info');
                }
            } else {
                openNotification('User or Email already in use, please try again');
            }
        }
        catch (error) {

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
            <div><h1>Signup</h1></div>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Signup;
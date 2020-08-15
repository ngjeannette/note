import React from 'react';
import '../App.scss';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';

function Forgot() {
    const onFinish = values => {
        checkUsername(values);
    };

    const checkUsername = async (values) => {
        try {
            const {email} = values;
            // email validation only works for one email.
            // const loginResult = await axios.post('/email/send/', { email })
            //     .then(response => {
            //         response.data === null ? openNotification('Email not found') : openNotification('Password sent')
            //     })
            //     .catch(err => openNotification('Email not found'));
            
            // } else {
            //     openNotification('Incorrect Info');
            // }
            openNotification('Incorrect Info');
        } catch (error) {
            openNotification('Incorrect Info');
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
            message: 'Notification Title',
            description: text,
            placement: 'bottomRight'
        });
    };
    return (
        <div className="login">
            <div><h1>Forgot Password</h1></div>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
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

export default Forgot;

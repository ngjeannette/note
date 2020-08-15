import React from 'react';
import '../App.scss';
import { Empty } from 'antd';

function NotLoggedIn(props) {
    return (
        <>
            <div className="notloggedin">
                <Empty description={`Looks like you're not logged in, please create an account or log in`} />
            </div>
        </>
    );
}

export default NotLoggedIn;

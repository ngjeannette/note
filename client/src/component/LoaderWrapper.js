import React from 'react';
import { Spin } from 'antd';
import '../App.scss';

const LoaderWrapper = ({ isLoading, children }) => (
    isLoading ? (
        <div className="loginWrapper">
            <Spin size="large" />
        </div>
    ) : (
        <>
            {children}
        </>
        )
);

export default LoaderWrapper;
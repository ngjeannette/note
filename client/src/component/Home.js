import React from 'react';
import '../App.scss';
import image from '../image/1.png'

function Home(props) {
    return (
        <>
            <div className="home">
                <div className="home-info">
                    <h1>Many Notes </h1>
                    <p>Not just one note, but many notes. Are we in agreeance pixel pushing ultimate measure of success, let's prioritize the low-hanging fruit. Talk to the slides. Commitment to the cause upstream selling deploy, or onward and upward, productize the deliverables and focus on the bottom line but blue sky baseline. Define the underlying principles that drive decisions and strategy for your design language </p>
                </div>
                <div className="home-image">
                    <img src={image} />
                </div>
            </div>
        </>
    );
}

export default Home;

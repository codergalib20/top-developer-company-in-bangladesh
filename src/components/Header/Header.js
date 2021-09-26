import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                 <div className="header-top">
                    <div className="container">
                        <ul>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Content</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h2 className="main-title">Web development bangladesh.</h2>
                        <p>The list of top 15 web developments company in bangladesh.</p>
                        <h2 className="salary">Top salary is $5000 dollar</h2>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
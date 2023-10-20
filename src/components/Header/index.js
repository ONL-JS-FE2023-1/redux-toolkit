import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>My Site</h1>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
            <div>
                <button>Switch theme</button>
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <h1>My Site</h1>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>Link 1</li>
                    <li className={styles.navListItem}>Link 2</li>
                    <li className={styles.navListItem}>Link 3</li>
                </ul>
            </nav>
            <div>
                <button>Switch theme</button>
            </div>
        </header>
    );
}

export default Header;

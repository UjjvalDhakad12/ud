import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1>Ujjval Dhakad</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}><a href="#home">Home</a></li>
                <li style={styles.navItem}><a href="#projects">Projects</a></li>
                <li style={styles.navItem}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        color: 'white',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
    },
    navItem: {
        margin: '0 15px',
    },
};

export default Navbar;

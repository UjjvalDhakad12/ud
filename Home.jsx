import React from 'react';

const Home = () => {
    return (
        <div style={styles.home}>
            <h2>Welcome to My Portfolio</h2>
            <p>This is a showcase of my work and skills.</p>
        </div>
    );
};

const styles = {
    home: {
        padding: '50px',
        textAlign: 'center',
        backgroundImage: 'url("public/pexels-mikhail-nilov-6964173.jpg")', // Apna background image URL yahan daalein
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Height set karein
        color: 'white', // Text color ko change karein agar zarurat ho
    },
};

export default Home;

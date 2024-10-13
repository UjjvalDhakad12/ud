import React from 'react';

// Assuming you have the images in the public folder
const facebookIcon = 'public/f.jpeg';
const instagramIcon = 'public/th.jpeg';
const linkedinIcon = 'public/linkedin.png';

const Contact = () => {
    return (
        <div style={styles.contact}>
            <h2>Contact Me</h2>
            <p>Contact form will be here.</p>
            <div style={styles.socialMedia}>
                <a href="https://www.facebook.com/ujjval.dhakad.79?locale=hi_IN" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" style={styles.icon} />
                </a>
                <a href="https://www.instagram.com/ujjvaldhakad12/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" style={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/ujjval-dhakad-475102278/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
                </a>
            </div>
        </div>
    );
};

const styles = {
    contact: {
        padding: '50px',
        textAlign: 'center',
    },
    socialMedia: {
        marginTop: '20px',
    },
    icon: {
        margin: '0 10px',
        width: '30px', // Set the width as needed
        height: '30px', // Set the height as needed
    },
};

export default Contact;

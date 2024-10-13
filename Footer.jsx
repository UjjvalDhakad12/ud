import React, { useState } from 'react';
import './Footer.css'; // Ensure this file exists

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('access_key', '033d9d92-fc17-4b7c-ad17-b00b5836ec9c');
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(result => {
            console.log(result); // Handle response
            window.location.href = "https://yourhomepage.com"; // Replace with your homepage URL
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <footer style={styles.footer}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={styles.textarea}
                />
                <button type="submit" style={styles.button}>Send</button>
            </form>
            <p>© 2024 My Portfolio. All Rights Reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        opacity: 0,
        animation: 'fadeIn 1s forwards',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        width: '80%',
        transition: 'border-color 0.3s ease',
    },
    textarea: {
        margin: '10px 0',
        padding: '10px',
        width: '80%',
        height: '100px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#555',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
};

export default Footer;

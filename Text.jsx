import React from 'react';
import './Text.css'; // CSS file for animations

const Text = () => {
    const images = [
        {
            src: 'public/pexels-padrinan-1591061.jpg',
            alt: 'Image 1',
            text: 'HTML',
            paragraph: `
                HTML, or HyperText Markup Language, is the standard language used to create and design documents on the web. 
                It structures the content of a webpage using elements like headings, paragraphs, links, and images. 
                By using HTML, developers can build interactive and visually appealing websites that are accessible across various devices.
            `
        },

        {
            src: 'public/pexels-realtoughcandy-11035386.jpg',
            alt: 'Image 2',
            text: 'CSS',
            paragraph: `
                CSS, or Cascading Style Sheets, is used to style HTML elements on web pages. 
                It enables developers to apply colors, fonts, and layouts, enhancing the visual appeal. 
                CSS also supports responsive design, ensuring a great user experience across devices.
            `
        },

        {
            src: 'public/png-javascript-badge-picture-8.png',
            alt: 'Image 3',
            text: 'JS',
            paragraph: `
                JavaScript is a versatile programming language primarily used for creating dynamic and interactive web content. 
                It allows developers to implement complex features such as animations, form validations, and real-time updates. 
                With the rise of frameworks and libraries like React and Node.js, JavaScript has become essential for both front-end and back-end development.
            `
        },
        
    ];

    return (
        <div className="image-container">
            <h1>About</h1>
            <div className="images">
                {images.map((image, index) => (
                    <div className="image-card" key={index}>
                        <img src={image.src} alt={image.alt} className="image" />
                        <p>{image.text}</p>
                        <p className="animated-paragraph">{image.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Text;

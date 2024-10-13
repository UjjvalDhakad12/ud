import React from 'react';
import './View.css'; // CSS file ko import karna na bhoolen

const projects = [
    {
        title: 'Project 1',
        images: ['image1a.jpg', 'image1b.jpg', 'image1c.jpg'],
    },
    {
        title: 'Project 2',
        images: ['image2a.jpg', 'image2b.jpg', 'image2c.jpg'],
    },
    {
        title: 'Project 3',
        images: ['image3a.jpg', 'image3b.jpg', 'image3c.jpg'],
    },
    {
        title: 'Project 4',
        images: ['image4a.jpg', 'image4b.jpg', 'image4c.jpg'],
    },
    {
        title: 'Project 5',
        images: ['image5a.jpg', 'image5b.jpg', 'image5c.jpg'],
    },
];

const View = () => {
    return (
        <div className="view-container">
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <h2>{project.title}</h2>
                    <div className="image-container">
                        {project.images.map((img, imgIndex) => (
                            <img src={img} alt={`${project.title} - Image ${imgIndex + 1}`} key={imgIndex} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default View;

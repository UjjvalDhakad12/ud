import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
    const files = [
        { name: 'Random password generator', url: 'public/p1.zip' },
        { name: 'multiplication table generator', url: 'public/p2.zip' },
        { name: 'calculator', url: 'public/p3.zip' },
    ];

    const handleDownload = (fileUrl) => {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileUrl.split('/').pop(); // Use the file name from the URL
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleViewCode = () => {
        // Change this to your actual code repository link
        const repoUrl = 'src/View.jsx'; 
        window.open(repoUrl, '_blank');
    };

    return (
        <div style={styles.projects}>
            <h2>My Projects</h2>
            <p>Project details will be listed here.</p>
            <div className="button-container">
                {files.map((file, index) => (
                    <button 
                        key={index} 
                        className="download-button" 
                        onClick={() => handleDownload(file.url)}
                    >
                        Download {file.name}
                    </button>
                ))}
            </div>
            <button 
                className="view-code-button" 
                onClick={handleViewCode}
            >
                View Code
            </button>
        </div>
    );
};

const styles = {
    projects: {
        padding: '50px',
    },
};

export default Projects;

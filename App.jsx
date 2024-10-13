import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Text from './text';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="text"><Text/></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;

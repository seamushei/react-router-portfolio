import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './Homepage';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

function App() {
  const info = "I'm a cool dude"
  const posts = [
    {
      date: "March 21st, 2020",
      title: "Haha this date hasn't even happened yet",
      content: "Suck it time space continuum"
    },
    {
      date: "Feb 21st, 2020",
      title: "Re: Valentine's Day",
      content: "I've made some mistakes. Okay, look. I wasn't going to drink that much but Thinh peer pressured me!"
    },
    {
      date: "Jan 21st, 2020",
      title: "First Day at GA",
      content: "I don't even know how I'm writing this blog post in a JS file using React already but wow I've learned so much already!"
    }
  ]; 
  
  return (
    <Router>
      <div className="title">
        <h1>Welcome to Dean Town</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/homepage">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="wrapper">
        <Route path="/homepage" component={Homepage} />
        <Route path="/blog" render={() => <Blog posts={posts} />} />
        <Route path="/About" render={() => <About info={info} />} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;

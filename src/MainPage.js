import React, { Component } from 'react';
import { DirectoryPage } from './directory.js';
import { AboutPage } from './about-page.js';
import { IntroPage } from './intro-page.js';
import classNames from 'classnames';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export class MainPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-header">
            <h3>Big List of Decentralized Web Initiatives</h3>
          </div>
          <div className="main-body">
            <ul className="main-menu">
              <li><Link to="/">Manifesto</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <Route exact path="/" component={IntroPage} />
            <Route path="/projects" component={DirectoryPage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

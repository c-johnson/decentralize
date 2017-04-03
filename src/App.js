import React, { Component } from 'react';
import './App.css';
import { Directory } from './directory.js';
import { IntroText } from './intro-text.js';
import classNames from 'classnames';

class App extends Component {
  constructor(args) {
    super(...args);

    this.state = {
      hello: "thing",
      tabs: ['Manifesto', 'Contenders', 'About'],
      currentTab: 'Manifesto',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    this.setTabElements();
  }

  setTabElements() {
    const tabElements = this.state.tabs.map((tabName) => {
      const classes = classNames({
        active: tabName === this.state.currentTab
      });

      return (
        <li className={classes} data-href={tabName} onClick={this.handleMenuClick} key={tabName}>{tabName}</li>
      )
    })

    this.setState({
      tabElements: tabElements
    });
  }

  handleMenuClick(event) {
    this.setState({
      currentTab: event.target.dataset.href
    }, () => {
      this.setTabElements();
    });
  }

  render() {
    const tabElements = this.state ? this.state.tabElements : "";

    return (
      <div className="App">
        <div className="App-header">
          <h3>Decentralized Web Initiatives</h3>
        </div>
        <div className="main-body">
          <ul className="main-menu">
            {tabElements}
          </ul>
          <IntroText />
          <Directory />
        </div>
      </div>
    );
  }
}

export default App;

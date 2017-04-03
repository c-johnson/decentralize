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
      currentTab: 'Contenders',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    this.renderTabs();
  }

  renderTabs() {
    const tabElements = this.state.tabs.map((tabName) => {
      const classes = classNames({
        active: tabName === this.state.currentTab
      });

      return (
        <li className={classes} data-href={tabName} onClick={this.handleMenuClick} key={tabName}>{tabName}</li>
      )
    })

    const bodyElementsMap = {
      Manifesto: () => { return (
        <IntroText />
      )},
      Contenders: () => { return (
        <Directory />
      )},
      About: () => { return (
        <h2>About!</h2>
      )},
    }

    this.setState({
      tabElements: tabElements,
      bodyElements: bodyElementsMap[this.state.currentTab](),
    });
  }

  handleMenuClick(event) {
    this.setState({
      currentTab: event.target.dataset.href
    }, () => {
      this.renderTabs();
    });
  }

  render() {
    const tabElements = this.state ? this.state.tabElements : "";
    const bodyElements = this.state ? this.state.bodyElements : "";

    return (
      <div className="App">
        <div className="App-header">
          <h3>Big List of Decentralized Web Initiatives</h3>
        </div>
        <div className="main-body">
          <ul className="main-menu">
            {tabElements}
          </ul>
          {bodyElements}
        </div>
      </div>
    );
  }
}

export default App;

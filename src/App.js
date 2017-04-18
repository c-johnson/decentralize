import React, { Component } from 'react';
import './App.css';
import { Directory } from './directory.js';
import { IntroText } from './intro-text.js';
import classNames from 'classnames';
import KnightGrant from './pdfs/KnightGrant.pdf'

class App extends Component {
  constructor(args) {
    super(...args);

    this.state = {
      hello: "thing",
      tabs: ['Manifesto', 'Projects', 'About'],
      currentTab: 'Projects',
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
    });

    // debugger

    const bodyElementsMap = {
      Manifesto: () => { return (
        <IntroText />
      )},
      Projects: () => { return (
        <Directory />
      )},
      About: () => {
        return (
        <div>
          <p>Hi, my name is Chris, although I sometimes go by John Henry online. I'm researching decentralized alternatives to the current web software ecosystem. There's a lot of work to do; if you hear of any good work being done in this space, please drop me a line.</p>

          <p>I wrote a thing about Mastodon <a href="https://medium.com/@thejohnhenry/mastodon-is-dead-in-the-water-888c10e8abb1">here</a></p>

          <p>I have an in-progress grant application for the Knight Foundation's Protoype Fund <a href={KnightGrant}>here</a></p>

          <p>You can contact me via:</p>

          <ul>
          <li>Email: chris at cjohnson dot eye ohhh</li>
          <li>The damned birdsite: <a href="https://twitter.com/ckhonson" target="_blank">@ckhonson</a></li>
          <li>Mastodon.social: <a href="https://mastodon.social/@johnhenry" target="_blank">johnhenry@mastodon.social</a></li>
          <li>Wandering aimlessly around San Francisco, California</li>
          </ul>

          <p>I'm organizing a Slack group soon (may move to Riot.im) to discuss the Index and advance specific projects in the decentralization space. If you're interested, send me an email at the above address with a short description of your intent and any current work you're doing with decentralized web technology. <b>Only people seriously engaged in furthering decentralized technology</b> will be invited, and membership will be kept small during the initial period.</p>
        </div>
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

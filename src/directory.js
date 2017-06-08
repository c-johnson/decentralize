import React, { Component } from 'react';
import './directory.css';
import { ProjectList } from './project-list';
import { ListResources } from './components/list-resources';
import { ListUpdates } from './components/list-updates';
import { ListNotable } from './components/list-notable';

export class DirectoryPage extends Component {
  constructor(args) {
    super(...args);

    this.state = {
      whichActive: false,
      whatActive: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleWhichClick = this.handleWhichClick.bind(this);
    this.handleWhatClick = this.handleWhatClick.bind(this);
  }

  handleWhichClick(e) {
    this.setState({
      whichActive: !this.state.whichActive,
    });
  }

  handleWhatClick(e) {
    this.setState({
      whatActive: !this.state.whatActive,
    });
  }

  render() {
    const projects = ProjectList;

    const childrenItems = projects.map((proj, index) => {
      return (
        <DirectoryItem proj={proj} key={index} />
      );
    });

    const whatTriangle = this.state.whatActive ? "▾" : "▸";
    const whichTriangle = this.state.whichActive ? "▾" : "▸";

    const whatHideClass = this.state.whatActive ? " active" : "";
    const whichHideClass = this.state.whichActive ? " active" : "";

    return (
      <div className="medium-container">
        <div className="which-projects-header" onClick={this.handleWhatClick}>
          <span>{whatTriangle}</span><h4>What is a "decentralized web initiative?"</h4>
        </div>

        <div className={`which-projects-body${whatHideClass}`}>
          <p className="intro-initial">
            A "decentralized web initiative" is a specific kind of software project, usually a protocol or suite of software tools, that greatly increase the ability of application developers to control users' computing experience and personal data. These initiatives overcome limitations of the current software ecosystem that are unsolvable via traditional capitalist incentives.
          </p>
          <p>
            When you use a website like facebook.com, all of your data is captured by their servers. This data is not portable between different applications or user interfaces, which stifles software innovation. We're currently unable to coordinate development power through either traditional VC-backed startups, benevolent enterprise monoliths, or international standards bodies. (While they do incredible work, standards bodies are unable to iterate rapidly enough for the demands of modern social-hungry users).
          </p>
          <p>
            The current internet runs via an ad monetization model, where attention generated from new websites is converted into advertising dollars and sold on an open market. This means that the <b>priorities of social software companies will never be aligned with the values of users, society, or our political system</b>. Facebook itself doesnt have to be malicious if it incentivized to maximize user attention, which in turn shifts the entire information space in the direction of clickbait, fake news, incendiary analysis, shallow opinions, and an otherwise unstoppable garbage fire tornado of inane nonsense that dominates a growing amount of our attention and governs large swaths of our social and economic world.
          </p>
          <p>
            The following initiatives are trying in part to democratize some aspect of the development of our digital life through technological standardization.
          </p>
        </div>

        <div className="which-projects-header" onClick={this.handleWhichClick}>
          <span>{whichTriangle}</span><h4>Which projects are included?</h4>
        </div>

        <div className={`which-projects-body${whichHideClass}`}>
          <p>This list is intended to be exhaustive, but this is only an early version. There are hundreds of initiatives to categorize, so for the initial period, I'm focusing on projects with <b>significant traction</b>, a <b>large userbase</b>, or a <b>clear vision</b> of the problem with centralized silos.</p>

          <p>For the most part, these are not <b>companies</b>. Companies will play a crucial role in the future of the decentralized software, but in our current funding ecosystem, the temptation for any individual company to abandon its principles and monitize its users' attention is too great for us to trust. Likely the biggest roadblock to widespread adoption of decentralized services is fostering a sustainable ecosystem of businesses that want to make <i>reasonable, medium-sized</i> profits, as opposed to trying to dominate the whole system, but this is an open problem.</p>

          <p><b>Blockchain</b>-based initiatives are not included in this list. There are several Blockchain initiatives with the potential to solve this problem (like <a href="https://ethereum.org/" target="_blank">Ethereum</a> and <a href="https://blockstack.org/" target="_blank">Blockstack</a>), and blockchains will likely play a large role in the long-run (particularly around financial decentralization). For now, they are simply too complex and opaque for average developers or users to fully understand. Until I find an initiative that takes the problems of <a href="https://urbit.org/blog/dao/" target="_blank">digital governance seriously</a>, it's unlikely that advocates of any one particular cryptocurrency will be able to credibly signal that they are not just drumming up public interest for a currency they already own large stores of.</p>

          <p>Finally, there are many great <b>organizations</b> and <b>associations</b> interested in software monoculture, civic society technology, and issues with media/journalism that arise from social software. I will make a separate list for those organizations, as it is equally important to direct people to organizations focusing on similar problems as it is to solve the technological problems themselves. IndieWebCamp is included because they were a huge early influence for many other decentralization projects.</p>

          <p>If you would like to add to this list, or if you are a core member of a listed project, please contact me via the "About" page. I will be opening up lots of avenues to contribute and expand this list in the coming weeks.</p>
        </div>

        <div className="directory-list">
          {childrenItems}
        </div>
      </div>
    );
  }
}

class DirectoryItem extends Component {
  constructor(args) {
    super(...args);

    this.state = {
      active: false,
      deferLoading: true,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(e) {
    this.setState({
      active: !this.state.active,
    });
  }

  componentDidMount(e) {
    const clientHeight = this._reactInternalInstance._renderedComponent._hostNode.children[1].clientHeight;
    this.setState({
      clientHeight: clientHeight,
    });
  }

  render() {
    const triangle = this.state.active ? "▾" : "▸";
    const proj = this.props.proj;
    const visibleClass = this.state.clientHeight ? "" : " hidden";

    let bodyStyle;

    if (this.state.clientHeight) {
      bodyStyle = {maxHeight: 0};
    } else {
      bodyStyle = {};
    }

    if (this.state.active && this.state.clientHeight) {
      bodyStyle = {maxHeight: this.state.clientHeight};
      if (this.state.deferLoading) {
        setTimeout(() => {
          this.setState({
            deferLoading: false
          });
        }, 450);
      }
    }

    return (
      <div className={`directory-list-item${visibleClass}`}>
        <div className="directory-list-item-header" onClick={this.handleHeaderClick}>
          <div className="directory-list-dropdown-arrow">
            <span>{triangle}</span>
          </div>
          <div className="directory-list-name">
            <h3>{proj.name}</h3>
            <div><a href={proj.homepage} target="_blank" className="unstyled-link" onClick={(e) => {e.stopPropagation()}}>{proj.homepage}</a></div>
          </div>
          <div className="directory-list-type">
            <h3>Type</h3>
            <div>{proj.type}</div>
          </div>
          <div className="directory-list-last-updated">
            <h3>Last updated</h3>
            <div>{proj.lastUpdated}</div>
          </div>
        </div>
        <div className={`directory-list-body`} style={bodyStyle}>
          <div className="directory-spacer"></div>
          <div className="directory-body-descriptions">
            <div className="directory-description-snippet">
              <h4>Manifesto</h4>
              <a href={proj.manifestoLink} target="_blank">{proj.manifestoLink}</a>
            </div>
            <div className="directory-description-snippet">
              <h4>Description (theirs)</h4>
              <div>{proj.descriptionTheirs}</div>
            </div>
            <ListNotable notablePeople={proj.notablePeople} name={proj.name} />
          </div>
          <ListResources resources={proj.resources} deferLoading={this.state.deferLoading} />
          <ListUpdates updates={proj.updates} />
        </div>
      </div>
    );
  }
}

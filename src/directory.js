import React, { Component } from 'react';
import './directory.css';
import { ProjectList } from './project-list';

export class Directory extends Component {
  constructor(args) {
    super(...args);

    this.state = {
      active: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleWhichClick = this.handleWhichClick.bind(this);
  }

  handleWhichClick(e) {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const projects = ProjectList;

    const childrenItems = projects.map((proj, index) => {
      return (
        <DirectoryItem proj={proj} key={index} />
      );
    });

    const triangle = this.state.active ? "▾" : "▸";
    const hideClass = this.state.active ? " active" : "";

    return (
      <div className="medium-container">
        <div className="which-projects-header" onClick={this.handleWhichClick}>
          <span>{triangle}</span><h4>Which projects are included?</h4>
        </div>

        <div className={`which-projects-body${hideClass}`}>
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
    };

    // This binding is necessary to make `this` work in the callback
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(e) {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const triangle = this.state.active ? "▾" : "▸";
    const hideClass = this.state.active ? " active" : "";
    const proj = this.props.proj;

    let resourceElements;
    let updateElements;
    let notableElements;

    if (proj.resources) {
      resourceElements = proj.resources.map((resource, index) => {
        if (resource.type === "video-youtube") {
          return (
            <li key={index}>
              <iframe width="230" height="128" src={`${resource.src}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </li>
          );
        } else if (resource.type === "video-embed") {
          return (
            <li key={index}>
              <video src={resource.src} width="230" controls/>
            </li>
          );
        } else if (resource.type === "link") {
          return (
            <li key={index}>
              <a href={resource.src} target="_blank">link</a>. <span>{resource.description}</span>
            </li>
          )
        }
      });
    } else {
      resourceElements = null;
    }

    if (proj.updates) {
      updateElements = proj.updates.map((update, index) => {
        let dateElem;
        if (update.linkSrc) {
          dateElem = (<a href={update.linkSrc} target="_blank" className="unstyled-link"><b>{update.date}</b></a>);
        } else {
          dateElem = (<b>{update.date}</b>);
        }

        return (
          <li key={index}>
            {dateElem}: <span>{update.description}</span>
          </li>
        );
      });
    } else {
      updateElements = null;
    }

    if (proj.notablePeople) {
      notableElements = proj.notablePeople.map((person, index) => {
        return (
          <li key={index}>
            <a href={person.homepage} target="_blank"><b>{person.name}</b></a>
            <span>: </span>
            <span>{person.description}</span>
          </li>
        )
      });
    } else {
      notableElements = null;
    }

    const notableText = (proj.name === 'Urbit') ? "Infamous people" : "Notable people";
    const notableBlock = (proj.notablePeople) ? (
      <div className="directory-description-snippet">
        <h4>{notableText}</h4>
        <ul>
          {notableElements}
        </ul>
      </div>
    ) : null;

    return (
      <div className="directory-list-item">
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
        <div className={`directory-list-body${hideClass}`}>
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
            {notableBlock}
          </div>
          <div className="directory-body-resources">
            <div className="directory-description-snippet">
              <h4>Resources</h4>
              <ul>
                {resourceElements}
              </ul>
              <div><a href="#">See more...</a></div>
            </div>
          </div>
          <div className="directory-body-updates">
            <div className="directory-description-snippet">
              <h4>Updates</h4>
              <ul>
                {updateElements}
              </ul>
              <div><a href="#">See more...</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

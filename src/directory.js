import React, { Component } from 'react';
import './directory.css';

export class Directory extends Component {
  render() {
    const projects = [{
      name: 'Camlistore',
      homepage: "https://camlistore.org",
      type: "Protocol",
      lastUpdated: "April 2017",
      age: 6,
      manifestoLink: "https://camlistore.org/doc/overview",
      description: "Camlistore is a set of open source formats, protocols, and software for modeling, storing, searching, sharing and synchronizing data in the post-PC era. Data may be files or objects, tweets or 5TB videos, and you can access it via a phone, browser or FUSE filesystem.", // their description
      updates: [{
        date: "April 5, 2017",
        description: "Released version '4/17': Adds support for GopherJS (a Go -> Javascript compiler), scanningcabnet (store scanned documents), and Plaid.com (storing financial data)",
      }, {
        date: "April 24, 2016",
        description: "Presented a great overview of Camlistore at LinuxFest Northwest",
      }],
      resources: [{
        type: "youtube-video",
        src: "https://www.youtube.com/embed/8Dk2iVlc67M",
      }],
    }, {
      name: 'Camlistore',
    }, {
      name: 'Camlistore',
    }];

    const childrenItems = projects.map((proj, index) => {
      return (
        <DirectoryItem proj={proj} key={index} />
      );
    });

    return (
      <div className="directory-list">
        {childrenItems}
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

    if (proj.resources) {
      resourceElements = proj.resources.map((resource, index) => {
        if (resource.type === "youtube-video") {
          return (
            <li key={index}>
              <iframe width="230" height="128" src={`${resource.src}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </li>
          );
        }
      });
    } else {
      resourceElements = null;
    }

    if (proj.updates) {
      updateElements = proj.updates.map((update, index) => {
        return (
          <li key={index}>
            <b>{update.date}</b>: <span>{update.description}</span>
          </li>
        );
      });
    } else {
      updateElements = null;
    }

    return (
      <div className="directory-list-item">
        <div className="directory-list-item-header" onClick={this.handleHeaderClick}>
          <div className="directory-list-dropdown-arrow">
            <span>{triangle}</span>
          </div>
          <div className="directory-list-name">
            <h3>{proj.name}</h3>
            <div>{proj.homepage}</div>
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
              <h4>Description</h4>
              <div>{proj.description}</div>
            </div>
          </div>
          <div className="directory-body-resources">
            <div className="directory-description-snippet">
              <h4>Resources</h4>
              <ul>
                {resourceElements}
              </ul>
            </div>
          </div>
          <div className="directory-body-updates">
            <div className="directory-description-snippet">
              <h4>Updates</h4>
              <ul>
                {updateElements}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

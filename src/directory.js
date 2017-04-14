import React, { Component } from 'react';
import './directory.css';

export class Directory extends Component {
  render() {
    const projects = [{
      name: 'Camlistore',
      homepage: "https://camlistore.org",
      type: "Protocol",
      lastUpdated: "January 2017",
      manifestoLink: "https://camlistore.org/doc/overview",
      description: "Camlistore is a set of open source formats, protocols, and software for modeling, storing, searching, sharing and synchronizing data in the post-PC era. Data may be files or objects, tweets or 5TB videos, and you can access it via a phone, browser or FUSE filesystem.",
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

    return (
      <div className="directory-list-item">
        <div className="directory-list-item-header" onClick={this.handleHeaderClick}>
          <div className="directory-list-dropdown-arrow">
            <span>{triangle}</span>
          </div>
          <div className="directory-list-name">
            <h3>{this.props.proj.name}</h3>
            <div>{this.props.proj.homepage}</div>
          </div>
          <div className="directory-list-type">
            <h3>Type</h3>
            <div>{this.props.proj.type}</div>
          </div>
          <div className="directory-list-last-updated">
            <h3>Last updated</h3>
            <div>{this.props.proj.lastUpdated}</div>
          </div>
        </div>
        <div className={`directory-list-body${hideClass}`}>
          <div className="directory-spacer"></div>
          <div className="directory-body-descriptions">
            <div className="directory-description-snippet">
              <h4>Manifesto</h4>
              <a href={this.props.proj.manifestoLink} target="_blank">{this.props.proj.manifestoLink}</a>
            </div>
            <div className="directory-description-snippet">
              <h4>Description</h4>
              <div>{this.props.proj.description}</div>
            </div>
          </div>
          <div className="directory-body-resources">
            <div className="directory-description-snippet">
              <h4>Resources</h4>
              <div>Some other cool stuff, I bet</div>
            </div>
          </div>
          <div className="directory-body-updates">
            <div className="directory-description-snippet">
              <h4>Updates</h4>
              <div>Updates?</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

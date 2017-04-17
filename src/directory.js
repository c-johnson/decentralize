import React, { Component } from 'react';
import './directory.css';
import { ProjectList } from './project-list';
import { Velocity } from 'velocity-animate';

export class Directory extends Component {
  render() {
    const projects = ProjectList;

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
    let notableElements;

    if (proj.resources) {
      resourceElements = proj.resources.map((resource, index) => {
        if (resource.type === "video-youtube") {
          return (
            <li key={index}>
              <iframe width="230" height="128" src={`${resource.src}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </li>
          );
        } else if (resource.type === "link") {
          return (
            <li key={index}>
              <a href={resource.src} target="_blank">{resource.description}</a>
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
    }

    const notableText = (proj.name === 'Urbit') ? "Infamous people" : "Notable people";

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
              <h4>Description (theirs)</h4>
              <div>{proj.descriptionTheirs}</div>
            </div>
            <div className="directory-description-snippet">
              <h4>{notableText}</h4>
              <ul>
                {notableElements}
              </ul>
            </div>
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

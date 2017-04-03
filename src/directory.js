import React, { Component } from 'react';
import './directory.css';

export class Directory extends Component {
  render() {
    const projects = [{
      name: 'Camlistore',
    }, {
      name: 'Camlistore',
    }, {
      name: 'Camlistore',
    }];

    const childrenItems = projects.map((proj, index) => {
      return (
        <DirectoryItem name={proj.name} key={index} />
      );
    });

    return (
      <div>
        <div className="directory-header">
          <div className="directory-title">
            <span className="directory-title-icon"></span>
            <h2>Principled Software</h2>
          </div>
          <h3 className="directory-subtitle">DIRECTORY</h3>
        </div>
        <ul className="directory-list">
          {childrenItems}
        </ul>
      </div>
    );
  }
}

class DirectoryItem extends Component {
  render() {
    <li className="directory-list-item">
      <h3>{this.props.name}</h3>
    </li>
  }
}

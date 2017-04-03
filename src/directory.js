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
        <ul className="directory-list">
          {childrenItems}
        </ul>
      </div>
    );
  }
}

class DirectoryItem extends Component {
  render() {
    return (
      <li className="directory-list-item">
        <h3>{this.props.name}</h3>
      </li>
    );
  }
}

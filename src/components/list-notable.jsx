import React, { Component } from 'react';
// import './directory.css';

export class ListNotable extends Component {
  render() {
    const props = this.props;
    if (!props.notablePeople) {
      return null;
    }

    const notableElements = props.notablePeople.map((person, index) => {
      return (
        <li key={index}>
          <a href={person.homepage} target="_blank"><b>{person.name}</b></a>
          <span>: </span>
          <span>{person.description}</span>
        </li>
      )
    });

    const notableText = (props.name === 'Urbit') ? "Infamous people" : "Notable people";

    return (
      <div className="directory-description-snippet">
        <h4>{notableText}</h4>
        <ul>
          {notableElements}
        </ul>
      </div>
    );
  }
}

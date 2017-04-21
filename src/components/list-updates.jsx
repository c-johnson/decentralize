import React, { Component } from 'react';
// import './directory.css';

export class ListUpdates extends Component {
  render() {
    const props = this.props;
    if (!props.updates) {
      return null;
    }

    const updateElements = props.updates.map((update, index) => {
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

    return (
      <div className="directory-body-updates">
        <div className="directory-description-snippet">
          <h4>Updates</h4>
          <ul>
            {updateElements}
          </ul>
          <div><a href="#">See more...</a></div>
        </div>
      </div>
    );
  }
}

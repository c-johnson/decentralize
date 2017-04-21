import React, { Component } from 'react';
// import './directory.css';

export class ListResources extends Component {
  render() {
    const props = this.props;
    if (!props.resources) {
      return null;
    }

    const resourceElements = props.resources.map((resource, index) => {
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

    return (
      <div className="directory-body-resources">
        <div className="directory-description-snippet">
          <h4>Resources</h4>
          <ul>
            {resourceElements}
          </ul>
          <div><a href="#">See more...</a></div>
        </div>
      </div>
    );
  }
}

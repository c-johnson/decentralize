import React, { Component } from 'react';

export class IntroPage extends Component {
  render() {
    return (
      <div className="small-container">
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
          The following initiatives are trying in part to democratize some aspect of the development of our digital life through technological standardization. The problems of standardization are well known...
        </p>
        <div className="justify-center">
          <a href="https://xkcd.com/927/" target="_blank"><img src="https://imgs.xkcd.com/comics/chat_systems.png" /></a>
        </div>
        <p>
          We just need to get started.
        </p>
      </div>
    );
  }
}

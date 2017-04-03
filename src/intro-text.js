import React, { Component } from 'react';

export class IntroText extends Component {
  render() {
    return (
      <div className="main-body">
        <p className="App-intro">
          A "decentralized web initiative" is a specific kind of software project, usually a protocol or suite of software tools, intending to greatly increase the ability of application developers (and ultimately end users) to control their computing experience and personal data. These initiatives aim to coordinate developer mindshare to overcome some limitation of the current software ecosystem unable to be solved by traditional capitalist incentives.
        </p>
        <p>
          When you use a website like facebook.com, you type all your data into their servers. This is bad. Everyone knows it's bad, but we're currently unable to coordinate development power through either traditional VC-backed startups, benevolent enterprise monoliths, or international standards bodies who, while they do incredible work, are unable to iterate rapidly enough for the demands of modern social-hungry users.
        </p>
        <p>
          The current internet runs via an ad monetization model, where attention generated from new websites is converted into advertising dollars and sold on an open market. This means that the <b>priorities of software companies to improve social applications will never be aligned with the values of the user, our society, or our political system</b>. Facebook itself doesnt have to be malicious if it incentivized to maximize user attention, which in turn shifts the entire information space in the direction of clickbait, fake news, incendiary analysis, shallow opinions, and otherwise an unstoppable garbage fire tornado of bullshit nonsense that dominates a growing amount of our attention and governs a large swath of our social and economic world.
        </p>
        <p>
          In short, there are few organizations out there batting for the user. And as an extension to that, there is <i>nobody</i> out there batting for the developer, who eventually makes things for the user.
        </p>
        <p>
          The following initiatives are trying in part to democratize some aspect of the development of our digital life through technological standardization. The problems of standardization are well known...
        </p>
        <div className="justify-center">
          <img src="https://imgs.xkcd.com/comics/chat_systems.png" />
        </div>
        <p>
          We just need to get started.
        </p>
      </div>
    );
  }
}

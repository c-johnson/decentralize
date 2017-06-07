import React, { Component } from 'react';
import KnightGrant from './pdfs/KnightGrant.pdf';

export class AboutPage extends Component {
  render() {
    return (
      <div className="small-container">
        <p>Hi, my name is Chris, although I sometimes go by John Henry online. I'm researching decentralized alternatives to the current web software ecosystem. There's a lot of work to do; if you hear of any good work being done in this space, please drop me a line.</p>

        <p>I wrote a thing about Mastodon <a href="https://medium.com/@thejohnhenry/mastodon-is-dead-in-the-water-888c10e8abb1">here</a></p>

        <p>I have an in-progress grant application for the Knight Foundation's Protoype Fund <a href={KnightGrant}>here</a></p>

        <p>You can contact me via:</p>

        <ul>
        <li>Email: chris at cjohnson dot eye ohhh</li>
        <li>The damned birdsite: <a href="https://twitter.com/ckhonson" target="_blank">@ckhonson</a></li>
        <li>Mastodon.social: <a href="https://mastodon.social/@johnhenry" target="_blank">johnhenry@mastodon.social</a></li>
        <li>Wandering aimlessly around San Francisco, California</li>
        </ul>

        <p>I'm organizing a Slack group to discuss the Index and advance specific projects in the decentralization space. If you're interested, send me an email at the above address with a short description of your intent and any current work you're doing with decentralized web technology. Only people seriously engaged in furthering decentralized technology will be invited, and membership will be kept small during the initial period, so please include some indication that you're actively working on the problem and not just passingly interested.</p>
      </div>
    )
  }
}

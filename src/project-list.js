export const ProjectList = [{
  name: 'Camlistore',
  homepage: "https://camlistore.org",
  type: "Protocol",
  lastUpdated: "April 2017",
  yearFounded: 2011,
  manifestoLink: "https://camlistore.org/doc/overview",
  descriptionTheirs: "Camlistore is a set of open source formats, protocols, and software for modeling, storing, searching, sharing and synchronizing data in the post-PC era. Data may be files or objects, tweets or 5TB videos, and you can access it via a phone, browser or FUSE filesystem.",
  updates: [{
    date: "April 5, 2017",
    description: "Released version '4/17': Adds support for GopherJS (a Go -> Javascript compiler), scanningcabnet (store scanned documents), and Plaid.com (storing financial data)",
  }, {
    date: "April 24, 2016",
    description: "Presented a great overview of Camlistore at LinuxFest Northwest",
  }],
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/8Dk2iVlc67M",
  }, {
    type: "video-youtube",
    src: "https://www.youtube.com/embed/yvjeIZgykiA",
  }],
  notablePeople: [{
    name: "Brad Fitzpatrick",
    homepage: "https://bradfitz.com/",
    description: "creator of Livejournal, Golang core team member",
  }],
}, {
  name: 'Urbit',
  homepage: "http://urbit.org/",
  type: "Application",
  lastUpdated: "March 2017",
  manifestoLink: "http://urbit.org/posts/overview/",
  descriptionTheirs: "A personal server is a virtual computer which stores your data, runs your apps, and manages your connected devices. Urbit is a secure peer-to-peer network of personal servers, built on a clean-slate system software stack.",
  updates: [{
    date: "Mar 1, 2017",
    linkSrc: "https://urbit.org/blog/2017.3.1-update/",
    description: "Monthly update: Completed \"arvo\" (kernel) rewrite, progress on new ES6 / React UI, refactoring \"vere\" virtual machine, upgraded documentation system",
  }, {
    date: "Jan 30, 2017",
    linkSrc: "https://urbit.org/blog/2017.1-update/",
    description: "Yearly update: tldr, Tlon is making Urbit useful in 2017. Lots of great screenshots & vision included.",
  }],
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/rkZ3GkeU9kg",
    description: "Yarvin gives talk at Lambdaconf '16, deep-diving into Urbit architecture",
  }, {
    type: "link",
    src: "https://urbit.org/posts/address-space/",
    description: "Urbit's unique plan re: address space"
  }, {
    type: "link",
    src: "https://medium.com/@urbit/design-of-a-digital-republic-f2b6b3109902",
    description: "Design of a digital republic",
  }],
  notablePeople: [{
    name: "Curtis Yarvin",
    homepage: "https://en.wikipedia.org/wiki/Curtis_Yarvin",
    description: "AKA \"Mencius Moldbug\", infamous blogger",
  }]
}, {
  name: "IPFS",
  homepage: "https://ipfs.io/",
  type: "Protocol",
  lastUpdated: "February 2017",
  manifestoLink: "https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf",
  descriptionTheirs: "A peer-to-peer hypermedia protocol to make the web faster, safer, and more open. IPFS aims to replace HTTP and build a better web for all of us.",
  updates: [{
    date: "Mar 24, 2017",
    linkSrc: "https://ipfs.io/blog/23-js-ipfs-0-23/",
    description: "Released js-ipfs 0.23.0; supports a new DAG API, interoperability with go-ipfs, streamlined ipfs instance creation process",
  }, {
    date: "Feb 5, 2017",
    linkSrc: "https://www.youtube.com/embed/hpCxtb2E1as",
    description: "Hosted the IPFS-Ethereum hackathon in Seattle"
  }],
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/HUVmypx9HGI",
    description: "IPFS and the Permanent Web, talk at Stanford",
  }, {
    type: "video-youtube",
    src: "https://www.youtube.com/embed/8CMxDNuuAiQ",
    description: "IPFS Alpha demo (2015)",
  }],
  notablePeople: [{
    name: "Juan Benet",
    homepage: "https://twitter.com/juanbenet",
    description: "Long-time decentralization advocate",
  }],
}, {
  name: "IndieWeb",
  homepage: "https://indieweb.org/",
  type: "Toolsuite",
  lastUpdated: "April 2017",
  manifestoLink: "https://indieweb.org/Why",
  descriptionTheirs: "The IndieWeb is a people-focused alternative to the \"corporate web\". When you post something on the web, it should belong to you, not a corporation. Too many companies have gone out of business and lost all of their users’ data. By joining the IndieWeb, your content stays yours and in your control.",
  updates: [{
    date: "Apr 5, 2017",
    linkSrc: "https://indieweb.org/events/2017-04-05-homebrew-website-club",
    description: "\"Homebrew Website Club\" meets up in Berlin, London, San Francisco, Baltimore, and other places. Open-access meeting to build your personal website, held every couple of weeks in cities around the world."
  }, {
    date: "Nov 16, 2017",
    linkSrc: "https://indieweb.org/2016/MIT2",
    description: "IndieWebCamp meets up at MIT and hosts talks, hack sessions, demos, and community-building. These events are also held periodically in cities around the world",
  }],
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/PfWgin3JlAU#t=2h27m24s",
  }, {
    type: "link",
    src: "https://indiewebify.me/",
    description: "Step-by-step guide on getting started with IndieWeb",
  }, {
    type: "link",
    src: "https://indieweb.org/site-deaths",
    description: "Great list of major site deaths where user content & connections were forever lost",
  }]
}, {
  name: "OStatus (GNU Social & Mastodon)",
  homepage: "https://gnu.io/social/",
  type: "Protocol",
  lastUpdated: "March 2017",
  manifestoLink: "https://www.gnu.org/consensus/manifesto",
  descriptionTheirs: "[My description] Ostatus is a collection of protocols, without a strong central advocacy hub, that implements microblogging (like Twitter) using existing web protocols like ActivityStreams, WebFinger, Salmon, and Atom. Popular implementations include GNU social and Mastodon.",
  updates: [{
    date: "Mar 31, 2017",
    linkSrc: "https://medium.com/hacker-daily/welcome-to-mastodon-111d9227e56a",
    description: "Mastodon, the largest OStatus implementation, gets a huge spike of users, going from about 50k to 300k users across the network in only a couple of weeks",
  }, {
    date: "Jan 11, 2017",
    linkSrc: "https://robek.world/internet/mastodon-social-is-the-twitter-alternative-for/",
    description: "Great overview of \"fediverse\" and OStatus implementations published at robek.world",
  }],
  resources: [{
    type: "link",
    src: "https://medium.com/hacker-daily/mastodon-is-dead-in-the-water-888c10e8abb1",
    description: "Lengthy and critical review of Mastodon / OStatus ecosystem published by one John Henry",
  }, {
    type: "link",
    src: "https://www.fknsrs.biz/blog/don-statusnet-node-part-one-read-protocols.html",
    description: "Good overview of implementation details for underlying Ostatus protocols",
  }]
}, {
  name: "Matrix",
  homepage: "http://matrix.org/",
  type: "Protocol",
  lastUpdated: "April 2017",
  manifestoLink: "http://matrix.org/docs/guides/faq.html",
  descriptionTheirs: "Matrix is an open standard for interoperable, decentralised, real-time communication over IP. It can be used to power Instant Messaging, VoIP/WebRTC signalling, Internet of Things communication - or anywhere you need a standard HTTP API for publishing and subscribing to data whilst tracking the conversation history.",
  updates: [{
    date: "Apr 11, 2017",
    linkSrc: "https://matrix.org/blog/2017/04/11/synapse-0-20-0-is-released/",
    description: "Synapse (reference Matrix implementation) 0.20 released; supports phone numbers as 3PID, several performance and bug fixes,"
  }, {
    date: "Apr 4, 2017",
    linkSrc: "https://matrix.org/blog/2017/04/04/opening-up-cyberspace-with-matrix-and-webvr/",
    description: "Very cool WebVR intergation & demo; allows connecting to Matrix clients through virutal reality, taking first step toward open teleconferencing and VR social discoverability",
  }],
  resources: [{
    type: "video-embed",
    src: "http://bofh.nikhef.nl/events/FOSDEM/2017/AW1.125/matrix_future.mp4",
    description: "Great overview of Matrix ecosystem & future at FOSDEM 2017",
  }, {
    type: "link",
    src: "https://matrix.org",
    description: "Matrix homepage itself documents a wealth of great resources",
  }],
}, {
  name: "Sandstorm",
  homepage: "https://sandstorm.io/",
  type: "Application",
  lastUpdated: "March 2017",
  manifestoLink: "https://sandstorm.io/news/2014-07-21-open-source-web-apps-require-federated-hosting",
  descriptionTheirs: "Sandstorm is a web app hosting platform that enables non-technical end users to install and run arbitrary software. Apps may be downloaded from an app store and installed with one click, like installing apps on your phone. Each app server runs in a secure sandbox, where it cannot interfere with other apps without permission.",
  updates: [{
    date: "Mar 13, 2017",
    linkSrc: "https://sandstorm.io/news/2017-03-13-joining-cloudflare",
    description: "Majority of Sandstorm team joins Cloudflare, with promises to continue development in spare time, but leaving future of Sandstorm uncertain"
  }, {
    date: "Feb 2, 2017",
    linkSrc: "https://sandstorm.io/news/2017-02-06-sandstorm-returning-to-community-roots",
    description: "Sandstorm abandons for-profit enterprise offering & funding, transitioning to back to a fully community-led open source project",
  }],
  resources: [{
    type: "link",
    src: "https://docs.sandstorm.io/en/latest/",
    description: "Sandstorm docs database",
  }, {
    type: "link",
    src: "https://github.com/sandstorm-io/sandstorm/wiki/Sandstorm-Talks",
    description: "List of talks given at places around the world",
  }],
  notablePeople: [{
    name: "Kenton Varda",
    homepage: "http://kentonsprojects.blogspot.com/2011/12/lan-party-optimized-house.html",
    description: "Author of Protocol Buffers V2, Cap'n Proto, and builder of world's best LAN party house",
  }]
}, {
  name: "Scuttlebot / Scuttlebutt",
  homepage: "https://github.com/ssbc/scuttlebot",
  type: "Protocol",
  lastUpdated: "April 2017",
  manifestoLink: "https://www.scuttlebutt.nz/principles.html",
  descriptionTheirs: "Scuttlebot is an open source peer-to-peer log store used as a database, identity provider, and messaging system, that provides global replication, file synchronization, and end-to-end encryption for decentralized messaging applications.",
  updates: [{
    date: "Apr 8, 2017",
    linkSrc: "https://github.com/ssbc/patchwork/releases/tag/v3.3.1",
    description: "Patchwork, a classic social networking application built on SSB, release version 3.3.1, containing many small updates",
  }, {
    date: "Mar 12, 2017",
    description: "Talk given at Javascript NZ (New Zealand), describing benefits of \"subjectivity\" in application design",
  }],
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/P5K18XssVBg"
  }, {
    type: "link",
    src: "https://www.scuttlebutt.nz/",
    description: "Secure Scuttlebutt Handbook",
  }, {
    type: "link",
    src: "https://staltz.com/an-off-grid-social-network.html",
    description: "Well-written overview of SSB ecosystem",
  }]
}, {
  name: 'Solid',
  homepage: "https://solid.mit.edu/",
  type: "Protocol",
  lastUpdated: "April 2016",
  manifestoLink: "https://github.com/solid/solid-spec",
  descriptionTheirs: "Solid (derived from \"social linked data\") is a proposed set of conventions and tools for building decentralized social applications based on Linked Data principles. Solid is modular and extensible and it relies as much as possible on existing W3C standards and protocols.",
  updates: [{
    date: "Apr 11, 2016",
    description: "Presented \"A Demonstration of the Solid Platform for Social Web Applications\" paper at 25th World Wide Web conference in Montreal",
  }, {
    date: "Feb 23, 2016",
    description: "Last significant update of published spec (at github.com/solid/solid-spec)"
  }],
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/BPZiBDPKiGk",
    description: "Talk at Web.br, 2015, from Andrei Sambra",
  }, {
    type: "link",
    src: "http://ds.qcri.org/publications/2016-mansour-www.pdf",
    description: "[pdf] A Demonstration of the Solid Platform for Social Web Applications",
  }],
  notablePeople: [{
    name: "Tim Berners-Lee",
    homepage: "https://www.w3.org/People/Berners-Lee/",
    description: "Founder of the World Wide Web, Director of W3C"
  }]
}];

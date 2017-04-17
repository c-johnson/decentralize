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
  resources: [{
    type: "video-youtube",
    src: "https://www.youtube.com/embed/HUVmypx9HGI",
    description: "IPFS and the Permanent Web, talk at Stanford",
  }, {
    type: "video-youtube",
    src: "https://www.youtube.com/embed/8CMxDNuuAiQ",
    description: "IPFS Alpha demo (2015)",
  }],
  updates: [{
    date: "Mar 24, 2017",
    linkSrc: "https://ipfs.io/blog/23-js-ipfs-0-23/",
    description: "Released js-ipfs 0.23.0; supports a new DAG API, interoperability with go-ipfs, streamlined ipfs instance creation process",
  }, {
    date: "Feb 5, 2017",
    linkSrc: "https://www.youtube.com/watch?v=hpCxtb2E1as",
    description: "Hosted the IPFS-Ethereum hackathon in Seattle"
  }],
  notablePeople: [{
    name: "Juan Benet",
    homepage: "https://twitter.com/juanbenet",
    description: "Long-time decentralization advocate",
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
}];

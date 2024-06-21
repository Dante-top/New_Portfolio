import self from "../img/self.png";
import mbh from "../img/MBH.png";
import koa from "../img/KingdomOfAnts-1.png";
import akc from "../img/AKC.png";
import chicks from "../img/MemeChicks-1.png";
import persona from "../img/Persona-1.png";
import pit from "../img/Pit.png";
import cbs from "../img/Club Brugge Shop.png";
import air from "../img/on2air.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgba(17,146,220,1)", "rgba(0,212,255,1)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Araya",
  lastName: "Masami",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "💪",
      text: "Your success is my success - my motto",
    },
    {
      emoji: "🌎",
      text: "based in the Toronto, Canada",
    },
    {
      emoji: "💻",
      text: "Full-Stack Blockchain Developer",
    },
    {
      emoji: "📧",
      text: "masamiaraya093@gmail.com",
    },
    {
      emoji: "📃 ",
      text: "Araya's Resume",
      link: "https://flowcv.com/resume/nk53kh16a9",
    },
  ],
  socials: [
    {
      link: "https://t.me/dante924",
      icon: "fa fa-telegram",
      label: "telegram",
    },
    {
      link: "https://github.com/Dante-top",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/araya-masami/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://x.com/ArayaMasami",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    {
      link: "https://calendly.com/masamiaraya/30min",
      icon: "fa fa-calendar",
      label: "calendar",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Araya. I'm a Blockchain full-stack developer. Araya's performed both as an individual and as a manager, and he's capable of contributing quickly with little guidance as well as advising on best practices.",
  skills: {
    proficientWith: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "Material UI",
      "Context API",
      "RESTful API",
      "Node",
      "Express",
      "Firebase",
      "Python",
      "Solidity",
      "Rust",
      "NFT platform",
      "Defi",
      "web3",
      "Git",
      "GitHub",
      "Jira",
      "Mocha",
      "AWS",
      "Problem-Solving",
      "Communication",
    ],
    exposedTo: ["Django", "Machine Learning", "Chatbot", "Trading Bot"],
  },
  hobbies: [
    {
      label: "sports",
      emoji: "⚽",
    },
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "video games",
      emoji: "🎮",
    },
    {
      label: "digital art",
      emoji: "🎨",
    },
    {
      label: "family time",
      emoji: "👪",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Persona Journey",
      live: "https://personajourney.io/",
      description:
        "Built the twitter engagement system for the Persona collection holders",
      source:
        "https://etherscan.io/address/0xbabafdd8045740449a42b788a26e9b3a32f88ac1#code",
      image: persona,
    },

    {
      title: "Kingdom Of Ants",
      live: "https://kingdomofants.io",
      description:
        "Wrote Smart Contracts for minting NFT collection and AI-driven DeFi solution.",
      source: "https://github.com/Dante-top/KingdomOfAnts.git",
      image: koa,
    },
    {
      title: "MemeChicks",
      live: "https://memechicks.com",
      description:
        "Built React front-end and wrote Smart Contracts for minting NFT and automatic staking system based on TRON network",
      source: "https://github.com/Dante-top/Gold_Nugget.git",
      image: chicks,
    },
    {
      title: "Meta Bounty Hunters",
      live: "https://theouterverse.io", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      description:
        "Built awesome front-end with smooth-animation and web3 integration with Wagmi React Hooks",
      source:
        "https://etherscan.io/address/0xfc2068c3d47b575a60f6a4a7bf60dea0ac368e01#code",
      image: mbh,
    },
    {
      title: "AKC Universe",
      live: "https://alphakongsclub.com",
      description:
        "Implemented the spinning the wheel for getting $Omega coin and GSAP animation. Let's wake up the Kongs!",
      image: akc,
    },

    {
      title: "Pit(Defi)",
      live: "https://thepit.xyz/",
      description:
        "Fully understood the mechanics of the Token Pit contract and configured to ensure economic stability.",
      source:
        "https://snowtrace.io/address/0xcF7B2CAeE040DeF16BFa1090C8c9f69d61EE3532/contract/43114/code?chainId=43114",
      image: pit,
    },
    {
      title: "On2Air",
      live: "https://on2air.com/",
      description:
        "Integrated the Stripe payment subscriptions and worked with cross-functional Openside Studios team",
      image: air,
    },
    {
      title: "Club Brugge Shop",
      live: "https://shop.clubbrugge.be/",
      description:
        "Built user-friendly front-end and fellow the trending SEO practices for E-Commerce.",
      image: cbs,
    },
  ],
};

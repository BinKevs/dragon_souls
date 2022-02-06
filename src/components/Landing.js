import React from "react";
import { Link } from "react-scroll";
import nav_logo from "../static/dragon_soul_nav_logo.png";
import discord from "../static/discord.png";
import twitter from "../static/twitter.png";
import gif from "../static/landing_gif.png";
import landing_line from "../static/landing_line.png";
import navbar from "../static/Navbar.png";
import close from "../static/close.png";
import { Animated } from "react-animated-css";
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ShowNav: false };
  }
  setShowNav = (event) => {
    event.preventDefault();
    this.setState({
      ShowNav: !this.state.ShowNav,
    });
  };
  render() {
    const { ShowNav } = this.state;
    return (
      <>
        {!ShowNav ? (
          <div
            id="home"
            className="bg-gradient-to-r from-first-black-color to-first-green-color flex"
          >
            <div className="flex flex-row items-center xl:p-0 p-5 xl:mx-0 mx-auto">
              <img src={nav_logo} alt="" className="mx-auto md:px-32 px-10" />
            </div>
            <div className="xl:flex hidden justify-center text-white font-outfit font-bold text-lg items-center space-x-16 p-10 ">
              <Link
                class=" hover:text-third-green-color cursor-pointer"
                to="home"
                smooth={true}
                spy={true}
              >
                HOME
              </Link>

              <Link
                class=" hover:text-third-green-color cursor-pointer"
                to="about"
                smooth={true}
                spy={true}
              >
                ABOUT
              </Link>

              <Link
                class=" hover:text-third-green-color cursor-pointer"
                to="roadmap"
                smooth={true}
                spy={true}
              >
                ROADMAP
              </Link>
              <Link
                class=" hover:text-third-green-color cursor-pointer"
                to="tokenomics"
                smooth={true}
                spy={true}
              >
                TOKENOMICS
              </Link>
              <Link
                class=" hover:text-third-green-color cursor-pointer"
                to="faq"
                smooth={true}
                spy={true}
              >
                FAQ
              </Link>
              <img src={discord} alt="" className="" />
              <img src={twitter} alt="" className="" />
            </div>
          </div>
        ) : (
          ""
        )}
        {!ShowNav ? (
          <div className="xl:hidden  fixed md:top-3 top-5 right-3  md:p-5 rounded-3xl z-50">
            <img
              src={navbar}
              alt=""
              onClick={this.setShowNav}
              className=" h-8 w-10 "
            />
          </div>
        ) : (
          ""
        )}
        {ShowNav ? (
          <div className="xl:hidden  fixed top-3 right-3  p-5 rounded-xl z-30">
            <img
              src={close}
              alt=""
              className="w-12 "
              onClick={this.setShowNav}
            />
          </div>
        ) : (
          ""
        )}
        {ShowNav ? (
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOutUp"
            animationInDuration={500}
            animationOutDuration={500}
            isVisible={ShowNav}
            id="LandingPage"
            className="fixed h-screen w-full bg-black z-20 flex"
          >
            <div className="m-auto space-y-10">
              <div>
                <img src={nav_logo} alt="" className="mx-auto" />
              </div>
              <div className="flex flex-col  z-20 text-white text-lg font-black space-y-10 text-center">
                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="home"
                  smooth={true}
                  spy={true}
                >
                  HOME
                </Link>

                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="about"
                  smooth={true}
                  spy={true}
                >
                  ABOUT
                </Link>

                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="roadmap"
                  smooth={true}
                  spy={true}
                >
                  ROADMAP
                </Link>
                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="tokenomics"
                  smooth={true}
                  spy={true}
                >
                  TOKENOMICS
                </Link>
                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="faq"
                  smooth={true}
                  spy={true}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </Animated>
        ) : (
          ""
        )}
        <div className="h-full bg-black flex flex-col">
          <div className="flex xl:flex-row flex-col mx-auto mb-28">
            <div className="xl:w-2/5 w-full flex">
              <img src={gif} alt="" className="m-auto md:p-28 p-8" />
            </div>
            <div className="xl:w-3/5 w-full m-auto space-y-12 flex flex-col">
              <div className="text-white font-outfit font-bold md:text-7xl text-5xl xl:w-2/3 w-3/4 leading-relaxed xl:text-left text-center xl:mx-0 mx-auto space-y-5">
                <div>WELCOME TO </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-first-blue-color to-second-green-color animate-pulse">
                  DRAGON SOULS COMMUNITY
                </div>
              </div>
              <div className="text-white font-outfit md:text-2xl text-xl xl:w-11/12 w-4/5 xl:mx-0 mx-auto xl:text-left text-center space-y-5">
                <div>
                  Dragon Souls are a collection of 4,444 Unique Genesis NFT
                  Dragons that live on Solana Blockchain. Join us as we build
                  our own dragon-fested universe with awesome community members,
                  various NFT events, and more!
                </div>
                <div>
                  Explore our roadmap and see what amazing things are in the
                  store for you!
                </div>
              </div>
            </div>
          </div>
          <img
            src={landing_line}
            alt=""
            className="mx-auto mb-28 xl:w-auto w-5/6"
          />
        </div>
      </>
    );
  }
}

export default Landing;

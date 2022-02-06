import React from "react";
import nav_logo from "../static/dragon_soul_nav_logo.png";
import discord from "../static/discord.png";
import twitter from "../static/twitter.png";
class FAQ extends React.Component {
  render() {
    return (
      <>
        {" "}
        <div id="faq" className="bg-black h-full flex flex-col pb-40">
          <div className="my-auto space-y-10">
            <div className="text-6xl w-2/5 mx-auto font-outfit font-black text-center text-white mb-20">
              FAQ
            </div>
            <div className="w w-4/5 bg-first-pink-color p-10 mx-auto rounded-3xl">
              <div className="text-xl  font-outfit font-bold text-start text-white ">
                WHEN TO MINT?
              </div>
              <div className="text-md  font-outfit font-normal text-start text-white ">
                TBA, please join our discord channel for more updates!
              </div>
            </div>
            <div className="w w-4/5 bg-first-pink-color p-10 mx-auto rounded-3xl">
              <div className="text-xl  font-outfit font-bold text-start text-white ">
                How much mint?
              </div>
              <div className="text-md  font-outfit font-normal text-start text-white ">
                TBA, please join our discord channel for more updates!
              </div>
            </div>
            <div className="w w-4/5 bg-first-pink-color p-10 mx-auto rounded-3xl">
              <div className="text-xl  font-outfit font-bold text-start text-white ">
                Supply?
              </div>
              <div className="text-md  font-outfit font-normal text-start text-white ">
                There will be 4,444 Dragon Souls for you to tame.
              </div>
            </div>
            <div className="w w-4/5 bg-first-pink-color p-10 mx-auto rounded-3xl">
              <div className="text-xl  font-outfit font-bold text-start text-white ">
                Why do i need to tame a dragon?
              </div>
              <div className="text-md  font-outfit font-normal text-start text-white ">
                The adventure and the community. We're expecting a much larger
                crowd than Dragon. While we can't guarantee you'll all get one
                (in fact, we know you won't), we can guarantee two things. If
                you're interested in the project and our long-term objectives,
                we'd like to invite you to join us on this journey and share in
                the adventures we'll have along the way. We'll make every effort
                to include everyone. Our community is full with amazing people
                and a welcoming, collaborative environment. We'll keep working
                with you to build and shape the server. Your time here isn't
                wasted as long as you're meeting new people, learning new
                things, and/or having fun. In a nutshell, if you're happy
              </div>
            </div>
            <div className="w w-4/5 bg-first-pink-color p-10 mx-auto rounded-3xl">
              <div className="text-xl  font-outfit font-bold text-start text-white ">
                Secondary Market?
              </div>
              <div className="text-md  font-outfit font-normal text-start text-white ">
                Once the collection sells out, Tamed Dragons will listed on
                different Solana marketplaces.
              </div>
            </div>

            <div className="w w-4/5 bg-first-pink-color p-10 mx-auto rounded-3xl">
              <div className="text-xl  font-outfit font-bold text-start text-white ">
                Is each dragon unique?
              </div>
              <div className="text-md  font-outfit font-normal text-start text-white ">
                Yes, each dragon will be unique. We have made sure via our
                custom generative algorithm that no two dragons can be
                identical.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-full">
          <img src={nav_logo} alt="" className="mx-auto md:px-32 px-16" />
          <div className="flex justify-center space-x-24 md:py-16 py-8">
            <img src={twitter} alt="" className="" />
            <div className=" text-base font-outfit text-white my-auto">
              All rights reserved.
            </div>
            <img src={discord} alt="" className="" />
          </div>
        </div>
      </>
    );
  }
}

export default FAQ;

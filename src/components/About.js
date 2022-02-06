import React from "react";
import { Link } from "react-scroll";
import second_screen_img from "../static/second_screen_img.png";

class About extends React.Component {
  render() {
    return (
      <>
        <div id="about" className="bg-black">
          <div className="xl:h-screen h-full bg-about-bg bg-cover bg-center bg-no-repeat flex relative lg:py-20 py-40">
            <div className="space-y-24 my-auto lg:ml-28 ml-0 lg:px-0 px-14">
              <div className="text-white font-outfit font-bold md:text-5xl text-4xl">
                LORE
              </div>
              <div className="text-white font-outfit md:text-3xl text-xl lg:w-1/2 w-full space-y-10">
                <div>
                  Before the first dawn of man, mystifying creatures roamed the
                  blank universe. Serpent-like creatures with enormous eyes were
                  like the rays of dusk and dawn, smoke billowing in its
                  nostrils and horns that showed dominance.
                </div>
                <div>
                  These enigmatic figures were at lost cause. Inconsequential
                  fighting and with nothing to command, they agreed to govern
                  worlds of their own. Heaven, Hell and Earth was created. They
                  were to judge, create, and control their own right.
                </div>
                <div>
                  Humans worshipped them, the Greeks dubbed them as "Draconta",
                  which means "to watch". In their worlds, they summoned similar
                  like beings in physical forms to keep order and discipline.
                  They were called Dragons and Wyverns. But never did these
                  godly figures show themselves amongst the majority.
                </div>
                <div>
                  Omniscient and invisible within the horizon, they we're simply
                  called "Dragon Souls". Untouchable as a soul, pure and sacred
                  in their own right.
                </div>
              </div>
            </div>

            <img
              src={second_screen_img}
              alt=""
              className="absolute bottom-0 right-0 w-4//3 lg:block hidden"
            />
          </div>
        </div>
      </>
    );
  }
}

export default About;

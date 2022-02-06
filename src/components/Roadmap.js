import React from "react";
import Eyes_Left from "../static/Eyes_Left.png";
import Eyes_Right from "../static/Eyes_Right.png";
import red_line from "../static/red_line.png";
import orange_line from "../static/orange_line.png";

class Roadmap extends React.Component {
  render() {
    return (
      <>
        <div id="roadmap" className="bg-black bg-cover bg-center bg-no-repeat">
          <img
            src={orange_line}
            alt=""
            className="mx-auto py-28 xl:w-auto w-5/6"
          />

          <div className="xl:h-screen h-full  flex relative">
            <div className="m-auto z-30">
              <div className="text-white font-outfit text-6xl font-bold text-center mb-40 z-20">
                ROADMAP
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 grid-cols-1  gap-4  w-4/5 mx-auto">
                <div className="text-white font-outfit gradient-border border-gradient-red-black rounded-3xl md:p-16 p-12">
                  <div>
                    <div className="md:text-4xl text-3xl font-bold pb-4 gradient-red-bottom border-gradient-red-black">
                      Q1
                    </div>
                    <div className="md:text-lg text-md list-disc pt-4">
                      <li>Project Conceptualization</li>
                      <li>
                        Creation of Web Assets (Posters, Background, Color
                        Scheme, etc.)
                      </li>
                      <li>Tokenomics Conceptualization</li>
                      <li>Creation of Social Media Channels</li>
                    </div>
                  </div>
                </div>
                <div className="text-white font-outfit gradient-border border-gradient-red-black rounded-3xl md:p-16 p-12">
                  <div>
                    <div className="md:text-4xl text-3xl font-bold pb-4 gradient-red-bottom border-gradient-red-black">
                      Q2
                    </div>
                    <div className="md:text-lg text-md list-disc pt-4">
                      <li>Project Conceptualization</li>
                      <li>
                        Creation of Web Assets (Posters, Background, Color
                        Scheme, etc.)
                      </li>
                      <li>Tokenomics Conceptualization</li>
                      <li>Creation of Social Media Channels</li>
                    </div>
                  </div>
                </div>
                <div className="text-white font-outfit gradient-border border-gradient-red-black rounded-3xl md:p-16 p-12">
                  <div>
                    <div className="md:text-4xl text-3xl font-bold pb-4 gradient-red-bottom border-gradient-red-black">
                      Q3
                    </div>
                    <div className="md:text-lg text-md list-disc pt-4">
                      <li>Project Conceptualization</li>
                      <li>
                        Creation of Web Assets (Posters, Background, Color
                        Scheme, etc.)
                      </li>
                      <li>Tokenomics Conceptualization</li>
                      <li>Creation of Social Media Channels</li>
                    </div>
                  </div>
                </div>
                <div className="text-white font-outfit gradient-border border-gradient-red-black rounded-3xl md:p-16 p-12 z-20">
                  <div>
                    <div className="md:text-4xl text-3xl font-bold pb-4 gradient-red-bottom border-gradient-red-black">
                      Q4
                    </div>
                    <div className="md:text-lg text-md list-disc pt-4">
                      <li>Project Conceptualization</li>
                      <li>
                        Creation of Web Assets (Posters, Background, Color
                        Scheme, etc.)
                      </li>
                      <li>Tokenomics Conceptualization</li>
                      <li>Creation of Social Media Channels</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={Eyes_Left}
              alt=""
              className="absolute xl:top-10 top-0 left-0 z-10 2xl:w-auto w-72 md:block hidden"
            />
            <img
              src={Eyes_Right}
              alt=""
              className="absolute xl:top-28 top-0 right-0 z-10 2xl:w-auto w-72 md:block hidden"
            />
          </div>

          <img
            src={red_line}
            alt=""
            className="mx-auto xl:w-auto w-5/6 lg:pt-0 pt-20"
          />
        </div>
      </>
    );
  }
}

export default Roadmap;

import React from "react";
import tokenomics_img from "../static/tokenomics_img.png";
import pink_line from "../static/pink_line.png";

class Tokenomics extends React.Component {
  render() {
    return (
      <>
        <div
          id="tokenomics"
          className="text-white font-outfit md:text-6xl text-4xl font-bold text-center md:py-28 py-20 bg-black"
        >
          TOKENOMICS
        </div>
        <div className="bg-tokenomics-bg bg-cover bg-center bg-no-repeat h-screen flex">
          <div className="m-auto">
            <div className="text-white font-outfit md:text-2xl md text-center md:w-1/2 w-11/12 mx-auto">
              With a total supply of 5B $DSOUL Tokens, the following amounts
              have been allocated for these purposes.
            </div>

            <img
              src={tokenomics_img}
              alt=""
              className="md:w-11/12 w-full mx-auto "
            />
          </div>
        </div>
        <div className="bg-black">
          <img
            src={pink_line}
            alt=""
            className="mx-auto py-40 xl:w-auto w-5/6"
          />
        </div>
      </>
    );
  }
}

export default Tokenomics;

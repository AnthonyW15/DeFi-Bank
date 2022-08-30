import React from "react";
import terminal from "../assests/terminal.png";

const Devs = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>Superpowers for Defi developers</h1>
          <p>
            Check out the <span className="blue">documentation</span>, the{" "}
            <span className="blue">quick start</span> or guide below to
            intergrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
          <img
            className="max-w-[250px] shadow-lg shadow-cyan-500/50 "
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
export default Devs;

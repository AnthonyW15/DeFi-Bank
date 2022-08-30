import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className=" max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem</h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Reliable, tamper-proof network"
              text="Use decenteralization, trusted nodes, premium data, and cryptographic
              proofs to connect highly accurate data/APIs to any smart contract"
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Seamless connection to any API"
              text="Buid on a flexable framework that can retrieve data on any APi,
                connect with systems, and integrate with any current or future blockchain"
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Secure off-chain computation"
              text="Use decentralized networks to automate contracts. Oracle networks can provide a trust-minimized form of off-chain computation to extend the capabilities of blockchains"
            />
            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Proven,read-made solutions"
              text="Intergrate pre-built, time-tested oracle solutions that already secure tens of billions in smart 
              contract value for market-leading applications"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

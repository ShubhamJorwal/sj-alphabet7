import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AntiMoneyLau = () => {
  return (
    <>
      <Navbar />

      <div id="insidedataextpgs">
        <h1>Anti Money Laundering Reporting</h1>
        <div id="childinsidedataextpgs">
          <p>
            As a gaming operator We need to comply with the Prevention of Money
            Laundering Act and any associated Regulations. We shall check all
            transactions and report any suspicious transaction to the relevant
            competent authorities in Malta (or other such territory as may be
            relevant to Your transactions).
          </p>
          <br />
          <p>
            if You become aware of any suspicious activity relating to any of
            the Games on the Site, You must report this to Us immediately.
          </p>
          <br />
          <p>
            We may suspend, block or close Your Account and withhold funds, in
            accordance with the Prevention of Money Laundering Act.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AntiMoneyLau;

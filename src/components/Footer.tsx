import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-base font-bold mb-4">Footer</h2>
      <section className="grid grid-flow-col text-sm md:justify-center md:gap-80">
        <div className="grid gap-5 my-4 justify-start text-left">
          <Link to="tours">Tours</Link>
          <Link to="gallery">Gallery</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
        <div className="grid gap-5 my-4 justify-end text-left">
          <Link to="terms">Terms & conditions</Link>
          <Link to="privacy">Privacy policy</Link>
          <Link to="subscribe">Newsletters</Link>
          <Link to="refund">Refund policy</Link>
        </div>
      </section>
      <hr />
      <div className="p-4 text-base">
        <span>© Copyright </span> <span>{date.getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;

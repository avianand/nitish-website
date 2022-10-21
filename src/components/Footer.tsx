import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-base font-bold mb-4">Footer</h2>
      <section className="grid grid-flow-col text-sm md:justify-center md:gap-80">
        <div className="grid gap-5 my-4 justify-start text-left">
          <div>Tours</div>
          <div>Gallery</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="grid gap-5 my-4 justify-end text-left">
          <div>Terms & conditions</div>
          <div>Privacy policy</div>
          <div>Newsletters</div>
          <div>Refund policy</div>
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

import { Link } from "react-router-dom";

import Travel from "../assets/images/travel.svg";
import Social from "./Social";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <div className="bg-primary text-white p-6">
      <section className="grid grid-flow-row md:grid-flow-col text-sm md:justify-center md:gap-20 md:grid-cols-4">
        <div className="flex flex-col my-4 justify-start text-left">
          <h3 className="font-bold text-xl border-b-2 pb-4">
            Tours with Nitish
          </h3>
          <div className="gap gap- my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            cumque quae deserunt necessitatibus libero soluta sint perferendis
            explicabo voluptates laboriosam! Tempora cumque asperiores amet
            magni! Voluptas laudantium quibusdam enim unde?
          </div>
        </div>
        <div className="flex flex-col my-4 justify-start text-left">
          <h3 className="font-bold text-xl border-b-2 pb-4">Upcoming tours</h3>
          <div className="flex flex-col my-4 gap-5">
            <Link to="tours">Vulture expeditions</Link>
          </div>
        </div>
        <div className="flex flex-col my-4 justify-start text-left">
          <h3 className="font-bold text-xl border-b-2 pb-4">Pages</h3>
          <div className="flex flex-col my-4 gap-5">
            <div className="flex items-center gap-5">
              <img src={Travel} className="w-10 h-10" alt="tours" />
              <Link to="tours">Tours</Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={Travel} className="w-10 h-10" alt="tours" />
              <Link to="tours">Gallery</Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={Travel} className="w-10 h-10" alt="tours" />
              <Link to="tours">About</Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={Travel} className="w-10 h-10" alt="tours" />
              <Link to="tours">Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4 justify-start text-left">
          <h3 className="font-bold text-xl border-b-2 pb-4">Information</h3>
          <div className="flex flex-col my-4 gap-5">
            <Link to="terms">Terms & conditions</Link>
            <Link to="privacy">Privacy policy</Link>
            <Link to="subscribe">Newsletters</Link>
            <Link to="refund">Refund policy</Link>
          </div>
        </div>
      </section>
      <hr className="mt-6 mb-2" />
      <div className="p-4 text-base md:flex items-center justify-center">
        <span>© Copyright </span>{" "}
        <span className="mx-2">{date.getFullYear()} </span>
        <span className="mx-4">Nitish</span>
        <div className="mt-3 md:mt-0 md:flex">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;

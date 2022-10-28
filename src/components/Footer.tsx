import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import Travel from "../assets/images/travel.svg";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <div className="bg-primary text-white p-6">
      <section className="grid grid-flow-row md:grid-flow-col text-sm md:justify-center md:gap-20 md:grid-cols-4">
        <div className="grid gap-5 my-4 justify-start text-left">
          <h3 className="font-bold text-xl">Tours with Nitish</h3>
          <hr />
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            cumque quae deserunt necessitatibus libero soluta sint perferendis
            explicabo voluptates laboriosam! Tempora cumque asperiores amet
            magni! Voluptas laudantium quibusdam enim unde?
          </div>
        </div>
        <div className="grid gap-5 my-4 justify-start text-left">
          <h3 className="font-bold text-xl">Upcoming tours</h3>
          <hr />
          <Link to="tours">Tours</Link>
          <Link to="gallery">Gallery</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
        <div className="grid gap-2 my-4 justify-start text-left">
          <h3 className="font-bold text-xl">Pages</h3>
          <hr className="mt-4" />
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
        <div className="grid gap-5 my-4 justify-start text-left">
          <h3 className="font-bold text-xl">Information</h3>
          <hr />
          <Link to="terms">Terms & conditions</Link>
          <Link to="privacy">Privacy policy</Link>
          <Link to="subscribe">Newsletters</Link>
          <Link to="refund">Refund policy</Link>
        </div>
      </section>
      <hr className="mt-6 mb-2" />
      <div className="p-4 text-base md:flex items-center justify-center">
        <span>© Copyright </span>{" "}
        <span className="mx-2">{date.getFullYear()} </span>
        <span className="mx-4">Nitish</span>
        <div className="mt-3 md:mt-0 md:flex">
          <button
            type="button"
            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-2"
          >
            <span className="sr-only">View notifications</span>
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-2"
          >
            <span className="sr-only">View notifications</span>
            <Facebook className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-2"
          >
            <span className="sr-only">View notifications</span>
            <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

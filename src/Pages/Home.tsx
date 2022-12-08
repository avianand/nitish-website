import { Link } from "react-router-dom";
import About from "../assets/images/About_me.jpg";
import { ReactComponent as Birds } from "../assets/images/birds.svg";
import Explore from "../assets/images/Explore.jpg";
import Gallery from "../assets/images/Gallery.jpg";
import header from "../assets/images/header2.jpg";
import Prints from "../assets/images/Prints.jpg";
import The_Last_Vulture from "../assets/images/The_Last_Vulture.jpg";
import Footer from "../components/Footer";
import Contact from "./Contact";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="text-black text-base">
      <header className="relative">
        <span className="absolute font-bold drop-shadow-lg text-inverted  flex flex-col items-start text-2xl left-2 top-[30%] md:text-5xl md:left-0 md:top-[40%] ml-2 md:ml-20">
          The Last <br />{" "}
          <span className="text-4xl md:text-8xl opacity-90 animate-pulse">
            Vulture
          </span>
          <button className="primary-button bg-quaternary p-3 rounded font-bold text-base mt-6 w-full">
            Know more
          </button>
        </span>
        <div>
          <img
            src={header}
            alt="header"
            className="w-full md:h-[800px] object-cover"
          />
        </div>
      </header>
      <section className="pb-6 bg-secondary bg-opacity-5">
        <header className="mb-6 text-2xl font-bold text-inverted bg-tertiary py-4">
          Exlpore
        </header>
        <div className="p-4 grid md:grid-flow-col auto-cols-fr gap-8 md:gap-4">
          <Link
            to="/"
            className="border-2 border-inverted rounded-lg grid bg-inverted shadow-md hover:shadow-quaternary"
          >
            <img
              src={Explore}
              alt="about"
              className="w-full object-cover h-60 rounded-t-lg text-quaternary fill-current bg-slate-200"
            />
            <span className="text-base font-bold my-2">Exlpore with me</span>
          </Link>
          <Link
            to="/"
            className="border-2 border-inverted rounded-lg grid bg-inverted shadow-md hover:shadow-quaternary"
          >
            <img
              alt="prints"
              src={The_Last_Vulture}
              className="w-full object-cover h-60 rounded-t-lg text-quaternary fill-current bg-slate-200"
            />
            <span className="text-base font-bold my-2">The last vulture</span>
          </Link>
        </div>
      </section>
      <section className="pb-6 bg-secondary bg-opacity-5">
        <header className="mb-6 text-2xl font-bold text-inverted bg-tertiary py-4">
          Gallery
        </header>
        <div className="p-4 grid md:grid-flow-col auto-cols-fr gap-8 md:gap-4">
          <Link
            to="/"
            className="border-2 border-inverted rounded-lg grid bg-inverted shadow-md hover:shadow-quaternary"
          >
            <img
              alt="Gallery"
              src={Gallery}
              className="w-full object-cover h-60 rounded-t-lg text-quaternary fill-current bg-slate-200"
            />
            <span className="text-base font-bold my-2">Gallery</span>
          </Link>
          <Link
            to="/"
            className="border-2 border-inverted rounded-lg grid bg-inverted shadow-md hover:shadow-quaternary"
          >
            <img
              alt="prints"
              src={Prints}
              className="w-full object-cover h-60 rounded-t-lg text-quaternary fill-current bg-slate-200"
            />
            <span className="text-base font-bold my-2">Prints</span>
          </Link>
        </div>
      </section>
      <section className="pb-6 bg-secondary bg-opacity-5">
        <header className="mb-6 text-2xl font-bold text-inverted bg-tertiary py-4">
          About
        </header>
        <div className="p-4 grid md:grid-flow-col auto-cols-fr gap-8 md:gap-4">
          <Link
            to="/"
            className="border-2 border-inverted rounded-lg grid bg-inverted shadow-md hover:shadow-quaternary"
          >
            <Birds className="w-full h-60 rounded-t-lg text-quaternary fill-current bg-slate-200" />
            <span className="text-base font-bold my-2">
              Merchandise(Coming soon)
            </span>
          </Link>
          <Link
            to="/"
            className="border-2 border-inverted rounded-lg grid bg-inverted shadow-md hover:shadow-quaternary"
          >
            <img
              src={About}
              alt="about"
              className="w-full object-cover h-60 rounded-t-lg text-quaternary fill-current bg-slate-200"
            />
            <span className="text-base font-bold my-2">About me</span>
          </Link>
        </div>
      </section>
      <section className="mb-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

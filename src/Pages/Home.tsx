import header from "../assets/images/header.jpg";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="text-black text-base">
      <header className="relative">
        <span className="absolute font-bold text-white text-2xl top-[40%] md:text-7xl left-0 md:top-[30%] ml-2 md:ml-20">
          The Last <br />{" "}
          <span className="text-4xl md:text-9xl opacity-75 animate-pulse">
            Vultures
          </span>
        </span>
        <div>
          <img src={header} alt="header" className="w-full object-cover" />
        </div>
      </header>
      <section className="">
        <header className="my-6 text-lg font-bold">Categories</header>
        <div className="p-4 grid md:grid-flow-col auto-cols-fr gap-8 md:gap-4">
          <div className="border-2 rounded-lg grid">
            <img className="w-full h-60 rounded-xl" src="" alt="" />
            <span className="text-base font-bold my-2">Travel</span>
          </div>
          <div className="border-2 rounded-lg grid">
            <img className="w-full h-60 rounded-xl" src="" alt="" />
            <span className="text-base font-bold my-2">Print</span>
          </div>
          <div className="border-2 rounded-lg grid">
            <img className="w-full h-60 rounded-xl" src="" alt="" />
            <span className="text-base font-bold my-2">
              Merchandise (coming soon)
            </span>
          </div>
        </div>
      </section>
      <section className="">
        <header className="my-6 text-lg font-bold">Gallery</header>
        <div className="p-4 grid md:grid-flow-col auto-cols-fr gap-8 md:gap-4">
          <div className="border-2 rounded-lg grid">
            <img className="w-full h-60 rounded-xl" src="" alt="" />
            <span className="text-base font-bold my-2">Birds</span>
          </div>
          <div className="border-2 rounded-lg grid">
            <img className="w-full h-60 rounded-xl" src="" alt="" />
            <span className="text-base font-bold my-2">Landscape</span>
          </div>
          <div className="border-2 rounded-lg grid">
            <img className="w-full h-60 rounded-xl" src="" alt="" />
            <span className="text-base font-bold my-2">Nightscape</span>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <header className="my-4 text-xl font-semibold">Contact me</header>
        <div>
          <form action="post">
            <div className="m-4">
              <input
                className="border-2 rounded w-full md:w-96 p-4 "
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
              />
            </div>
            <div className="m-4">
              <input
                className="border-2 rounded w-full md:w-96 p-4 "
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
              />
            </div>
            <div className="m-4">
              <input
                className="border-2 rounded w-full md:w-96 p-4 "
                type="textarea"
                name="message"
                id=""
                placeholder="Enter your message"
              />
            </div>
            <div className="m-4">
              <button
                type="submit"
                className="p-4 bg-black rounded text-white md:w-96 w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer><Footer/></footer>
    </div>
  );
};

export default Home;

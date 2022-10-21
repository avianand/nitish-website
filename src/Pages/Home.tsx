import header from "../assets/images/header.jpg";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <header className="relative">
        <span className="absolute font-bold text-2xl top-[40%] md:text-7xl left-0 md:top-[30%] ml-2 md:ml-20">
          The Last <br />{" "}
          <span className="text-4xl md:text-9xl opacity-75 animate-pulse">
            Vultures
          </span>
        </span>
        <div>
          <img src={header} alt="header" className="w-full object-cover" />
        </div>
      </header>
    </div>
  );
};

export default Home;

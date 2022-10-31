import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ToursImage from "../assets/images/travel.svg";
type Props = {};

const Tours = (props: Props) => {
  return (
    <div className="text-black p-16 ">
      <h1 className="font-bold text-4xl mb-10">Upcoming tours</h1>
      <section className="flex">
        <div className="text-left">
          <header className="my-4 font-bold">Vulture expedition</header>
          <p className="text-sm pr-20">
            Vulture Expedition First time in India & one of its kind,this tour
            focus especially on giving the up close, like really close look to
            the life of vultures. From observing and capturing beautiful giants
            taking morning flight in thermals. Exploring the colonies of Indian
            or Long Billed Vultures & how they breed, build nest and raise their
            chicks. Luckily the place occupies atleast 4 species of vultures and
            we will be going on to explore their territories as well. You think
            the fun ends there? NO! We will be exploring the river side and will
            be performing the river crossing to witness the beautiful landscape
            which included huge waterfalls, canyons, wasteland. When we are not
            exploring the vultures we will be exploring some of the lost gems of
            REWA city which includes “Rani talao” a large water body where the
            royal family used to take bath and there is a surprise for snake
            lovers & the “REWA Palace & Museum” where you will learn about the
            first ever wild white tiger and their origin.
          </p>
          <button className="mt-4 py-2 font-bold text-base flex items-center">
            View iternary <ChevronDownIcon className="ml-2 w-5 h-5" />
          </button>
          <br />
          <button className="my-2 py-2 px-6 font-bold bg-quaternary rounded-lg text-inverted text-lg">
            Join the tour
          </button>
        </div>
        <img src={ToursImage} alt="tours" className="w-96 h-96" />
      </section>
    </div>
  );
};

export default Tours;

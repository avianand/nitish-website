import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsapp.svg";
import React from "react";

type Props = {};

const Social = (props: Props) => {
  return (
    <div>
      <button
        type="button"
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-2"
      >
        <span className="sr-only">View notifications</span>
        <Whatsapp className="h-6 w-6" aria-hidden="true" />
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
  );
};

export default Social;

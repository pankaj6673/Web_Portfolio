import { UserGroupIcon } from "@heroicons/react/solid";
import { SocialIcon } from 'react-social-icons';
import React from "react";


export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <UserGroupIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2 ">
            Contact
          </h1>
          <p className="text-base py-auto mx-auto border-solid mb-2">
            Take a look at my work and say hi :)
          </p>
          <div className="flex justify-center">
          <a
              className="bg-grey-500 border-0 py-2 px-6 focus:outline-none hover:bg-white-600 rounded text-lg">
              <SocialIcon url="https://www.linkedin.com/in/pankaj-singh-0217941b7/" />
            </a>
            <a
              className="bg-grey-800 border-0 py-2 px-6 focus:outline-none hover:bg-white-700 rounded text-lg">
              <SocialIcon url="https://github.com/pankaj6673" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

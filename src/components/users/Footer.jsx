import { Button } from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/Image/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const locations = useLocation();

  const contact = locations.pathname === "/contact";
  const booking = locations.pathname === "/booking";

  return (
    <main>
      <footer className="my-10 w-full">
        {contact || booking ? null : (
          <section className="flex justify-center items-center flex-wrap p-5 gap-5 rounded-lg w-[250px] md:w-[500px] lg:w-[900px] mx-auto bg-[#F78214] mb-5">
            <div>
              <h1 className="font-semibold md:text-xl">
                Do you have any questions?
              </h1>
              <p className="text-xs">
                Enter your email address and get started
              </p>
            </div>

            <div className="relative">
              <form className=" top-0 left-0 right-0 bottom-0">
                <input
                  type="email"
                  className="w-[230px] ps-4 py-3 md:w-[482px] max-w-full outline-none placeholder:text-[#8D8D8D] relative top-0 left-0 right-0 bottom-0 text-[#8D8D8D] pe-24 md:pe-32 rounded-lg placeholder:text-xs"
                  placeholder="Enter email address"
                />
                <button
                  className="bg-[#F78214] absolute right-1 top-1.5 rounded-lg text-xs py-2 px-4  md:py-2 md:px-7"
                  type="submit"
                >
                  Continue
                </button>
              </form>
            </div>
          </section>
        )}

        <main className="mt-20 md:flex justify-center gap-14 md:gap-14 px-3 text-center space-y-5">
          <div>
            <img src={logo} className="w-[100px] mx-auto" alt="" />
            <p className="max-w-[150px] text-xs md:text-sm md:max-w-[300px] mt-5 mx-auto">
              Lörem ipsum birade fanas. Tridonar myvis, seng om äniskort. Lörem
              ipsum birade fanas. Tridonarse fanas. Tridonar jmyvis, seng om
              äniskort.
            </p>

            <ul className="mt-5 flex gap-5 justify-center">
              <li className="bg-white w-fit p-1 rounded-full">
                <Link>
                  <FaLinkedin color="blue" />
                </Link>
              </li>
              <li className="bg-white w-fit p-1 rounded-full">
                <Link>
                  <FaFacebook color="blue" />
                </Link>
              </li>
              <li className="bg-white w-fit p-1 rounded-full">
                <Link>
                  <FaTwitter color="skyblue" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">About</h1>
            <ul className="text-sm mt-5 space-y-3 text-[#8D8D8D]">
              <li>Company</li>
              <li>Team</li>
              <li>Testimonial</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Properties</h1>
            <ul className="text-sm mt-5 space-y-3 text-[#8D8D8D]">
              <li>Listings</li>
              <li>Lands</li>
              <li>Houses</li>
              <li>Book Now</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Contact</h1>
            <ul className="text-sm mt-5 space-y-3 text-[#8D8D8D]">
              <li>35a, Lörem ipsum </li>
              <li>www.realestate.com</li>
              <li>Support@realestate.com</li>
              <li>0145782624</li>
            </ul>
          </div>
        </main>
        <div className="w-[1000px] max-w-full h-0.5 mx-auto mt-7 bg-[#8D8D8D]" />
        <p className="mt-6 text-center text-sm text-[#8D8D8D]">
          &copy; 2023 Yemsays All Rights Reserved
        </p>
      </footer>
    </main>
  );
};

import React, { useEffect, useState } from "react";
import List from "../common/List";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navlink = [
    { list: "Home" },
    { list: "Speakers" },
    { list: "About" },
    { list: "Schedule" },
    { list: "Sponsors" },
    { list: "Venue" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full  fixed top-0 left-0 z-10 duration-[.4s]  ${
        isScrolled ? "bg-[#333333] py-[20px] " : "bg-transparent py-[30px]  "
      }   `}
    >
      {/* Logo */}
      <div className="container">
        <div className="flex justify-between">
          <a href="#" className="flex items-center" aria-label="Home">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="xl:w-[128px] sx:w-[50px] "
            />
          </a>
          {/* Desktop Navigation */}
          <div className="hidden gap-0.5 items-center 5xl:flex">
            <List
              listArr={Navlink}
              boxStyle={"flex"}
              listStyle={
                "px-3.5 text-base font-bold tracking-tight duration-[.4s] text-white hover:text-brand  "
              }
            />
            <div className="pl-8">
              <a href="#" className="cmnBtn" aria-label="Buy Tickets">
                Buy Tickets
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block 5xl:hidden text-white"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <CiMenuFries />
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className=" absolute top-0 left-0   "
        >
          <div className="flex flex-col p-4">
            <a
              href="#"
              className="py-3 text-base font-bold tracking-tight text-brand"
            >
              Home
            </a>
            <a
              href="#"
              className="py-3 text-base font-bold tracking-tight text-white"
            >
              Speakers
            </a>
            <a
              href="#"
              className="py-3 text-base font-bold tracking-tight text-white"
            >
              About
            </a>
            <a
              href="#"
              className="py-3 text-base font-bold tracking-tight text-white"
            >
              Schedule
            </a>
            <a
              href="#"
              className="py-3 text-base font-bold tracking-tight text-white"
            >
              Sponsors
            </a>
            <a
              href="#"
              className="py-3 text-base font-bold tracking-tight text-white"
            >
              Venue
            </a>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block px-12 py-4 text-sm font-bold text-white bg-brand border border-brand rounded-[35px]"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

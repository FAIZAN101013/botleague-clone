import React, { useState } from "react";
import Logo from "../assets/navbar/logo.svg";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Events", active: true },
  { label: "Programs", active: false },
  { label: "Community", active: false },
  { label: "Ranks", active: false },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1A1919]">
      <div className="max-w-[1440px] mx-auto h-[110px] flex items-center justify-between px-4 lg:px-7">
        {/* Logo */}
        <img
          src={Logo}
          alt="BotLeague"
          className="w-[180px] md:w-[240px] lg:w-[290px] h-auto"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="
                  relative
                  text-white
                  font-['Orbitron']
                  text-[22px]
                  cursor-pointer
                  h-[110px]
                  flex items-center
                "
              >
                {item.label}

                {item.active && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-[110px]
                      h-[5px]
                      bg-[#FF4C4C]
                    "
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="w-[121px] h-[43px] text-[18px] rounded-[8px]"
          >
            LOGIN
          </Button>

          <Button
            variant="primary"
            className="w-[163px] h-[43px] text-[18px] rounded-[8px]"
          >
            REGISTER NOW
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1919] border-t border-gray-700 py-4">
          <ul className="flex flex-col items-center gap-5 py-6">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="
                  relative
                  text-white
                  font-['Orbitron']
                  text-lg
                  py-1
                "
              >
                {item.label}

                {item.active && (
                  <span
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      -bottom-1
                      w-[50px]
                      h-[3px]
                      bg-[#FF4C4C]
                    "
                  />
                )}
              </li>
            ))}

            <div className="flex flex-col items-center gap-3 mt-4">
              <Button
                variant="outline"
                className="w-[140px] h-[40px] text-[14px] rounded-[8px]"
              >
                LOGIN
              </Button>

              <Button
                variant="primary"
                className="w-[140px] h-[40px] text-[14px] rounded-[8px]"
              >
                REGISTER NOW
              </Button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
import { useState } from "react";
import CompanyLogo from "../assets/svg/oro24FaculityLogo.svg";
import { Button } from "./ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import ReactCountryFlag from "react-country-flag";
import { logout } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isAuthenticated = useSelector((state: RootState) => state.auth.token);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Packages", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const LogOut = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary-grey text-white font-sans">
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-4 md:py-6  lg:px-16 px-0">
        <img src={CompanyLogo} alt="ORO24 Logo" className="w-20 md:w-24 h-auto" />

        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs md:text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`transition-colors ${link.active ? "border-b-2 border-white pb-1" : "text-nav-gray hover:text-white"}`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Button className="bg-primary-yellow hover:bg-nav-yellow-dark text-white text-xs md:text-xs font-bold px-4 md:px-4 py-1 md:py-2 rounded-full uppercase tracking-wider">Express</Button>

          <div className="flex items-center space-x-1 md:space-x-2 cursor-pointer">
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="France"
            />
          </div>

          <div className="relative cursor-pointer">
            <ShoppingCart size={18} />
            <span className="absolute -top-3 -right-2 rounded-full bg-red-500 px-1 text-[9px] md:px-1.5 md:py-0.5 md:text-[10px] font-bold">2</span>
          </div>
          {isAuthenticated && (
            <div className="flex items-center space-x-1 md:space-x-2 cursor-pointer hover:text-nav-gray" onClick={() => LogOut()}>
              <span className="text-[10px] md:text-sm">Logout</span>
              <User size={16} />
            </div>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden z-50 p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary-grey border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } z-40`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`${link.active ? "text-white font-semibold" : "text-nav-gray"}`} onClick={() => setOpen(false)}>
              {link.name}
            </a>
          ))}

          <Button className="bg-primary-yellow hover:bg-nav-yellow-dark text-white text-xs font-bold rounded-full uppercase tracking-wider">Express</Button>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title="France"
              />
            </div>

            <div className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] px-1.5 py-0.5 rounded-full font-bold">2</span>
            </div>
            {isAuthenticated && (
              <div className="flex items-center space-x-1" onClick={() => LogOut()}>
                <User size={18} />
                <span>Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

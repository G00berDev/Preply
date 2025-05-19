import Image from "next/image";
import logo from "../assests/logoTransparent.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white w-screen h-[40vh] lg:h-[30vh] relative inset-x-0 bottom-0 ">
      <div className="">
        <Image
          className="dark:invert ml-[-8px] lg:ml-2 "
          src={logo}
          alt="Logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-[#E9C06B] ml-4 mt-[-1rem] lg:ml-8 lg:mt-[-3rem] text-xs">&copy;Copyright 2025</p>

        <p className="relative mt-[-3rem] ml-4 text-[#FAA900] lg:text-2xl font-regular lg:ml-60 lg:mt-[-6rem]">
          Your Week, Prepped.
        </p>
      </div>
        <div className="ml-50 mt-[-5rem] lg:ml-300 lg:mt-[-3rem]">
          <span className="text-xl">Contact</span>
          <div className=" bg-[#FAA900] w-[6rem] h-1 rounded-full"></div>
          <div className="flex items-center gap-2 lg:pt-4">
            <FiPhoneCall className="text-[#FAA900]" />
            <p>+1 (123) 456-7890</p>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineMailOutline className="text-[#FAA900]" />
            <p>Preply@gmail.com</p>
          </div>
        </div>
        <div className="bg-[#FAA900] w-[85vw] mt-10 lg:w-[95vw] h-1 rounded-full place-self-center lg:mt-10"></div>
    </footer>
  );
};

export default Footer;

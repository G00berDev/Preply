import Footer from "../components/footer";
import Image from 'next/image';
import logo from '../assests/logoTransparent.png';

export default function Landing() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/landingPhoto.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="relative">
          <div className="bg-[#E9C06B] w-[60vw] lg:w-[15vw] h-[30vh] rounded-[30px] opacity-80"></div>

          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            src={logo}
            alt="Logo"
            width={175}
            height={175}
            priority
          />
        </div>

        <div className="mt-12 flex gap-6">
          <button className="w-24 h-12 bg-[#E9C06B] opacity-80 rounded-[15px] text-white">Login</button>
          <button className="w-24 h-12 bg-[#E9C06B] opacity-80 rounded-[15px] text-white">Sign Up</button>
        </div>
      </div>

      <div className="absolute -bottom-60 w-full">
        <Footer />
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from "../components/navbar";

export default function Adimn() {

  return (
    <div className="w-screen h-screen bg-[#F3CB78] overflow-x-hidden">
      <Navbar />
      <h1 className="text-white font-semibold text-4xl text-center">WELCOME BACK,</h1>
      <p className="text-white font-medium text-2xl text-center">ADMIN</p>
      <div className="bg-white w-full lg:w-[75vw] lg:ml-[24rem] lg:h-[90vh] h-[80vh] mt-10 ">

        <h1 className="text-center lg:place-self-start lg:mt-20 lg:pt-30 text-[#FAA900] text-xl font-semibold">USER LIST</h1>
        <div className="bg-white w-[80vw] lg:w-[30vw] lg:place-self-start lg:ml-20 h-[60vh] shadow-2xl rounded-[20px] place-self-center mt-6 lg:mt-30"></div>
      </div>

    </div>
  );
}

import React, { useRef } from "react";
import Image from "next/image";
import London from "../../../public/London.webp";
import Manchester from "../../../public/Manchester.webp";
import LiverPool from "../../../public/LiverPool.webp";
import York from "../../../public/York.webp";
import Cardiff from "../../../public/Cardiff.webp";
import Brikenhead from "../../../public/Brikenhead.webp";
import Newqua from "../../../public/Newquay.webp";
import Hove from "../../../public/Hove.webp";
import Outdoor from "../../../public/Outdoor.webp";
import Unique from "../../../public/Unique.webp";
import Pet from "../../../public/Pet.webp";
import Entire from "../../../public/Entire.webp";
import Greatest from "../../../public/Greatest.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Main1() {
  return (
    <div className=" mx-11 my-11">
      <h2 className=" text-4xl font-semibold my-4">Explore Nearby</h2>
      <div className="grid space-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={London} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">London</h3>
            <p className=" text-gray-400">45-minute drive</p>
          </div>
        </div>
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={Manchester} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">Manchestor</h3>
            <p className=" text-gray-400">4.5-hour drive</p>
          </div>
        </div>

        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={LiverPool} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">Liver Pool</h3>
            <p className=" text-gray-400">4.5-hour drive</p>
          </div>
        </div>
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={York} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">York</h3>
            <p className=" text-gray-400">4-hour drive</p>
          </div>
        </div>
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={Cardiff} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">Cardiff</h3>
            <p className=" text-gray-400">45-minute drive</p>
          </div>
        </div>
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={Brikenhead} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">Brikenhead</h3>
            <p className=" text-gray-400">4.5-hour drive</p>
          </div>
        </div>
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={Newqua} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">Newqua</h3>
            <p className=" text-gray-400">6-hour drive</p>
          </div>
        </div>
        <div className="flex  w-56 h-20 cursor-pointer hover:bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
          <div className=" h-20 w-20">
            <Image src={Hove} className=" rounded-lg" />
          </div>
          <div className=" mx-1 my-3">
            <h3 className="text-black">Hove</h3>
            <p className=" text-gray-400">45-minute drive</p>
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center my-4">
        <h2 className=" text-4xl font-semibold my-4">Explore Nearby</h2>
        <div className=" space-x-2">
          <FontAwesomeIcon
            className=" bg-black text-white rounded-full p-1 cursor-pointer hover:scale-110 transition duration-300"
            icon={faArrowLeft}
          />

          <FontAwesomeIcon
            className=" bg-black text-white rounded-full p-1 cursor-pointer hover:scale-110 transition duration-300"
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className="h-96  overflow-x-auto scroll-smooth">
        <div
          style={{ width: `80rem`, height: `20rem` }}
          className="flex space-x-3 "
        >
          <div className=" cursor-pointer w-96 h-80 hover:scale-105 transition duration-300">
            <Image src={Outdoor} className="rounded-xl" />
            <h3 className="text-2xl my-3 ml-3">Outdoor Gates</h3>
          </div>
          <div className="cursor-pointer  w-96 h-80 hover:scale-105 transition duration-300">
            <Image src={Unique} className="rounded-xl" />
            <h3 className="text-2xl my-3 ml-3">Unique</h3>
          </div>
          <div className="cursor-pointer  w-96 h-80 hover:scale-105 transition duration-300">
            <Image src={Entire} className="rounded-xl" />
            <h3 className="text-2xl my-3 ml-3">Entire homes</h3>
          </div>
          <div className="cursor-pointer w-96  h-80 hover:scale-105 transition duration-300">
            <Image src={Pet} className="rounded-xl" />
            <h3 className="text-2xl my-3 ml-3">Pet allowed</h3>
          </div>
        </div>
      </div>

      <div className=" relative my-14">
        <div>
          <Image src={Greatest} className=" rounded-xl h-96 " />
        </div>
        <div className=" absolute top-14 left-14">
          <h3 className=" text-3xl font-semibold">The Greatest</h3>
          <h3 className=" text-3xl font-semibold">Outoors</h3>
          <p className=" my-3">Wishlist by Muhammad Aneer Zaman</p>
          <button className=" bg-black text-white px-2 py-2 rounded-xl hover:scale-105 transition duration-300">
            Get inspired
          </button>
        </div>
      </div>
    </div>
  );
}

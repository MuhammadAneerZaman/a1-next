import React,{useState} from "react";
import Image from "next/image";
import Airbnb from "../../../public/qd3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
  faSearch,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, DateRangePicker } from "react-date-range";

export default function Navbar1() {
  const [inputData, setInputData] = useState("");
  const [state, setState] = useState({
    selection1: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection1",
    },
  });
  return (
    <div>
    <div className=" grid grid-cols-3 items-center  bg-white py-5 space-x-12 md:space-x-3 lg:space-x-24">
      {/* 1 */}
      <div className=" flex w-32 h-12">
        <Image src={Airbnb} className=" ml-8"  />
      </div>
      {/* 2 */}
      <div className=" hover:shadow-xl gray transition duration-300 flex md:space-x-9 items-center h-10  sm:border-2 border-gray-500 border-solid rounded-3xl w-44 md:w-64  lg:w-80space-x-16">
        <input type="search" placeholder="Start Your Search" value={inputData} onChange={(e)=>setInputData(e.target.value)} className=" w-36 mx-4 outline-none hidden sm:inline" />
        <FontAwesomeIcon className=" bg-red-400 rounded-full hidden md:inline p-2 cursor-pointer text-white" icon={faSearch} />
      </div>
        {/* 3 */}
        <div className=" flex space-x-3 items-center">
            <h3 className=" text-gray-500 w-28 h-8 p-1 hidden lg:inline  hover:bg-slate-300 rounded-full" >Become a host</h3>
            <FontAwesomeIcon icon={faGlobe} className=" hover:bg-slate-300 hidden sm:inline text-gray-600 p-2 rounded-full cursor-pointer" />
            <span className=" flex items-center space-x-2 border-2 border-gray-600 border-solid rounded-3xl w-14 h-7 p-2 hover:shadow-xl gray  transition duration-300">
                <p className=" cursor-pointer text-gray-500">&#9776;</p>
                <FontAwesomeIcon icon={faUser} className=" cursor-pointer text-gray-600" />
            </span>
        </div>

    </div>
    {inputData != "" && (
        <center className="  ml-64">
          <DateRangePicker
            className="sm:w-full  w-28"
            color="red"
            onChange={(item) => setState({ ...state, ...item })}
            moveRangeOnFirstSelection={true}
            ranges={[state.selection1]}
            value={state}
            rangeColors={["#f33e5b", "#3ecf8e", "#fed14c"]}
            minDate={new Date()}
          />
          <div className=" my-4 ">
         <div className=" flex items-center space-x-64 ">
          <h1 className=" text-2xl font-thin">Number of Guests</h1>
          <div> <FontAwesomeIcon icon={faUserGroup} />
          <input type="Number" className=" text-red-500 w-9 " /> </div>
         </div>
         <hr className=" h-3 hr1 text-gray-600 absolute" />
         <div className=" b1 space-x-36">
          <button onClick={()=>setInputData('')} className=" text-gray-400">Cancel</button>
          <button className=" text-red-500">Search</button>
         </div>
         <hr className=" h-3 w-96 text-gray-600 absolute ml-9" />
         </div>
        </center>
      )}
    </div>
  );
}

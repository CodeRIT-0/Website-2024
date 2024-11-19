"use client";

import Image from "next/image";
import axios from "axios";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./animations.css";

const branches = [
  "ARCH",
  "BIOTECH",
  "CHE",
  "CHEM",
  "CIVIL",
  "CSE",
  "CSE (CY)",
  "CSE (AI/ML)",
  "AI/ML",
  "AI/DS",
  "ECE",
  "EIE",
  "EEE",
  "ETC",
  "HUM",
  "IEM",
  "ISE",
  "MATH",
  "MCA",
  "MBA",
  "MECH",
  "MED ELEC",
  "PHYS",
];

export default function Home() {
  const router = useRouter();

  const [message, setMessage] = useState({ text: "", color: "" });
  const [showMsg, setShowMsg] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [load, setLoad] = useState(true);
  const [student, setStudent] = useState({
    name: "",
    usn: "",
    branch: "",
    email: "",
    phone: "",
    queries: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  useEffect(() => {
    const formArea = document.querySelector("#form-area");

    if (showWindow) {
      formArea.classList.add("blur-lg");
    }
  }, [showWindow]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("askdljaslkdjsalks");
    if (
      !student.name ||
      !student.usn ||
      !student.branch ||
      !student.email ||
      !student.phone
    ) {
      setShowMsg(true);
      setMessage({ text: "Enter all fields", color: "text-red-400" });

      setTimeout(() => {
        setShowMsg(false);
        setMessage({ text: "", color: "" });
      }, 1000);

      return;
    }

    try {
      setShowWindow(true);
      const res = await axios.post("/api/register", student);

      if (res.status != 200) {
        return;
      } else {
        setLoad(false);
        setStudent({
          name: "",
          usn: "",
          branch: "",
          email: "",
          phone: "",
          queries: "",
        });
      }
    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <>
      <div className="relative mt-[72px] bg-gray-100 py-6 flex  justify-center sm:py-12">
        <div className="relative py-3 w-[90%] sm:max-w-xl sm:mx-auto">
          {/* <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 ioshadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div> */}
          <div className="relative px-4 py-8  dark:bg-gray-900 shadow-lg sm:rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto" id="form-area">
              <h3 className="text-white font-semibold text-center text-3xl">
                Ice Breaker 24
              </h3>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={student.name}
                      type="text"
                      name="name"
                      id="name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={student.usn}
                      type="text"
                      name="usn"
                      id="usn"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="usn"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Usn
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5  group">
                    <select
                      onChange={handleChange}
                      value={student.branch}
                      name="branch"
                      id="branch"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      required
                    >
                      <option value="" disabled>
                        Select your branch
                      </option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch} className="text-gray-900 dark:text-white bg-white dark:bg-gray-700">
                          {branch}
                        </option>
                      ))}
                    </select>
                    
                    <label
                      htmlFor="branch"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Branch
                    </label>
                  </div>

                  {/* This is after branch */}
                  <div
                    className={`${
                      showMsg ? "" : "hidden"
                    } w-full h-[40px] text-3xl mb-3 font-bold`}
                  >
                    <p className={`p-2 text-center wrong ${message.color}`}>

                      {message.text}
                    </p>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={student.email}
                      type="email"
                      name="email"
                      id="email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onChange={handleChange}
                      value={student.phone}
                      type="text"
                      name="phone"
                      id="phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                  </div>

                  <textarea
                    id="queries"
                    name="queries"
                    onChange={handleChange}
                    value={student.queries}
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave your queries here...."
                  ></textarea>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${
                showWindow ? "" : "hidden"
              } absolute z-10  w-[90%] h-[200px] top-64 left-7`}
            >
              {load ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Image src="/Loader.svg" width={100} height={100}></Image>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col py-4 px-4 justify-evenly  bg-gray-800 rounded-3xl">
                  <h1 className="text-center text-3xl font-bold  text-white">
                    Your Response was Recorded
                  </h1>
                  <div className="flex justify-evenly w-full ">
                    <a
                      onClick={() => {
                        setShowWindow(false);
                      }}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      href="/"
                    >
                      Cancel
                    </a>
                    <a
                      onClick={() => {
                        setShowWindow(false);
                      }}
                      className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      target="_blanck"
                      href="https://chat.whatsapp.com/FeFzoAe63rpAaZPrTCYjyx"
                    >
                      Join Whatsapp Community
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
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
  console.log(student);
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
      <div className="relative min-h-screen bg-gradient-to-br  from-blue-100 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transform transition-all hover:scale-[1.01] duration-300">
            <div className="px-8 py-12 mt-20" id="form-area">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ice Breaker 24
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Join us for an amazing experience</p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={student.name}
                    type="text"
                    name="name"
                    id="name"
                    className="w-full h-12 text-gray-900 dark:text-white placeholder-transparent peer border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none bg-transparent transition-colors duration-200"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={student.usn}
                    type="text"
                    name="usn"
                    id="usn"
                    className="w-full h-12 text-gray-900 dark:text-white placeholder-transparent peer border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none bg-transparent transition-colors duration-200"
                    placeholder="USN"
                    required
                  />
                  <label
                    htmlFor="usn"
                    className="absolute left-0 -top-3.5 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    USN
                  </label>
                </div>

                <div className="relative">
                  <select
                    onChange={handleChange}
                    value={student.branch}
                    name="branch"
                    id="branch"
                    className="w-full h-12 text-gray-900 dark:text-gray-400 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none bg-transparent transition-colors duration-200"
                    required
                  >
                    <option value="" disabled>Select your branch</option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch} className="text-gray-900 dark:text-white bg-white dark:bg-gray-700">
                        {branch}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor="branch"
                    className="absolute left-0 -top-3.5 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Branch
                  </label>
                </div>

                <div
                  className={`${
                    showMsg ? "" : "hidden"
                  } w-full text-center`}
                >
                  <p className={`text-xl font-semibold ${message.color} animate-pulse`}>
                    {message.text}
                  </p>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={student.email}
                    type="email"
                    name="email"
                    id="email"
                    className="w-full h-12 text-gray-900 dark:text-white placeholder-transparent peer border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none bg-transparent transition-colors duration-200"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={student.phone}
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full h-12 text-gray-900 dark:text-white placeholder-transparent peer border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none bg-transparent transition-colors duration-200"
                    placeholder="Phone"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 -top-3.5 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="queries"
                    name="queries"
                    onChange={handleChange}
                    value={student.queries}
                    rows="4"
                    className="w-full p-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Leave your queries here...."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transform transition-all hover:scale-[1.02] duration-200"
                >
                  Submit
                </button>
              </div>
            </div>

            <div
              className={`${
                showWindow ? "" : "hidden"
              } absolute z-10 w-[90%] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              {load ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Image src="/Loader.svg" alt="loader" width={100} height={100}></Image>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col py-6 px-8 justify-evenly bg-gray-800 rounded-2xl shadow-2xl">
                  <h1 className="text-center text-3xl font-bold text-white">
                    Your Response was Recorded
                  </h1>
                  <div className="flex justify-evenly w-full gap-4">
                    <a
                      onClick={() => {
                        setShowWindow(false);
                      }}
                      className="flex-1 py-3 text-center text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-lg font-medium transform transition-all hover:scale-[1.02] duration-200"
                      href="/"
                    >
                      Cancel
                    </a>
                    <a
                      onClick={() => {
                        setShowWindow(false);
                      }}
                      className="flex-1 py-3 text-center text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg font-medium transform transition-all hover:scale-[1.02] duration-200"
                      target="_blank"
                      href="https://chat.whatsapp.com/FeFzoAe63rpAaZPrTCYjyx"
                    >
                      Join WhatsApp Community
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
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import "./NavbarStyle.css";
import logo from "@/public/logo/logo.png";

export default function Home() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="fixed w-full z-20">
        <a href="/" className="text-white text-3xl">
          <Image src={logo} width={80} alt="CodeRIT logo" className="mx-auto" />
        </a>
        <div>
          <ul
            id="navbar"
            className={`${clicked ? "#navbar active" : "#navbar"} z-50`}
          >
            <li
              className={`${pathname === "/" ? "text-slate-300" : "text-zinc-500"}`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`${
                pathname === "/events" ? "text-slate-300" : "text-zinc-500"
              }`}
            >
              <a href="/events">Events</a>
            </li>
            <li
              className={`${
                pathname === "/team" ? "text-slate-300" : "text-zinc-500"
              }`}
            >
              <a href="/team">Team</a>
            </li>
            <li
              className={`${
                pathname === "/registration" ? "text-white" : "text-white"
              }`}
              style={{ fontWeight: "extrabold"}}
            >
              <a href="/registration">Ice-Breaker 2023</a>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <Image
            id="bar"
            src={clicked ? "/delete.png" : "/hamburger.png"}
            onClick={handleClick}
            width={20}
            height={20}
          ></Image>
        </div>
      </nav>
    </>
  );
}

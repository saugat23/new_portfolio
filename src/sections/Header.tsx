import Link from "next/link";
import React from "react";
import { TbMenu } from "react-icons/tb";

export default function Header() {
  return (
    <section className="w-screen max-w-screen overflow-hidden">
      <div className="max-w-full w-full py-3 bg-transparent flex justify-between px-4 md:px-6 lg:px-8 items-center">
        <div>
          <Link href="/">
            <span className="tracking-tight font-xl md:text-2xl lg:text-3xl font-bold uppercase">
              Saugat Bhandari
            </span>
          </Link>
        </div>
        <div className="md:flex justify-center md:space-x-6 items-center">
        <div className="size-9 cursor-pointer bg-stone-200 border border-stone-400 rounded-full inline-flex items-center justify-center">
        <TbMenu />
        </div>
        <div>
        <button className="hidden md:inline-flex items-center justify-center bg-orange-600 hover:bg-stone-700 text-white transition ease-in-out duration-500 px-3 py-2 lg:px-4 lg:py-3 rounded-xl">
        <span className="uppercase text-bold text-base md:text-lg lg:text-xl">Contact Me</span>
        </button>
        </div>
        </div>
      </div>
      <div className="text-5xl font-medium">
        Crafting engaging, efficient, and impactful web solutions with
        precision.
      </div>
    </section>
  );
}

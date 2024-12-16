import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <section className="w-full max-w-full h-screen grid">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Crafting engaging, efficient, and impactful web solutions with
            precision.
          </h1>
          <div>
            <button className="inline-flex items-center justify-center p-2 rounded-xl border border-orange-500">
              View My Work
              <span>
                <BsChevronDoubleDown className="text-orange-600" />
              </span>
            </button>
            <button>Let&apos;s Talk</button>
          </div>
        </div>
      </section>
    </>
  );
}

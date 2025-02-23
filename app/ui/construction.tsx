"use client"

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

import constraction from "../../public/constraction.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: constraction,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


export default function Constructoin() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-40 lg:py-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-center lg:py-16 lg:flex lg:justify-center lg:items-center">
        <Lottie options={defaultOptions} />
        <h1 className="m-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Oops! Under Construction</h1>
      </div>
    </section>

  )
}
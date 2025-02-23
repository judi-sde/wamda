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
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex justify-center items-center">
        <Lottie options={defaultOptions} width="50%" height="50%" />
        <h1 className="m-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Oops! Under Construction</h1>
      </div>
    </section>

  )
}
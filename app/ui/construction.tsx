"use client"

import AnimationElement from "./AnimationElement"

export default function Constructoin() {
  return (
    <section className="min-h-screen py-40 lg:py-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-center lg:py-16 lg:flex lg:justify-center lg:items-center">
        <AnimationElement animation="constraction" />
        <h1 className="m-4 text-4xl font-extrabold tracking-tight leading-none text-black dark:text-white md:text-5xl lg:text-6xl">Oops! Under Construction</h1>
      </div>
    </section>

  )
}
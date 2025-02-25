"use client"

import constraction from "@/public/constraction.json"
import about from "@/public/about.json"
import loading from "@/public/loading.json"

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const options = [
  "about",
  "constraction",
  "loading",
] as const;

type OptionType = typeof options[number];

export default function AnimationElement({ animation }: { animation: OptionType }) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData[animation],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie options={defaultOptions} />
  )
}

const animationData = {
  about: about,
  constraction: constraction,
  loading: loading,
}
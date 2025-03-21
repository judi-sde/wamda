"use client"

import constraction from "@/public/constraction.json"
import about from "@/public/about.json"
import loading from "@/public/loading.json"
import background from "@/public/background.json"
import printing from "@/public/printing.json"
import error from "@/public/error.json"
import NotFound from "@/public/not-found.json"

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const options = [
  "about",
  "constraction",
  "loading",
  "background",
  "printing",
  "error",
  "not-found"
] as const;

type OptionType = typeof options[number];

export default function AnimationElement({ animation, dimensions }: { animation: OptionType, dimensions?: { width: number, height: number } }) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData[animation],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (dimensions) {
    return (
      <Lottie options={defaultOptions} width={dimensions.width} height={dimensions.height} />
    )
  }

  return (
    <Lottie options={defaultOptions} />
  )
}

const animationData = {
  about: about,
  constraction: constraction,
  loading: loading,
  background: background,
  printing: printing,
  error: error,
  ["not-found"]: NotFound
}
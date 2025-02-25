import AnimationElement from "./ui/AnimationElement";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AnimationElement animation="loading" />
    </div>
  );
}
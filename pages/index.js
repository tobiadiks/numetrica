import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 ">
      
      <div className="flex  mx-auto flex-wrap">

<div className="w-full md:w-1/2 lg:w-1/2">
      <h1 className="p-3 font-black text-led-text text-4xl md:text-5xl text-center md:text-left lg:text-left">
        Container for<p className="text-red-500">metrics that matter</p>
      </h1>
      <p className="p-3 text-led-text  text-center md:text-left lg:text-left"><span className="black">Numetrica</span> is a business and productivity tool uses.
From social app, productivity, finance and business.

Use your favorite tools in realtime</p>

  </div>

      <div className="w-full md:w-1/2 lg:w-1/2">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />
      </div>
      </div>

      
    </div>
  );
}

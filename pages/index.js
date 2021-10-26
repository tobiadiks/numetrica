import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 ">
      <div className="flex  md:mx-auto lg:mx-auto mx-0 flex-wrap mb-18">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-between align-middle">
          <h1 className=" font-black text-white text-4xl md:text-5xl text-center md:text-left lg:text-left">
            Turn feedbacks<p className="text-red-500">into excellent products</p>
          </h1>
          <div className=" text-led-text mt-6  text-center md:text-left lg:text-left">
            <b className="black">Numetrica</b> is an individual & business and utility
            tool. From social app, productivity, finance and business. Use your
            favorite tools in realtime
          </div>
          <div className="w-auto p-0">
            <Link href="/auth" passHref={true}>
              <PrimaryButton title="Sign in now" />
            </Link>
          </div>
          <div className=" text-led-text text-xs text-center md:text-left lg:text-left">
            <div className="hover:underline cursor-pointer">
              What permissions do we need?
            </div>
            <div>By signing up, you agree to our Terms and Privacy Policy.</div>
          </div>
        </div>

        <div className="w-full h-auto md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 mx-3 md:mx-0 lg:mx-0">
          {/* <Image
            src="/livemetric.png"
            alt="Live metrics dashboard"
            width={1152}
            height={700}
            priority
          /> */}
        </div>
      </div>

      <div className="flex  md:mx-auto lg:mx-auto mx-0 flex-wrap flex-row-reverse my-20">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center align-middle">
          <h1 className=" font-black text-led-text text-4xl md:text-5xl text-center md:text-left lg:text-left">
            Monitor your social app metric
          </h1>
          <div className=" text-led-text  text-center md:text-left lg:text-left">
            Fancy fullscreen mode, turn your gadget into a monitoring tool at
            home or offices.
          </div>
          <div className="w-auto  p-0">
            <PrimaryButton title="Get started" />
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 ">
          <Image
            src="/metricmac.png"
            alt="Metric on mac"
            width={1152}
            height={700}
            priority
          />
        </div>
      </div>
    </div>
  );
}

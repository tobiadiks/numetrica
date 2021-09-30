import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 ">
      <div className="flex  md:mx-auto lg:mx-auto mx-0 flex-wrap mb-18">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-between align-middle">
          <h1 className="p-3 font-black text-led-text text-4xl md:text-5xl text-center md:text-left lg:text-left">
            LCD for<p className="text-red-500">metrics that matter</p>
          </h1>
          <p className="px-3 text-led-text  text-center md:text-left lg:text-left">
            <span className="black">Numetrica</span> is a business and utility
            tool. From social app, productivity, finance and business. Use your
            favorite tools in realtime
          </p>
          <div className="w-auto md:px-3 lg:px-3 p-0">
            <Link href="/auth" passHref={true}>
              <PrimaryButton title="Sign in now" />
            </Link>
          </div>
          <p className="p-3 text-led-text text-xs text-center md:text-left lg:text-left">
            <span className="hover:underline cursor-pointer">
              What permissions do we need?
            </span>
            <p>By signing up, you agree to our Terms and Privacy Policy.</p>
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 border-2 border-led-text rounded-md mx-3 md:mx-0 lg:mx-0">
          <Image
            src="/livemetric.png"
            alt="Live metrics dashboard"
            width={1152}
            height={700}
            priority
          />
        </div>
      </div>

      <div className="flex  md:mx-auto lg:mx-auto mx-0 flex-wrap flex-row-reverse my-20">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center align-middle">
          <h1 className="p-3 font-black text-led-text text-4xl md:text-5xl text-center md:text-left lg:text-left">
            Monitor your social app metric
          </h1>
          <p className="px-3 text-led-text  text-center md:text-left lg:text-left">
            Fancy fullscreen mode, turn your gadget into a monitoring tool at
            home or offices.
          </p>
          <div className="w-auto md:px-3 lg:px-3 p-0">
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

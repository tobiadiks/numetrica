import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import Link from "next/link";
import AreaChart from "@components/Charts/areaChart";
import { HeroCard } from "@components/Cards/heroCard";
import ServiceRequestComponent from "@components/Cards/serviceRequest";
import { useRouter } from "next/router";
export default function IndexPage() {
  const route = useRouter()
  return (
    <div className="flex flex-col items-center justify-center space-y-12 ">
      <div className="flex  md:mx-auto lg:mx-auto mx-0 flex-wrap mb-18 lg:w-full">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center  align-middle">
          <h1 className=" font-black text-white text-4xl md:text-5xl text-center md:text-left lg:text-left">
            Turn feedbacks
            <p className="text-blue-400">into excellent products</p>
          </h1>
          <div className=" text-gray-200 mt-6  text-center md:text-left lg:text-left md:text-lg">
            <b className=" text-blue-400">Numetrica</b> is the business tool for
            collecting and processing feedbacks using industry grade{" "}
            <b className="black text-blue-400">AI assistants</b>.
          </div>
          <div className="w-auto p-0">
            <PrimaryButton
              onClick={() => {
                route.push("/auth");
              }}
              title="Sign in now"
            />
          </div>
          <div className=" text-gray-200 text-xs md:text-sm text-center md:text-left lg:text-left">
            <div className="hover:underline cursor-pointer">
              What permissions do we need?
            </div>
            <div>
              By signing up, you agree to our{" "}
              <span className=" text-blue-400">Terms</span> and{" "}
              <span className=" text-blue-400">Privacy Policy</span>.
            </div>
          </div>
        </div>

        <div className="w-full h-auto md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 mx-3 md:mx-0 lg:mx-0 ">
          <Image
            src="/product.png"
            alt="Live metrics dashboard"
            layout="responsive"
            height={694}
            width={1280}
            priority
          />
        </div>
      </div>

      <div className="flex  md:mx-auto lg:mx-auto mx-0 flex-wrap flex-row-reverse my-20 lg:w-full">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center align-middle">
          <h1 className=" font-black text-white text-4xl md:text-5xl text-center md:text-left lg:text-left">
            Build the product customer enjoy
          </h1>
          <div className=" text-gray-200 mt-6  text-center md:text-left lg:text-left md:text-lg">
            Getting feedback survey should be fun for both your team and
            customer. Numetrica builder tool is 100% visual - coding skills are
            not compulsory for you to start setting up your own survey.
          </div>
          <div className="w-auto  p-0">
            <PrimaryButton onClick={() => {
                route.push("/signup");
              }} title="Get started" />
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 ">
          {/* <Image
            src="/metricmac.png"
            alt="Metric on mac"
            width={1152}
            height={700}
            priority
          /> */}
          <AreaChart />
        </div>
      </div>

      <div className="flex flex-col   md:mx-auto lg:mx-auto mx-0  md:my-20 lg:w-full bg-blue-400 py-12 rounded-md">
        <div className="text-center text-black font-extrabold text-2xl w-full md:text-4xl font-serif">
          How does it work?
        </div>
        <div className="flex w-full flex-col md:flex-row justify-center align-middle md:flex-wrap mt-8">
          <div className="w-full md:w-1/3  md:px-8 px-4 mt-4 md:mt-0">
            <HeroCard
              number={"1"}
              title={"Create"}
              detail={
                "Create campaign(s) and be assigned a unique key and custom pages along with every campaign."
              }
            />
          </div>
          <div className="w-full md:w-1/3  md:px-8 px-4 mt-4 md:mt-0">
            <HeroCard
              number={"2"}
              title={"Share "}
              detail={
                "Once created, campaign can be shared as web pages or can be embedded using our SDK."
              }
            />
          </div>
          <div className="w-full md:w-1/3  md:px-8 px-4 mt-4 md:mt-0">
            <HeroCard
              number={"3"}
              title={"Monitor"}
              detail={
                "Monitor your metrics easily from your dashboard,and automate feedback processing with AI."
              }
            />
          </div>
        </div>
      </div>
      <div>
        <ServiceRequestComponent />
      </div>
    </div>
  );
}

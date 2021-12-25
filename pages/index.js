import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import Link from "next/link";
import AreaChart from "@components/Charts/areaChart";
import { HeroCard } from "@components/Cards/heroCard";
import ServiceRequestComponent from "@components/Cards/serviceRequest";
import { useRouter } from "next/router";
import {
  faArrowRight,
  faChartArea,
  faCube,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
export default function IndexPage() {
  const route = useRouter();
  return (
    <div className="flex py-12 w-full flex-col items-center justify-center align-middle space-y-12 ">
      <div className="flex w-full justify-center flex-col md:mx-auto lg:mx-auto mx-auto  mb-18 lg:w-full relative">
        <div className=" px-4 w-full mx-auto md:px-0 z-30  md:w-3/4 lg:w-3/4 flex md:mx-auto flex-col justify-center   ">
          <h1 className=" font-black w-full font-serif text-black  text-5xl md:text-7xl text-center md:text-center">
            Turn feedbacks
            into excellent products
          </h1>
          <div className=" text-black mt-6  w-full mx-auto text-center md:text-center  md:text-lg">
            <b className=" text-black">Notics</b> is the business tool for
            collecting and processing feedbacks using industry grade{" "}
            <b className="black text-black-800">AI assistants</b>.
          </div>
          <div className="w-auto md:mx-auto md:w-3/4 p-0">
            <PrimaryButton
              icon={faArrowRight}
              onClick={() => {
                route.push("/auth");
              }}
              title="Sign in now"
            />
          </div>
          <div className=" text-black-800 text-xs md:text-sm text-center md:text-center">
            <div className="font-semibold">No credit card required.</div>
            <div>
              By signing up, you agree to our{" "}
              <span className=" text-black-800">Terms</span> and{" "}
              <span className=" text-black-800">Privacy Policy</span>.
            </div>
          </div>
        </div>
        {/* glass and color */}
        <div className="h-14 w-14 top-1/3 left-5 rounded-full z-0 bg-yellow-400 absolute "></div>
        <div className="h-12 w-12 top-1/3 left-5 rounded-full z-0 bg-yellow-400 absolute animate-ping"></div>
        <div className="h-8 w-8 top-1/4 right-5 rounded-full z-0 bg-red-400 absolute "></div>
        <div className="h-6 w-6 top-1/4 right-5 rounded-full z-0 bg-red-400 absolute "></div>
        <div className="w-full top-0 h-full z-10 backdrop-filter backdrop-blur-sm absolute md:mx-auto "></div>
        {/* glass and color */}
      </div>

      <div className="flex w-full px-4 flex-col  md:px-4 md:mx-auto lg:mx-auto mx-auto z-30 md:flex-row-reverse py-20 ">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center  mx-auto align-middle">
          <h1 className=" font-black text-black text-4xl md:text-5xl text-center md:text-left lg:text-left">
            Build the product customer enjoy
          </h1>
          <div className=" text-black-800 mt-6 mx-auto text-center md:text-left lg:text-left md:text-lg">
            Getting feedback survey should be fun for both your team and
            customer. Notics builder tool is 100% visual - coding skills are not
            compulsory for you to start setting up your own survey.
          </div>
          <div className="w-auto  p-0">
            <PrimaryButton
              onClick={() => {
                route.push("/signup");
              }}
              title="Get started"
              icon={faArrowRight}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 ">
          <AreaChart />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full bg-black  md:mx-auto lg:mx-auto mx-auto  md:my-20 lg:w-full py-12 ">
        <div className="text-center mx-auto text-white font-extrabold text-2xl w-full md:text-4xl font-serif">
          How does it work?
        </div>
        <div className="flex w-full flex-col md:flex-row justify-center align-middle md:flex-wrap mt-8 mx-auto">
          <div className="w-full md:w-1/3  md:px-8 px-4 mt-4 md:mt-0">
            <HeroCard
              title={"Create"}
              icon={faCube}
              detail={
                "Create campaign(s) and be assigned a unique key and custom pages along with every campaign."
              }
            />
          </div>
          <div className="w-full md:w-1/3  md:px-8 px-4 mt-4 md:mt-0">
            <HeroCard
              icon={faShare}
              title={"Share "}
              detail={
                "Once created, campaign can be shared as web pages or can be embedded using our SDK."
              }
            />
          </div>
          <div className="w-full md:w-1/3  md:px-8 px-4 mt-4 md:mt-0">
            <HeroCard
              icon={faChartArea}
              title={"Monitor"}
              detail={
                "Monitor your metrics easily from your dashboard,and automate feedback processing with AI."
              }
            />
          </div>
        </div>
      </div>
      <div className="md:px-4 w-full px-4 mx-auto flex justify-center py-20">
        <ServiceRequestComponent />
      </div>
    </div>
  );
}

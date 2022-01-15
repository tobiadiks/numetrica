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
          <h1 className=" font-black w-full  font-serif-Nunito text-basic1  text-3xl md:text-7xl text-center md:text-center">
            Turn feedbacks into excellent products
          </h1>
          <div className=" text-basic1 mt-6  w-full mx-auto text-center md:text-center  md:text-lg">
            <b className=" text-basic1">Notics</b> is the business tool for
            collecting and processing feedbacks using industry grade{" "}
            <b className="">AI assistants</b>.
          </div>
          <div className="w-auto md:mx-auto md:w-3/4 p-0">
            <PrimaryButton
              onClick={() => {
                route.push("/signup");
              }}
              title="Get started"
              icon={faArrowRight}
            />
          </div>
          <div className=" text-basic1 text-xs md:text-sm text-center md:text-center">
            <div className="font-semibold">No credit card required.</div>
            <div>
              By signing up, you agree to our{" "}
              <Link href={"/terms"} passHref><span className="cursor-pointer text-main-brand1">Terms</span></Link> and{" "}
              <Link href={"/privacy-policy"} passHref><span className="cursor-pointer text-main-brand1">Privacy Policy</span></Link>.
            </div>
          </div>
        </div>
        {/* glass and color */}
        <div className="h-14 w-14 top-1/3 left-5 rounded-full z-0 bg-yellow-400 absolute "></div>
        
        <div className="h-12 w-12 top-1/3 left-5 rounded-full z-0 bg-yellow-400 absolute animate-ping"></div>
        <div className="h-8 w-8 top-1/4 right-5 rounded-full z-0 bg-red-400 absolute "></div>
        <div className="h-6 w-6 top-1/4 right-5 rounded-full z-0 bg-red-400 absolute animate-ping delay-[4000]"></div>
        <div className="w-full top-0 h-full z-10 backdrop-filter backdrop-blur-sm absolute md:mx-auto "></div>
        {/* glass and color */}
      </div>

      <div className="flex w-full px-4 flex-col  md:px-4 md:mx-auto lg:mx-auto mx-auto z-30 md:flex-row-reverse py-10 bg-main-brand3 ">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center  mx-auto align-middle">
          <h1 className=" font-black text-basic1 text-2xl md:text-5xl text-center md:text-left lg:text-left">
            Build the product customer enjoy
          </h1>
          <div className=" text-basic1 mt-6 mx-auto text-center md:text-left lg:text-left md:text-lg">
            Getting feedback survey should be fun for both your team and
            customer. Notics builder tool is 100% visual - coding skills are not
            compulsory for you to start setting up for growth.
          </div>
          <div className="w-auto  p-0">
            <PrimaryButton
              icon={faArrowRight}
              onClick={() => {
                route.push("/auth");
              }}
              title="Sign in now"
            />
          </div>
        </div>

        <div className="w-full h-full md:pr-4 md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 relative">
          <Image
            alt="chat"
            src={"/chat.svg"}
            width={4359}
            height={5022}
            layout="responsive"
          />
        </div>
      </div>

      <div className="flex w-full px-4 flex-col  md:px-4 py-10  ">
        <div className="flex flex-col justify-center text-basic1">
          <div className="text-center mx-auto text-2xl font-bold md:px-52">
            A complete feedback <span className="text-main-brand1">OS </span>for
            successful solution
          </div>
          <div className="text-center mx-auto md:text-xs mt-4 md:px-40">
            Whatever you are building, our tools are carved to be the best fit
            for your organization, from pages, customer acquisition, survey,
            customer support or live chats, all-in-one with our powerful
            automation tool.{" "}
          </div>
        </div>

        {/* circles */}
        <div className=" w-full h-60 mx-auto mt-12    flex align-baseline   relative ">
        <div className="h-20 w-20 p-4 absolute  shadow-md rounded-full bg-white  top-0 left-0 md:left-24">
            <Image
              src="/FeedbackAudience.svg"
              layout="responsive"
              alt="logo"
              height={120}
              width={120}
            />
          </div>

          <div className="h-28 w-28 p-4 absolute  shadow-md rounded-full bg-yellow-100  top-12 right-5 md:right-32">
            <Image
              src="/UserAcquisitions.svg"
              layout="responsive"
              alt="logo"
              height={160}
              width={160}
            />
          </div>

          <div className="h-28 w-28 p-4 absolute  shadow-md rounded-full bg-green-100  bottom-10 left-0 md:right-1/2">
            <Image
              src="/Analytic.svg"
              layout="responsive"
              alt="logo"
              height={160}
              width={160}
            />
          </div>

          <div className="h-16 w-16 p-4 absolute  shadow-md rounded-full bg-blue-100  top-0 right-28 md:right-1/2">
            <Image
              src="/Website.svg"
              layout="responsive"
              alt="logo"
              height={160}
              width={160}
            />
          </div>
          <div className="h-20 w-20 p-4 relative self-end shadow-md rounded-full bg-red-100  bottom-0 left-1/2 transform -translate-x-1/2">
            <Image
              src="/Startup.svg"
              layout="responsive"
              alt="logo"
              height={160}
              width={160}
            />
          </div>
        </div>

<div >
  <div className=" text-center mt-8 font-semibold text-basic1  text-medium w-full ">Want to build a successful company?</div> 
  <div className="w-auto md:w-1/2 mx-auto  p-0">
            <PrimaryButton
              icon={faArrowRight}
              onClick={() => {
                route.push("/signup");
              }}
              title="Start here"
            />
          </div>
</div>

      </div>

      <div className="flex flex-col justify-center w-full bg-main-brand3  md:mx-auto lg:mx-auto mx-auto   lg:w-full py-10 ">
        <div className="text-center mx-auto text-basic1 font-extrabold text-2xl w-full md:text-4xl font-serif">
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
      <div className="md:px-4 w-full px-4 mx-auto flex justify-center py-10">
        <ServiceRequestComponent />
      </div>
    </div>
  );
}

import PrimaryButton from "@components/Inputs/primaryButton";
import Image from "next/image";
export default function ABTestPage() {
  return (
    <div className="min-h-screen flex flex-col relative md:flex-row md:transform translate-y-1 md:-translate-y-2">
      <div className="w-full md:w-1/2 flex  align-middle flex-col bg-green-500">
        <div className="w-24 h-24 backdrop-filter rounded-lg backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div className="bg-white h-[65%] w-full rounded-b-lg self-end flex">
            <div className="font-bold text-xs text-green-500 text-center mx-auto my-auto">
              65%
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
            <div className=" w-1/6 h-2 rounded-lg bg-green-500 mx-auto my-4"></div>
            <div className=" w-2/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
            <div className=" w-1/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
          <div className="p-4 m-1 md:m-8 bg-green-50 rounded-lg ">
            <Image
              layout="responsive"
              alt="B"
              src={"/chat.svg"}
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex  align-middle flex-col bg-blue-500">
        <div className="w-24 h-24 backdrop-filter rounded-lg backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div className="bg-white h-[45%] w-full rounded-b-lg self-end flex">
            <div className="font-bold text-xs text-blue-500 text-center mx-auto my-auto">
              5%
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
            <div className=" w-1/6 h-2 rounded-lg bg-blue-500 mx-auto my-4"></div>
            <div className=" w-2/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
            <div className=" w-1/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
          <div className="p-4 m-1 md:m-8 bg-blue-50 rounded-lg ">
            <Image
              layout="responsive"
              alt="B"
              src={"/critter.svg"}
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

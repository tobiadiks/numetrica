import PrimaryButton from "@components/Inputs/primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { faAward,faImages } from "@fortawesome/free-solid-svg-icons";
import { abtestGetVote, abtestVote } from "utils/abtest.utils";
export default function ABTestPage() {
  const [imageUrlA, setImageUrlA] = useState(null);
  const [imageUrlB, setImageUrlB] = useState(null);
  const [value, setValue] = useState(null);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await abtestGetVote({
        project_id: route.query.id,
      });
      console.log(response);
      if (response.data) {
        console.log(response);
        setImageUrlA(response.data.abtest.item_a_url);
        setImageUrlB(response.data.abtest.item_b_url);
        setLoading(false);
      }
      setLoading(false);
    }
    getData();
  }, [route.query.id]);

  const voteABTest = () => {
    const response = abtestVote({
      project_id: route.query.id,
      value: value,
    });setVoted(!voted);
    if (response.status==201) {
      null
    }
    

    console.log(response);
  };

  while (voted) {
    return (
      <div className="min-h-screen flex flex-col relative md:flex-row md:transform  ">
        <div className="mx-auto my-auto  text-lg md:text-3xl font-bold">
          <div className="text-center text-basic3 text-5xl">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className=" text-basic1">Congratulations</div>
          <div className=" text-basic3 text-sm text-center">Successfuly done</div>
        </div>
      </div>
    );
  }
console.log(voted)
  return (
    <div className="min-h-screen flex flex-col relative md:flex-row md:transform translate-y-1 md:-translate-y-2">
      {" "}
      <div className="w-full md:w-1/2 flex  align-middle flex-col bg-green-500">
        <div className="w-24 h-24 backdrop-filter rounded-full backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div
            onMouseDown={() => {
              setTimeout(() => {
                setValue("A");
                voteABTest();
              }, 3000);
            }}
            className="bg-white h-[65%]  cursor-pointer w-[65%] animate-pulse active:animate-ping rounded-full mx-auto self-center flex"
          >
            <div className="font-bold text-xs text-green-500 text-center mx-auto my-auto">
              Press <p> or </p>Hold
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
          <div className=" w-1/6 h-2 rounded-lg bg-green-500 mx-auto my-4"></div>
          <div className=" w-2/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
          <div className=" w-1/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
          <div className={`p-4 m-1 md:m-8 ${loading?'animate-pulse':''}  bg-green-50 rounded-lg `}>
          {imageUrlA === null || imageUrlA === undefined ? (
                <div className="relative flex flex-row w-full h-full ">
                  <div className="text-8xl w-1/2 text-left text-green-100 font-bold self-end">
                    A
                  </div>
                  <div className="relative w-1/2">
                    <div className="h-16 w-16 bg-green-100 absolute top-12 right-8 rounded-full"></div>
                    <div className="h-1/2 w-full  text-green-200  absolute bottom-0 text-8xl">
                      <FontAwesomeIcon icon={faImages} />
                    </div>
                  </div>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="h-full w-full object-contain"
                  alt="B"
                  src={imageUrlA}
                />
              )}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex  align-middle flex-col bg-blue-500">
        <div className="w-24 h-24 relative backdrop-filter rounded-full backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div
            onMouseDown={() => {
              setTimeout(() => {
                setValue("B");
                voteABTest();
              }, 3000);
            }}
            className="bg-white h-[65%] active:animate-ping cursor-pointer w-[65%] animate-pulse rounded-full self-center mx-auto flex"
          >
            <div className="font-bold text-xs text-blue-500 text-center mx-auto my-auto">
              Press <p> or </p>Hold
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
          <div className=" w-1/6 h-2 rounded-lg bg-blue-500 mx-auto my-4"></div>
          <div className=" w-2/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
          <div className=" w-1/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
          <div className={`p-4 m-1 md:m-8 ${loading?'animate-pulse':''}  bg-blue-50 rounded-lg `}>
          {imageUrlB === null || imageUrlB === undefined ? (
                <div className="relative flex flex-row w-full h-full ">
                  <div className="text-8xl w-1/2 text-left text-blue-100 font-bold self-end">
                    B
                  </div>
                  <div className="relative w-1/2">
                    <div className="h-16 w-16 bg-blue-100 absolute top-12 right-8 rounded-full"></div>
                    <div className="h-1/2 w-full  text-blue-200  absolute bottom-0 text-8xl">
                      <FontAwesomeIcon icon={faImages} />
                    </div>
                  </div>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="h-full w-full object-contain"
                  alt="B"
                  src={imageUrlB}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

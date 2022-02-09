import PrimaryButton from "@components/Inputs/primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faImages,
  faInfoCircle,
  faMarker,
  faSave,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import cn from "classnames";
import { Image, image } from "next/image";
import { useRef, useState } from "react";
import TextInput from "@components/Inputs/textInput";
import { abtestEdit, abtestGet } from "utils/abtest.utils";
import { useRouter } from "next/router";
import {useEffect } from "react";
export default function ABTestPage() {
  //const [imageFileA, setImageFileA] = useState(null);
  //const [imageFileB, setImageFileB] = useState(null);
  const [imageUrlA, setImageUrlA] = useState(null);
  const [imageUrlB, setImageUrlB] = useState(null);
  const [imageAVisible, setImageAVisible] = useState(false);
  const [imageBVisible, setImageBVisible] = useState(false);
  const [linkA, setLinkA] = useState(null);
  const [linkB, setLinkB] = useState(null);
  const userState = useSelector((state) => state.userStore);
  // const imgA = useRef(null);
  // const imgB = useRef(null);
  const route = useRouter();

  useEffect(() => {
    const data = abtestGet({
      company_id: userState.user.company.company_id,
      accessToken: userState.user.accessToken,
      project_id: route.query.id,
    });
console.log(data)
  }, [route.query.id,userState.user.accessToken,userState.user.company.company_id]);

  const saveABTest = () => {
    abtestEdit({
      accessToken: userState.user.accessToken,
      company_id: userState.user.company.company_id,
      project_id: route.query.id,
      imageUrlA: imageUrlA,
      imageUrlB: imageUrlB,
    });
  };

  return (
    <div className="relative">
      <div
        onClick={() => saveABTest()}
        className={cn(
          "fixed right-0 z-50 top-3/4 bg-blue-50 shadow-md text-main-brand1 text text-2xl h-16 w-16 rounded-full p-2 animate-pulse delay-1000 flex content-center",
          imageUrlA && imageUrlB ? "block" : "hidden"
        )}
      >
        <FontAwesomeIcon className="mx-auto my-auto" icon={faSave} />
      </div>
      <div className="min-h-screen  flex flex-col  md:flex-row md:transform translate-y-1 md:-translate-y-2">
        <div className="w-full md:w-1/2 flex  align-middle flex-col bg-green-500">
          {/* <input
            className="hidden"
            ref={imgA}
            type={"file"}
            onChange={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setImageFileA(e.target.files[0]);
              setImageUrlA(URL.createObjectURL(e.target.files[0]))
            }}
          /> */}
          {/* <div className="w-24 h-24 backdrop-filter rounded-lg backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div className="bg-white h-[65%] w-full rounded-b-lg self-end flex">
            <div className="font-bold text-xs text-green-500 text-center mx-auto my-auto">
              65%
            </div>
          </div>
        </div> */}
          <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
            <div className=" w-1/6 h-2 rounded-lg bg-green-500 mx-auto my-4"></div>
            <div className=" w-2/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
            <div className=" w-1/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
            <div
              className="p-4 m-1 md:m-2 h-[22rem] relative bg-green-50 rounded-lg "
              // onClick={() => imgA.current.click()}
              onClick={() => (!imageAVisible ? setImageAVisible(true) : null)}
            >
              <div
                className={cn(
                  "z-50 w-[90%] absolute transition-all delay-1000 ease-in",
                  imageAVisible ? "flex" : "hidden"
                )}
              >
                <TextInput
                  value={linkA}
                  onChange={(e) => setLinkA(e.target.value)}
                  placeholder="Image A URL"
                />
                <PrimaryButton
                  onClick={() => {
                    setImageAVisible(false);
                    setImageUrlA(linkA);
                  }}
                  color="bg-green-500"
                  className="bg-green-200"
                  title="Done"
                />
              </div>
              {imageUrlA === null ? (
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
              <div
                onClick={() => {
                  setImageAVisible(false);
                }}
                className={cn(
                  " text-green-500 absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-xl z-50 hover:shadow-sm",
                  imageAVisible ? "block" : "hidden"
                )}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex  align-middle flex-col bg-blue-500">
          {/* <input
            className="hidden"
            ref={imgB}
            type={"file"}
            onChange={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setImageFileB(e.target.files[0]);
              setImageUrlB(URL.createObjectURL(e.target.files[0]))
            }}
          /> */}
          {/* <div className="w-24 h-24 backdrop-filter rounded-lg backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div className="bg-white h-[45%] w-full rounded-b-lg self-end flex">
            <div className="font-bold text-xs text-blue-500 text-center mx-auto my-auto">
              5%
            </div>
          </div>
        </div> */}

          <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg ">
            <div className=" w-1/6 h-2 rounded-lg bg-blue-500 mx-auto my-4"></div>
            <div className=" w-2/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
            <div className=" w-1/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
            <div
              className="p-4 m-1 md:m-2 h-[22rem] relative bg-blue-50 rounded-lg "
              //onClick={() => imgB.current.click()}
              onClick={() => (!imageBVisible ? setImageBVisible(true) : null)}
            >
              <div
                className={cn(
                  "z-50 w-[90%] absolute transition-all delay-1000 ease-in",
                  imageBVisible ? "flex" : "hidden"
                )}
              >
                <TextInput
                  value={linkB}
                  onChange={(e) => setLinkB(e.target.value)}
                  placeholder="Image B URL"
                />
                <PrimaryButton
                  onClick={() => {
                    setImageBVisible(false);
                    setImageUrlB(linkB);
                  }}
                  color="bg-blue-500"
                  className="bg-green-200"
                  title="Done"
                />
              </div>
              {imageUrlB === null ? (
                <div className="relative flex flex-row-reverse w-full h-full ">
                  <div className="text-8xl w-1/2 text-right text-blue-100 font-bold self-end">
                    B
                  </div>
                  <div className="relative w-1/2">
                    <div className="h-16 w-16 bg-blue-100 absolute top-12 left-8 rounded-full"></div>
                    <div className="h-1/2 w-full text-8xl text-blue-200 absolute bottom-0 ">
                      <FontAwesomeIcon icon={faImages} />
                    </div>
                  </div>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-full h-full object-contain"
                  alt="B"
                  src={imageUrlB}
                />
              )}
              <div
                onClick={() => setImageBVisible(false)}
                className={cn(
                  " text-blue-500 absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-xl z-50 hover:shadow-sm",
                  imageBVisible ? "block" : "hidden"
                )}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

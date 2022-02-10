import PrimaryButton from "@components/Inputs/primaryButton";
import Image from "next/image";
import cn from 'classnames'
import { abtestGet } from "utils/abtest.utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";


export default function ABTestPage() {
  const route = useRouter();
  const { id } = route.query;
  const userState = useSelector((state) => state.userStore);
  const [imageUrlA, setImageUrlA] = useState(null);
  const [imageUrlB, setImageUrlB] = useState(null);
  const [votes,setVotes]=useState({a:null,b:null})
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await abtestGet({
        company_id: userState.user.company.company_id,
        accessToken: userState.user.accessToken,
        project_id: id,
      });
      console.log(response);
      if (response.status === 401) {
        route.push("/session");
        setLoading(false);
      } else if (response.data) {
        console.log(response);
        setImageUrlA(response.data.item_a_url);
        setImageUrlB(response.data.item_b_url);
        setVotes({a:response.data.item_a_vote,b:response.data.item_b_vote})
        setLoading(false);
      }
      setLoading(false);
    }
    getData();
  }, [route,id, userState.user.accessToken, userState.user.company.company_id]);


  return (
    <div className="min-h-screen flex flex-col relative md:flex-row md:transform translate-y-1 md:-translate-y-2">
      <div className="w-full md:w-1/2 flex  align-middle flex-col bg-green-500">
        <div className="w-24 h-24 backdrop-filter rounded-lg backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div className={cn('bg-white h-full  w-full rounded-b-lg self-end flex',
          // votes.a>=0 || votes.b>=0?
          // 'h'+[(votes.a / (votes.a + votes.b)*100).toFixed()]:'0'
          )}>
            <div className="font-bold text-md text-green-500 text-center mx-auto my-auto">
              {votes.a>=0 || votes.b>=0?
              (votes.a / (votes.a + votes.b)*100).toFixed():'-'}%
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
            <div className=" w-1/6 h-2 rounded-lg bg-green-500 mx-auto my-4"></div>
            <div className=" w-2/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
            <div className=" w-1/5 h-2 rounded-lg bg-green-200 mx-auto my-2"></div>
          <div className="p-4 m-1 md:m-8 bg-green-50 rounded-lg ">
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
        <div className="w-24 h-24 backdrop-filter rounded-lg backdrop-brightness-110 md:mt-6 mt-8 mx-auto flex">
          <div className={cn('bg-white h-full w-full rounded-b-lg self-end flex',
          // votes.a>=0 || votes.b>=0?
          // 'h-['+(votes.b / (votes.a + votes.b)*100).toFixed().toString()+'%]':['0'+'%']
          )
          }>
            <div className="font-bold text-md text-blue-500 text-center mx-auto my-auto">
            {votes.a>=0 || votes.b>=0?
              (votes.b / (votes.a + votes.b)*100).toFixed():'-'}%
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-white m-6 md:m-12 rounded-lg">
            <div className=" w-1/6 h-2 rounded-lg bg-blue-500 mx-auto my-4"></div>
            <div className=" w-2/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
            <div className=" w-1/5 h-2 rounded-lg bg-blue-200 mx-auto my-2"></div>
          <div className="p-4 m-1 md:m-8 bg-blue-50 rounded-lg ">
          {imageUrlB === null || imageUrlB === undefined ? (
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
          </div>
        </div>
      </div>
    </div>
  );
}

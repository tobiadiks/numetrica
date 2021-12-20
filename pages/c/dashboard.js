import DropDownInput from "@components/Inputs/dropDownInput";
import TextInput from "@components/Inputs/textInput";
import FeedBackCard from "@components/Cards/feedbackCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { VictoryArea, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
export default function DashboardPage() {
  const route = useRouter();
  const userState = useSelector((state) => state.userStore.user);
  const promiseState = useSelector((state) => state.userStore.status);

  useEffect(() => {
    if (!userState.success && promiseState) {
      route.push("/auth");
    }
  }, [route, userState.success, promiseState]);


  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-start space-y-0 ">
      <div className="w-full md:w-1/4 lg:w-1/4 hidden md:flex flex-col justify-start align-middle bg-deep-blue ">
        <div className="py-5">
          
         {/* content */}
         <ul>
             <li>
                 
             </li>
         </ul>
        </div>
      </div>

      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col justify-start align-middle min-h-screen">
        <div className="pt-5">
         {/* content */}
         
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue">
        <div className="">
          <div className="md:w-full py-5 lg:w-full w-full flex justify-center align-middle text-gray-200 border-b px-3  border-gray-800">
            <div>
              <div className="flex flex-row align-middle mt-2">
                <div className="text-blue-400 font-semibold mx-auto">Task</div>
                <div className="text-white font-bold mx-auto">(15)</div>
              </div>
             
            </div>
          </div>

          <div className="md:full lg:w-full w-full flex flex-col justify-center align-middle text-gray-200 border-b py-5 px-3 border-gray-800">
            <div className="flex flex-row align-middle  mt-2">
              <div className="text-white mx-auto font-semibold text-center">Add</div>
              <div className="text-white mx-auto font-semibold text-center">Filter</div>
              {/* <div className="text-white font-bold"></div> */}
            </div>

            <div className="flex flex-col lg:flex-col md:flex-col w-full justify-between align-middle">
              <div className="w-full mx-auto">
                {/* content */}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

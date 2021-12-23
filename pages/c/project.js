import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useRouter } from "next/router";
import SideNavigation from "@components/Navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCardComponent from "@components/Cards/projectCard";
import PrimaryButton from "@components/Inputs/primaryButton";
import CreateProjectCardComponent from "@components/Cards/createProjectCard";
import { useState } from "react";

export default function ProjectPage() {
  const route = useRouter();
  const userState = useSelector((state) => state.userStore);
  const [hidden,setHidden]=useState(true)
 
 
  useEffect(() => {
    if (!userState.user.success && userState.status) {
      route.push("/auth");
    }
  }, [route, userState.user.success, userState.status]);

 
  

  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-start space-y-0 md:min-h-screen relative">
      {/* new dialog */}
      <CreateProjectCardComponent hidden={hidden}/>
      {/* sidenav */}
      <SideNavigation />

      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col ">
        {/* content */}
        <div className="px-2 flex justify-between items-center">
          <div className="text-white text-xl font-bold">Projects</div>
          <div>
            <PrimaryButton onClick={()=>setHidden(!hidden)} title="New" icon={faPlusCircle} />
          </div>
          
        </div>
        <ProjectCardComponent />
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue">
        <div className="">
          <div className="md:w-full py-5 lg:w-full w-full flex justify-center align-middle text-gray-200 border-b px-3  border-gray-800">
            <div className="flex flex-row align-middle mt-2">
              <div className="text-blue-400 font-semibold mx-auto">
                Planned Task
              </div>
              <div className="text-white font-bold mx-auto">(15)</div>
            </div>
          </div>
        </div>
        {/* content */}
        <ul className="text-white">
          <li className="flex justify-between border text-base md:text-xs  border-gray-800 rounded p-2 ">
            <div className="pr-3 w-4/5">Create portfolio</div>
            <div className="flex justify-end w-1/5">
              <div>
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              {/* <div>
                <FontAwesomeIcon icon={faTrash} />
              </div> */}
            </div>
          </li>
          <li className="flex justify-between border text-base md:text-xs  border-gray-800 rounded p-2 ">
            <div className="pr-3 w-4/5">Brief the design team on new bugs</div>
            <div className="flex justify-end w-1/5">
              <div className="text-blue-400">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              {/* <div>
                <FontAwesomeIcon icon={faTrash} />
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
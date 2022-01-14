import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useRouter } from "next/router";
import SideNavigation from "@components/Navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import CreateProjectCardComponent from "@components/Cards/createProjectCard";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useState } from "react";
import dynamic from 'next/dynamic'
import TaskCardComponent from "@components/Cards/taskCard";
const ProjectCardComponent = dynamic(()=>import("@components/Cards/projectCard"), {ssr:false})
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
          <div className="text-basic1 text-xl font-bold">Tasks & Todos</div>
          <div>
            <PrimaryButton onClick={()=>setHidden(!hidden)} title="New" icon={faPlusCircle} />
          </div>
          
        </div>
        {/* <ProjectCardComponent /> */}
      </div>

     <TaskCardComponent/>
    </div>
  );
}

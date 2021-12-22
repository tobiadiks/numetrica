import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useRouter } from "next/router";
import ProjectAtomCardComponent from "./projectAtomCard";

export default function ProjectCardComponent(props) {

  const route=useRouter()
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-2  justify-start md:h-screen  md:overflow-y-scroll mt-4">
      {/* project card */}
      {props.data ? (
        props.data.map((data) => (
          <ProjectAtomCardComponent key={data.project_id} color={data.color} project_id={data.project_id}/>
        ))
      ) : (
        <div className="w-full flex-col flex justify-center ">
          <div className="w-48 h-48 mx-auto relative">
            <Image src={"/empty.png"} layout={"fill"} alt="empty" />
          </div>
          <div className="mt-4 mx-auto text-lg font-bold text-white">
            You have no active project
          </div>
          <div className="mt-4 mx-auto ">
          <PrimaryButton title={'Project'} onClick={()=>{route.push('/c/project')}}/>
          </div>
        </div>
      )}
    </div>
  );
}

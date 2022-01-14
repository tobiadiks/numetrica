import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faQuestionCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { deleteProject } from "utils/project.utils";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import cn from "classnames";
import moment from "moment";


export default function EmptyCardComponent(props) {
  

  return (
    <div
      className={cn("w-full backdrop-filter backdrop-blur-md flex flex-col justify-center align-middle  px-2 py-2 rounded-lg  relative  shadow-lg h-auto animate-pulse ")}
    >
      
      <div className="text-white text-sm md:text-xs   font-semibold mb-4 flex justify-between w-full">
        {/* <span>{moment(props.date).fromNow()}</span> */}
        <div className="font-bold  mb-4 text-base backdrop-blur-2xl backdrop-filter w-4 h-4 bg-basic3 animate-pulse rounded-full   md:text-base"></div>
      </div>
      <div
        
        className="text-white mb-4 w-full    text-center cursor-pointer"
      >
        <div className="font-bold text-base mb-2  mx-auto backdrop-blur-2xl backdrop-filter w-full h-4 animate-pulse bg-basic3 rounded-md   md:text-base"></div>
        <div className="text-sm md:text-xs mx-auto bg-basic3 w-full animate-pulse h-2 rounded-md"></div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useRouter } from "next/router";
import { allProject } from "../../utils/project.utils";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { logout } from "context/features/user/userSlice";
import { dashboardMetric } from "../../utils/dashboard.utils";
import EmptyCardComponent from "./emptyCard";


export default function EmptyCardContainer(props) {
  
  

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 w-full  gap-2  px-2   md:h-screen bg-main-brand2 md:overflow-y-auto mt-4">
     
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent />
          <EmptyCardComponent/>

      
          

    </div>
  );
}

import {
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DocumentationAtomCardComponent(props) {
  const [drop, setDrop] = useState(false);
  const [loading, setLoading] = useState(false);

  const [hidden, setHidden] = useState(true);
  const route = useRouter();

  const routeProject=(id)=>{
route.push(`/c/${props.id}`)
  };

  return (
    <div
      className={cn("w-full  px-2 py-2 rounded-lg  relative  shadow-sm h-fit ", props.color)}
    >
      
      <div className="text-white text-sm md:text-xs  font-semibold mb-4 flex justify-between w-full">
        {/* <span>{moment(props.date).fromNow()}</span> */}
        <span className="relative text-white" onMouseOver={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
          <FontAwesomeIcon icon={faQuestionCircle} />
          {drop ? (
            <div className="absolute z-50 w-32 left-4 text-basic1 bg-white text-base md:text-xs   p-2 rounded    shadow-2xl ">
             {props.hint}
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
      <div
        onMouseOver={() => setDrop(false)}
        onClick={()=>routeProject(props.id)}
        className="text-white mb-4 w-full  text-center cursor-pointer"
      >
        <div className="font-bold text-base  md:text-base">{props.name}</div>
        <div className="text-sm md:text-xs">{props.title}</div>
      </div>
    </div>
  );
}

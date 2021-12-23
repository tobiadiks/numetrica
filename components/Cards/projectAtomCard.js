import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProjectAtomCardComponent(props) {
    const [drop, setDrop] = useState(false);
    return(
        <div 
            className={`w-full md:w-5/12 lg:w-5/12 bg-${props.color?props.color:'blue'}-400  px-2 py-2 rounded-lg m-1 h-32`}
          >
            <div className="text-white text-base md:text-xs  font-semibold mb-4 flex justify-between w-full">
              <span>{props.date}</span>
              <span className="relative" onClick={() => setDrop(!drop)}>
                <FontAwesomeIcon icon={drop ? faArrowUp : faArrowDown} />
                {drop ? (
                  <ul className="absolute right-1 bg-white text-base md:text-xs   p-2 rounded divide-y w-auto  shadow-2xl ">
                    <li className="text-gray-600 font-bold flex my-1 cursor-pointer">
                      <div className="mr-1">
                        <FontAwesomeIcon icon={faEdit} />
                      </div>
                      Edit
                    </li>
                    <li className="text-red-400 font-bold flex my-1 cursor-pointer">
                      <div className="mr-1">
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                      Delete
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div onMouseOver={()=>setDrop(false)} className="text-white mb-4 w-full text-center cursor-pointer">
              <div className="font-bold text-lg  md:text-medium">{props.name}</div>
              <div className="text-base md:text-xs  font-semibold">
                {props.description}
              </div>
            </div>
          </div>
    )
}
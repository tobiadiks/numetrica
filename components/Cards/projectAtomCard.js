import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { deleteProject } from "utils/project.utils";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import cn from "classnames";

export default function ProjectAtomCardComponent(props) {
    const [drop, setDrop] = useState(false);
    const [loading, setLoading] = useState(false)
    const userState = useSelector((state) => state.userStore);
    const route = useRouter()
    const DeleteProject = async (project_id) => {
      setLoading(true);
      const response = await deleteProject({
        company_id: userState.user.company.company_id,
        accessToken: userState.user.accessToken,
        project_id
      });
      console.log(response)
      if (response.success === false) {
        await alert("Failed");
        setLoading(false);
      } else if (response.success === true) {
      setLoading(false);
      route.reload()
      } else {
        await alert("Something went wrong!");
        setLoading(false);
        
      }
      setLoading(false);
    };
  
    return(
        <div className={cn("w-full  px-2 py-2 rounded-lg md:m-1 my-2  h-36 md:h-36 shadow-sm", `bg-gray-900`)}
          >
            <div className="text-white text-sm md:text-xs  font-semibold mb-4 flex justify-between w-full">
              <span>{props.date}</span>
              <span className="relative text-white" onClick={() => setDrop(!drop)}>
                <FontAwesomeIcon icon={drop ? faArrowUp : faArrowDown} />
                {drop ? (
                  <ul className="absolute right-1 bg-white text-base md:text-xs   p-2 rounded divide-y w-auto  shadow-2xl ">
                    <li className="text-gray-800  flex my-1 cursor-pointer">
                      <div className="mr-1">
                        <FontAwesomeIcon icon={faEdit} />
                      </div>
                      Edit
                    </li>
                    <li onClick={()=>{DeleteProject(props.project_id)}} className="text-red-400  flex my-1 cursor-pointer">
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
              <div className="text-sm md:text-xs">
                {props.description}
              </div>
            </div>
          </div>
    )
}

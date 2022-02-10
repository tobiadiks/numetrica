import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faEye,
  faInfoCircle,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { deleteProject } from "utils/project.utils";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import cn from "classnames";
import moment from "moment";
import UpdateProjectCardComponent from "./updateProject";

export default function ProjectAtomCardComponent(props) {
  const [drop, setDrop] = useState(false);
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.userStore);
  const [hidden, setHidden] = useState(true);
  const route = useRouter();
  const DeleteProject = async (project_id) => {
    setLoading(true);
    const response = await deleteProject({
      company_id: userState.user.company.company_id,
      accessToken: userState.user.accessToken,
      project_id,
    });
    console.log(response);
    if (response.success === false) {
      await alert("Failed");
      setLoading(false);
    } else if (response.success === true) {
      setLoading(false);
      route.reload();
    } else {
      await alert("Something went wrong!");
      setLoading(false);
    }
    setLoading(false);
  };

  const routeProject = (id, type_id) => {
    route.push(`/c/tool/${props.type_id}/${props.id}/preview`);
  };
  const routeEditProject = (id, type_id) => {
    route.push(`/c/tool/${props.type_id}/${props.id}/edit`);
  };
  const routeShareProject = (id, type_id) => {
    route.push(`/t/${props.type_id}/${props.id}`);
  };
  return (
    <div
      className={cn(
        "w-full  px-2 py-2 rounded-lg  relative  shadow-sm h-full ",
        props.color
      )}
    >
      <UpdateProjectCardComponent
        hidden={hidden}
        name={props.name}
        description={props.description}
        project_id={props.project_id}
      />
      <div className="text-white text-sm md:text-xs  font-semibold mb-4 flex justify-between w-full">
        <span>{moment(props.date).fromNow()}</span>
        <span className="relative text-white" onClick={() => setDrop(!drop)}>
          <FontAwesomeIcon icon={drop ? faArrowUp : faArrowDown} />
          {drop ? (
            <ul className="absolute z-50 right-1 bg-white text-base md:text-xs   p-2 rounded divide-y w-auto  shadow-2xl ">
              <li
                onClick={() => {
                  routeProject(props.id, props.type_id)
                }}
                
                className=" flex my-1 cursor-pointer text-green-600"
              >
                <div className="mr-1">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                Preview
              </li>
              <li
                onClick={() => {
                  routeShareProject(props.id, props.type_id)
                }}
                
                className=" flex my-1 cursor-pointer text-blue-600"
              >
                <div className="mr-1">
                  <FontAwesomeIcon icon={faShare} />
                </div>
                Share
              </li>
              <li
                onClick={() => {
                  routeEditProject(props.id, props.type_id)
                }}
                className="text-basic1  flex my-1 cursor-pointer"
              >
                <div className="mr-1">
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                Edit
              </li>
              <li
                onClick={() => {
                  setHidden(false);
                }}
                className="text-basic1  flex my-1 cursor-pointer"
              >
                <div className="mr-1">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </div>
                Info
              </li>
              <li
                onClick={() => {
                  DeleteProject(props.project_id);
                }}
                className="text-red-400  flex my-1 cursor-pointer"
              >
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
      <div
        onMouseOver={() => setDrop(false)}
        onClick={() => routeProject(props.id, props.type_id)}
        className="text-white mb-4 w-full  text-center cursor-pointer"
      >
        <div className="font-bold text-base  md:text-base">{props.name}</div>
        <div className="text-sm md:text-xs">
          {props.description.slice(0, 45)}...
        </div>
        <div
          className={`bg-white absolute bottom-0 left-1/2 transform z-20 translate-y-1/4  -translate-x-1/2 w-fit text${props.color.slice(
            2
          )} text-xs self-baseline font-bold mx-auto mt-4 p-1 rounded-md`}
        >
          {props.type_string}
        </div>
      </div>
    </div>
  );
}

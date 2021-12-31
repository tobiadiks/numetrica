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
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic'
const ProjectAtomCardComponent = dynamic(()=>import('./projectAtomCard'),{ssr: false})
export default function ProjectCardComponent(props) {
  const userState = useSelector((state) => state.userStore);
  const [user,setUser]=useState(userState)
  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState([]);
  

  useEffect(() => {
    async function getProject () {
      setLoading(true);
      const response = await allProject({
        company_id: user.user.company.company_id,
        accessToken: user.user.accessToken,
      });
      console.log(response);
      if (response ==undefined) {
        alert("Failed to load project");
        setLoading(false);
      } else if (response) {
        setProject(response);
        setLoading(false);
      } 
      setLoading(false);
    };
    getProject()
  },[user.user.company.company_id,user.user.accessToken]);

  
  
  
  const route = useRouter();


  return (
    <div className=" grid grid-cols-1 md:grid-cols-3  gap-2  px-2   md:h-screen bg-main-brand2 md:overflow-y-auto mt-4">
      {loading?
     ( <div className="w-full flex-col flex justify-center relative">
        <div className="mt-4 mx-auto text-lg font-bold text-gray-900">
            Loading...
          </div>
      </div>)
      :
      // ({/* project card */}
      project.length ? (
        project.map((data) => (
          <ProjectAtomCardComponent
            key={data.project_id}
            color={data.color}
            project_id={data.project_id}
            name={data.name}
            description={data.description}
            type_string={data.type_string}
            date={data.date_created}
          />
        ))
      ) : (
        <div className="w-full flex-col flex justify-center  relative">
          <div className="w-48 h-48 mx-auto relative">
            <Image src={"/empty.png"} layout={"fill"} alt="empty" />
          </div>
          <div className="mt-4 mx-auto text-lg font-bold text-basic1">
            You have no active project
          </div>
          <div className="mt-4 mx-auto ">
            <PrimaryButton
              title={"Project"}
              onClick={() => {
                route.push("/c/project");
              }}
            />
          </div>
        </div>
      )
            }
    </div>
  );
}

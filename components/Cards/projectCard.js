import { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useRouter } from "next/router";
import { allProject } from "../../utils/project.utils";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import cn from 'classnames'
import EmptyCardContainer from "@components/EmptyStates/emptyCardComponent";
import { faTools } from "@fortawesome/free-solid-svg-icons";
const ProjectAtomCardComponent = dynamic(() => import("./projectAtomCard"), {
  ssr: false,
});
export default function ProjectCardComponent(props) {
  const userState = useSelector((state) => state.userStore);
  const [user, setUser] = useState(userState);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);

  const route = useRouter();
 

 
  useEffect(() => {
    async function getProject() {
      setLoading(true);
      const response = await allProject({
        company_id: user.user.company.company_id,
        accessToken: user.user.accessToken,
      });
      console.log(response);
      if (response.status === 401) {
        alert("Session expired!");
        route.push("/auth");

        setLoading(false);
      } else if (response.data) {
        setProject(response.data);
        setLoading(false);
      }
      else{
        route.push("/auth");
      }
      setLoading(false);
    }
    getProject();
  }, [route,user.user.company.company_id, user.user.accessToken]);

  while (loading){
    return(
      <div>
        <EmptyCardContainer/>
    </div>)
  }
  return (
      project.length ? (
        <div className={cn(" grid grid-cols-2 md:grid-cols-3  gap-2  px-2 h-screen    md:h-screen bg-main-brand2 md:overflow-y-auto mt-4",project.length>=12?"":"md:grid-rows-3 grid-rows-4")}>
       { project.map((data) => (
          <ProjectAtomCardComponent
            key={data.project_id}
            id={data.project_id}
            type_id={data.type_id}
            color={data.color}
            project_id={data.project_id}
            name={data.name}
            description={data.description}
            type_string={data.type_string}
            date={data.date_created}
          />
        )
        )}
     </div> 
     ) : (
        <div className="w-full flex-col flex justify-center my-4  relative">
          <div className="w-48 h-48 mx-auto relative">
            <Image height={200} width={200} src={"/empty.svg"} layout={"responsive"} alt="empty" />
          </div>
          <div className="mt-4 mx-auto text-lg font-bold text-basic1">
            So empty!
          </div>
          <div className="mt-1 mx-auto text-center px-4 md:px-16 text-xs text-basic1">
            Click the button above to start creating awesome projects
          </div>
         
        </div>
      )
    
  );
}


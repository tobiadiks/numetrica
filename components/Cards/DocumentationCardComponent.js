import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faPaperPlane,
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
import cn from 'classnames'
import { logout } from "context/features/user/userSlice";
import DocumentationAtomCardComponent from './DocumentationAtomCard'
import EmptyCardContainer from "@components/EmptyStates/emptyCardComponent";
export default function DocumentationCardComponent(props) {
  const userState = useSelector((state) => state.userStore);
  const [user, setUser] = useState(userState);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);

  const route = useRouter();
 

 
//   useEffect(() => {
//     async function getProject() {
//       setLoading(true);
//       const response = await allProject({
//         company_id: user.user.company.company_id,
//         accessToken: user.user.accessToken,
//       });
//       console.log(response);
//       if (response.status === 401) {
//         alert("Session expired!");
//         //route.push("/auth");

//         setLoading(false);
//       } else if (response.data) {
//         setProject(response.data);
//         setLoading(false);
//       }
//       setLoading(false);
//     }
//     getProject();
//   }, [user.user.company.company_id, user.user.accessToken]);
while (loading){
<EmptyCardContainer/>
}
  return (
    project.length ? (
    <div className={cn(" grid grid-cols-2 md:grid-cols-3  gap-2  px-2   md:h-screen bg-main-brand2 md:overflow-y-auto mt-4",project.length>=12?"":"md:grid-rows-3")}>
          <DocumentationAtomCardComponent
            key={'project'}
            id={'project'}
            color={"bg-green-400"}
            name={"Getting Started"}
            title={"3 views"}
            hint={"How to get started"}
          />
           <DocumentationAtomCardComponent
            key={'project'}
            id={'project'}
            color={"bg-green-400"}
            name={"Getting Started"}
            title={"3 views"}
            hint={"How to get started"}
          />

          <DocumentationAtomCardComponent
            key={'documentation'}
            id={'tool/documentation'}
            color={"bg-blue-400"}
            name={"Integration"}
            title={"26 views"}
            hint={"See how to integrate with 3rd-party"}
            
          />

<DocumentationAtomCardComponent
            key={'requests'}
            id={'feature-request'}
            color={"bg-red-400"}
            name={"Using our API"}
            title={"90 views"}
            hint={"Connecting to the API"}
          />
    </div>):
     (
      <div className="w-full flex-col flex justify-center my-4 relative">
        <div className="w-48 h-48 mx-auto relative">
          <Image height={200} width={200} src={"/empty.svg"} layout={"responsive"} alt="empty" />
        </div>
        <div className="mt-4 mx-auto text-lg font-bold text-basic1">
          So empty!
        </div>
        <div className="mt-1 mx-auto text-center px-4 md:px-16 text-xs text-basic1">
          Click the button above to start writing great documentations
        </div>
       
      </div>
    )
  );
}

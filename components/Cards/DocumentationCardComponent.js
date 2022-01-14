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
import DocumentationAtomCardComponent from './DocumentationAtomCard'
export default function DocumentationCardComponent(props) {
  const userState = useSelector((state) => state.userStore);
  const [user, setUser] = useState(userState);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([1,2,3]);

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

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3  gap-2  px-2   md:h-screen bg-main-brand2 md:overflow-y-auto mt-4">
      {loading ? (
        <div className="w-full flex-col flex justify-center relative">
          <div className="mt-4 mx-auto text-lg font-bold text-gray-900">
            Loading...
          </div>
        </div>
      ) : // ({/* project card */}
<>
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
       
       </>
       }
    </div>
  );
}

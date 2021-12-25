import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useRouter } from "next/router";
import SideNavigation from "@components/Navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from 'next/dynamic'
const ProjectCardComponent = dynamic(()=>import("@components/Cards/projectCard"), {ssr:false})


export default function DashboardPage() {
  const route = useRouter();
  const userState = useSelector((state) => state.userStore.user);
  const promiseState = useSelector((state) => state.userStore.status);

  useEffect(() => {
    if (!userState.success && promiseState) {
      route.push("/auth");
    }
  }, [route, userState.success, promiseState]);

  return (
    <div className="flex px-4 md:px-0  flex-col-reverse md:flex-row lg:flex-row justify-start space-y-0 md:h-screen">
      {/* sidenav */}

      <SideNavigation />

      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col ">
        {/* content */}
        <div className="px-2">
          <div className="text-black text-xl font-bold">Dashboard</div>
        </div>
        <div className="text-gray-700 text-medium font-bold mt-2 px-2">Projects</div>
        <ProjectCardComponent
          data={[{ project_id: 1 }, { project_id: 2, color: "pink" }]}
        />
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start shadow-lg py-6 px-2 md:px-0 align-middle bg-white">
        <div className="">
          <div className="md:w-full py-5 lg:w-full w-full flex justify-center align-middle text-black-800 border-b px-3  border-gray-800">
            <div className="flex flex-row align-middle mt-2">
              <div className="text-black-800 font-semibold mx-auto">Planned Task</div>
              <div className="text-black font-bold mx-auto">(15)</div>
            </div>
          </div>
        </div>
        {/* content */}
        <ul className="text-black">
          <li className="flex justify-between border text-base md:text-xs border-gray-800 rounded p-2 ">
            <div className="pr-3 w-4/5">Create portfolio</div>
            <div className="flex justify-end w-1/5">
              <div>
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              {/* <div>
                <FontAwesomeIcon icon={faTrash} />
              </div> */}
            </div>
          </li>
          <li className="flex justify-between border text-base md:text-xs  border-gray-800 rounded p-2 ">
            <div className="pr-3 w-4/5">Brief the design team on new bugs</div>
            <div className="flex justify-end w-1/5">
              <div className="text-black-800">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              {/* <div>
                <FontAwesomeIcon icon={faTrash} />
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

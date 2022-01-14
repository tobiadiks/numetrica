import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useRouter } from "next/router";
import SideNavigation from "@components/Navigation/sideNavigation";
import dynamic from "next/dynamic";
import TaskCardComponent from "@components/Cards/taskCard";              
import DashboardCardComponent from "@components/Cards/DashboardCardComponent";

export default function DashboardPage() {
  const route = useRouter();
  const userState = useSelector((state) => state.userStore);

  useEffect(() => {
    if (!userState.user.success) {
      route.push("/auth");
    }
  }, [route, userState.user.success]);

  return (
    <div className="flex px-4 md:px-0  flex-col-reverse md:flex-row lg:flex-row justify-start space-y-0 md:min-h-screen">
      {/* sidenav */}

      <SideNavigation />
{/* center content */}
      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col ">
        
        <div className="px-2 mt-8 md:mt-0">
          <div className="text-basic1 text-xl font-bold">Dashboard</div>
        </div>
        <div className="text-basic4 text-sm font-bold mt-2 px-2 mb-4 md:mb-0">
          Hi there here are your active projects
        </div>
        <DashboardCardComponent/>
      </div>

      <TaskCardComponent />
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faChalkboard,
  faGlobe,
  faGrin,
  faList,
  faPaperPlane,
  faRocket,
  faTools,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function SideNavigation(props) {
  
  return (
    <div className="w-full md:w-1/4 lg:w-1/4 hidden md:flex flex-col justify-start align-middle bg-white ">
      <div className="py-5 px-5 mt-12">
        {/* content */}
        <ul>
          {
          [
            { title: "Dashboard", icon: faChalkboard, route: "/c/dashboard" },
            { title: "Project", icon: faList, route: "/c/project" },
            { title: "Task Manager", icon: faTools, route: "/c/task" },
            { title: "Documention Builder", icon: faPaperPlane, route: "/c/tool/documentation/" },
            // { title: "Page Builder(coming soon!)", icon: faGlobe, route: "/c/tool/pages/home" },
            { title: "Page Builder(coming soon!)", icon: faGlobe, route: "#" },
            { title: "Profile", icon: faUserAlt, route: "/c/profile" },
            { title: "Feature Request", icon: faRocket, route: "/c/feature-request" },
          ].map((data, index) => (
         
            <Link key={index} href={data.route} passHref>
              <li className="flex cursor-pointer my-4">
                <span className="text-main-brand1 mx-2 w-1/6 md:text-sm ">
                  <FontAwesomeIcon icon={data.icon} />
                </span>
                <span className="text-basic1 md:text-xs text-sm self-end">{data.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

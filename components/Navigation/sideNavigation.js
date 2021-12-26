import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faChalkboard,
  faGrin,
  faList,
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
            { title: "Task", icon: faCalendarCheck, route: "/c/task" },
            { title: "Profile", icon: faUserAlt, route: "/c/profile" },
            { title: "Support", icon: faGrin, route: "/c/support" },
          ].map((data, index) => (
         
            <Link key={index} href={data.route} passHref>
              <li className="flex cursor-pointer my-4">
                <span className="text-main-brand1 mx-2 w-1/6 md:text-sm ">
                  <FontAwesomeIcon icon={data.icon} />
                </span>
                <span className="text-basic1 font-bold md:text-xs text-sm self-end">{data.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

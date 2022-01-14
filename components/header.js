import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useSelector,useDispatch } from "react-redux";
import {logout} from '../context/features/user/userSlice'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt, faSignOutAlt, faBell} from '@fortawesome/free-solid-svg-icons'
import {
  faCalendarCheck,
  faChalkboard,
  faGrin,
  faList,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const route = useRouter();
  const userState = useSelector((state)=>state.userStore.user);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const dispatch=useDispatch()

  async function LogOut(routeDestination,title) {
    if(title=="Log out"){
      dispatch(logout())
      route.push(routeDestination);
    }
    else{
      route.push(routeDestination);
    }
    
  }

  
  return (
    <header className={`w-full  backdrop-filter backdrop-blur-md shadow fixed z-50`}>
      <div className="flex  flex-wrap items-center justify-between lg:w-full px-6 py-4 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex flex-col md:flex-row items-center text-main-brand1">
          <Link href="/" passHref>
            <div className='font-black cursor-pointer h-6 w-20 relative'>
           <Image
           alt="logo"
           src="/logo-text1.svg"
           layout="fill"
          
           />
            </div>
          </Link>

          <ul
            className={cn(
              "md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto",
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            {userState.success
              ?""
              : [
                  { title: "Home", route: "/" },
                  { title: "Product", route: "/product" },
                  { title: "Case Studies", route: "/case-studies" },
                ].map(({ route, title }, index) => (
                  <li className={cn("mt-3 md:mt-0 md:ml-6")} key={index}>
                    <Link href={route}>
                      <a className="block text-basic1">{title.toUpperCase()}</a>
                    </Link>
                  </li>
                ))}
          </ul>
        </div>

        <button
          className=" items-center block px-3 py-2 text-basic1 border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto ",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {userState.success
            ?
          //   <ul>
          //   {
          //   [
              
          //   ].map((data, index) => (
           
          //     <Link key={index} href={data.route} passHref>
          //       <li className="flex cursor-pointer my-4">
          //         <span className="text-basic1 mx-2 w-1/6">
          //           <FontAwesomeIcon icon={data.icon} />
          //         </span>
          //         <span className="text-basic1 font-bold">{data.title}</span>
          //       </li>
          //     </Link>
          //   ))}
          // </ul>

            [{ title: "Notifications", route: "/notification", cta: false,bold:true,icon:faBell },{ title: "Log out", route: "/", cta: false,bold:false,icon:faSignOutAlt }].map(
                ({ title,route, cta,bold,icon }, index) => (
                  <li
                    className="flex mt-3 md:mt-0 md:ml-6 cursor-pointer"
                    key={index}
                    onClick={()=>LogOut(route,title)}
                  > <div className="text-basic1"><FontAwesomeIcon icon={icon}/></div>
                    &nbsp;
                    <div
                      className={cn(
                        "block text-basic1",
                        cta
                          ? `border p-2  rounded hover:bg-white hover:text-basic1 font-medium`
                          : `border-0`,
                          bold ? 'font-bold hover:underline':''
                      )}
                    >
                      {title.toUpperCase()}
                    </div>
                  </li>
                )
              )
            : [
                { title: "Log in", route: "/auth", cta: false },
                { title: "Free Trial", route: "/signup", cta: true },
              ].map(({ route, title, cta }) => (
                <li className="mt-3 md:mt-0 md:ml-6" key={title}>
                  <Link href={route}>
                    <a
                      className={cn(
                        "block",
                        cta
                          ? ` p-2 rounded bg-main-brand1  text-white font-bold shadow-main-brand1 shadow-md`
                          : `border-0 text-basic1`
                      )}
                    >
                      {title.toUpperCase()}
                    </a>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </header>
  );
}
 
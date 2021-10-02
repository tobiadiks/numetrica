import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";




export default function Header() {
  const route=useRouter();
  
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-4 mx-auto md:flex-no-wrap md:px-4">
        <div className="flex items-center">
         <Link href="/" passHref><Image
          src={"/logo.png"}
          alt="logo"
          width={145}
          height={30}
          /></Link>
         
         <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
        
          {[
            { title: "Home", route: "/" },
            { title: "Product", route: "/product" },
            { title: "Case Studies", route: "/case-studies" },
          ].map(({ route, title }) => (
            <li className={cn("mt-3 md:mt-0 md:ml-6")} key={title}>
              <Link href={route}>
                <a className="block text-white">{title.toUpperCase()}</a>
              </Link>
            </li>
          ))}

        
        </ul>
          
        </div>

        <button
          className=" items-center block px-3 py-2 text-white border border-white rounded md:hidden"
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
            "md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Log in", route: "/auth", cta: false },
            { title: "14 Days Trial", route: "/auth", cta: true }
          ].map(({ route, title, cta }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className={cn("block text-white", cta ? `border p-2 rounded hover:bg-white hover:text-black font-medium`: `border-0`)}>{title.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

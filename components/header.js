import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { AppContext } from "context/state";
import { logout } from "utils/auth.utils";

export default function Header() {
  const route = useRouter();

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { state } = useContext(AppContext);

  async function LogOut() {
    await state.setUser({});
    await logout();

    route.push("/");
  }

  useEffect(() => {
    if (state.user.accessToken === undefined) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [state.user.accessToken]);

  return (
    <header className="bg-black">
      <div className="flex flex-wrap items-center justify-between lg:w-full px-6 py-4 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image src={"/logo.png"} alt="logo" width={145} height={30} />
          </Link>

          <ul
            className={cn(
              "md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto",
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            {isAuthenticated
              ? [
                  { title: "Feedback", route: "/t/feedback" },
                  { title: "Review", route: "/t/review" },

                  { title: "Roadmap", route: "/t/roadmap" },
                ].map(({ route, title }) => (
                  <li className={cn("mt-3 md:mt-0 md:ml-6")} key={title}>
                    <Link href={route}>
                      <a className="block text-white">{title.toUpperCase()}</a>
                    </Link>
                  </li>
                ))
              : [
                  { title: "Home", route: "/" },
                  { title: "Product", route: "/product" },
                  { title: "Case Studies", route: "/case-studies" },
                ].map(({ route, title }, index) => (
                  <li className={cn("mt-3 md:mt-0 md:ml-6")} key={index}>
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
          {isAuthenticated
            ? [{ title: "Log out", route: "/", cta: false }].map(
                ({ title, cta }, index) => (
                  <li
                    className="mt-3 md:mt-0 md:ml-6 cursor-pointer"
                    key={index}
                    onClick={LogOut}
                  >
                    <a
                      className={cn(
                        "block text-white",
                        cta
                          ? `border p-2 rounded hover:bg-white hover:text-black font-medium`
                          : `border-0`
                      )}
                    >
                      {title.toUpperCase()}
                    </a>
                  </li>
                )
              )
            : [
                { title: "Log in", route: "/auth", cta: false },
                { title: "Free Trial", route: "/free-trial", cta: true },
              ].map(({ route, title, cta }) => (
                <li className="mt-3 md:mt-0 md:ml-6" key={title}>
                  <Link href={route}>
                    <a
                      className={cn(
                        "block text-white",
                        cta
                          ? `border p-2 rounded hover:bg-white hover:text-black font-medium`
                          : `border-0`
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

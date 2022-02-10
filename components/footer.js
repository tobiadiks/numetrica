import { useRouter } from "next/router";

export default function Footer() {
  const route = useRouter()
  const headCheck = route.pathname.split('/')[1]
  if(headCheck=='t'){
    return (
      <footer className="bg-main-brand1">
      <ul className="flex w-full items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Powered by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Notics
          </a>
        </li>

        {/* <li>
          <a
            href="https://github.com/tobiadiks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li> */}
      </ul>
    </footer>
    )
  }
  return (
    <footer className="bg-main-brand1">
      <ul className="flex w-full items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://cstory.com/tobiadiks/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Kage
          </a>
        </li>

        <li>
          <a
            href="https://github.com/tobiadiks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

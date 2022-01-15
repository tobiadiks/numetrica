import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CustomError() {
  const route = useRouter();
  return (
    <div className="w-full flex-col flex justify-center my-4  relative">
      <div className="w-48 h-48 mx-auto relative">
        <Image
          height={200}
          width={200}
          src={"/bug.svg"}
          layout={"responsive"}
          alt="empty"
        />
      </div>
      <div
        onClick={() => route.back()}
        className="mt-4 cursor-pointer mx-auto text-lg font-bold text-basic1"
      >
        Go back!{" "}
        <FontAwesomeIcon className="animate-pulse" icon={faMousePointer} />
      </div>
      <div className="mt-1 mx-auto text-center px-4 md:px-16 text-xs text-basic1">
        <ul className=" list-disc">
          <li className="text-main-brand1">
            <Link href={"/auth"} passHref>
              Are you logged in?
            </Link>
          </li>
          <li className="text-main-brand1">
            <Link href={"/auth"} passHref>
              Is your session active?
            </Link>
          </li>
        </ul>
        If yes,this must be a minor bug, our engineering team are on it.
      </div>
    </div>
  );
}

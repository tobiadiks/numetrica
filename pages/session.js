import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";

import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "context/features/user/userSlice";
export default function CustomError() {
const dispatch = useDispatch();
  const route = useRouter();
  return (
    <div className="w-full flex-col flex justify-center my-4  relative">
      <div className="w-48 h-48 mx-auto relative">
        <Image
          height={200}
          width={200}
          src={"/session.svg"}
          layout={"responsive"}
          alt="session-expired"
        />
      </div>
      <div
        onClick={async () =>{ dispatch(logout); setTimeout(()=>await route.push("/auth"),5000)}}
        className="mt-4 cursor-pointer mx-auto text-lg font-bold text-basic1"
      >
        Continue Session!{" "}
        <FontAwesomeIcon className="animate-pulse" icon={faMousePointer} />
      </div>
      <div className="mt-1 mx-auto text-center px-4 md:px-16 text-xs text-basic1">
        
        It appears that your browser session has expired to secure your workspace.
      </div>
    </div>
  );
}

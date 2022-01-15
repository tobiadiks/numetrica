import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/dist/client/image"
import { useRouter } from "next/router"
export default function Custom404(){
    const route= useRouter();
    return(
        <div className="w-full flex-col flex justify-center my-4  relative">
          <div className="w-48 h-48 mx-auto relative">
            <Image height={200} width={200} src={"/404.svg"} layout={"responsive"} alt="empty" />
          </div>
          <div onClick={()=>route.back()} className="mt-4 cursor-pointer mx-auto text-lg font-bold text-basic1">
            Go back! <FontAwesomeIcon icon={faMousePointer}/> 
          </div>
          <div className="mt-1 mx-auto text-center px-4 md:px-16 text-xs text-basic1">
            You are not alone, it happens that this page was not found.
          </div>
         
        </div>
    )
}
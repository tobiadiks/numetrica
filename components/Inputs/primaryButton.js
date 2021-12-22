import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import cn from 'classnames'
export default function PrimaryButton(props) {
  return (
    <div className={cn(
      " w-full flex justify-center align-middle text-gray-200",
      props.center?"mx-auto":""
    )}>

    {
    props.loading?
    <button  className="w-full  py-3 my-3 px-4  font-semibold shadow-md focus:outline-none focus:shadow-md hover:shadow-lg rounded text-white border-led-screen border bg-gray-400  text-center cursor-wait"><span ><FontAwesomeIcon className="animate-spin" icon={faSpinner}/>&nbsp;</span>Loading...</button>
    :
      <button onClick={props.onClick} className="w-full  py-3 my-3 px-4  font-semibold shadow-md focus:outline-none focus:shadow-md hover:shadow-lg rounded text-white border-led-screen border bg-blue-400 hover:bg-blue-700 text-center"><span><FontAwesomeIcon icon={props.icon}/>&nbsp;</span>{props.title}</button>
    }
    </div>
  );
}

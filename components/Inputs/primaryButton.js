import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import cn from 'classnames'
export default function PrimaryButton(props) {
  return (
    <div className={cn(
      " w-full flex justify-center align-middle text-basic1",
      props.center?"mx-auto":""
    )}>

    {
    props.loading?
    <button  className="w-full  py-3 my-3 px-4  font-semibold shadow-md focus:outline-none   rounded-sm text-white  bg-main-brand1  text-center cursor-wait"><span ><FontAwesomeIcon className="animate-spin" icon={faSpinner}/>&nbsp;</span>Loading...</button>
    :
      <button onClick={props.onClick} className="w-full  py-3 my-3 px-4  font-semibold  focus:outline-none focus:shadow-md hover:shadow-lg rounded-sm text-white  bg-main-brand1  shadow-md text-center"><span><FontAwesomeIcon icon={props.icon}/>&nbsp;</span>{props.title}</button>
    }
    </div>
  );
}

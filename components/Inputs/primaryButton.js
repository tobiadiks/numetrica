import Image from "next/image";
import cn from 'classnames'
export default function PrimaryButton(props) {
  return (
    <div className={cn(
      "md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle text-led-text",
      props.center?"mx-auto":""
    )}>
    <button onClick={props.onClick} className="w-full py-3 my-3 px-4  font-semibold shadow-md focus:outline-none focus:shadow-md hover:shadow-lg rounded text-led-text border-led-screen border">{props.title}</button>
    </div>
  );
}

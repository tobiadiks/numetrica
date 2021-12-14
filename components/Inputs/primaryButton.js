import Image from "next/image";
import cn from 'classnames'
export default function PrimaryButton(props) {
  return (
    <div className={cn(
      "md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle text-led-text",
      props.center?"mx-auto":""
    )}>
    <button onClick={props.onClick} className="w-full md:p-4 py-3 my-3 px-4  font-semibold shadow-md focus:outline-none focus:shadow-md hover:shadow-lg rounded text-white border-led-screen border bg-blue-600 hover:bg-blue-700 transition-all">{props.title}</button>
    </div>
  );
}

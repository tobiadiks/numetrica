import Image from "next/image";

export default function PrimaryButton(props) {
  return (
    <div className="md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle  ">
    <button onClick={props.onClick} className="md:w-11/12 lg:w-11/12 w-11/12 py-3 my-3 px-4  font-semibold shadow-md focus:outline-none focus:shadow-md hover:shadow-lg rounded text-led-text border-led-screen border">{props.title}</button>
    </div>
  );
}

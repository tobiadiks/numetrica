import Image from "next/image";

export default function PrimaryButton(props) {
  return (
    <div className="md:w-96 lg:w-96 w-screen flex justify-center align-middle  ">
    <button onClick={props.onClick} className="md:w-full lg:w-full w-11/12 py-3 my-6 font-semibold px-4 shadow-md focus:outline-none focus:shadow-md hover:shadow-lg rounded text-led-text border-led-screen border">{props.title}</button>
    </div>
  );
}

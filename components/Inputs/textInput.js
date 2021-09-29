import Image from "next/image";

export default function TextInput(props) {
  return (
    <div className="md:w-96 lg:w-96 w-screen flex justify-center align-middle text-led-text ">
    <input placeholder={props.placeholder} type={props.type} className="md:w-full lg:w-full w-11/12 py-3 my-3 px-4 bg-led-screen rounded text-led-text focus:outline-none placeholder-led-text"/>
    </div>
  );
}

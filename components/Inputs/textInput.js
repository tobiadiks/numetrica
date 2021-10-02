

export default function TextInput(props) {
  return (
    <div className="md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle text-led-text ">
    <input placeholder={props.placeholder} type={props.type} className="md:w-11/12 lg:w-11/12 w-11/12 py-3 my-3 px-4 bg-led-screen rounded text-led-text focus:outline-none placeholder-led-text"/>
    </div>
  );
}

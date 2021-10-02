export default function DropDownInput(props) {
  return (
    <div className="md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle text-led-text ">
      <select
        value={props.defaultValue}
        className="md:w-11/12 lg:w-11/12 w-11/12 py-3 my-3 px-4 bg-led-screen rounded text-led-text focus:outline-none placeholder-led-text"
      >
        {[props.data].map((data,index) => (
          <option key={index} value={data.value}>
            {data.value}
          </option>
        ))}
      </select>
    </div>
  );
}

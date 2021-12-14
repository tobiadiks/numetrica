import cn from 'classnames'
export default function TextInput(props) {
  return (
    <div className={cn(
      "md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle text-led-text",
      props.center?"mx-auto":""
    )}>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        className="w-full py-3 md:p-4 my-3 px-4 bg-led-screen rounded text-white focus:outline-none placeholder-led-text"
      />
    </div>
  );
}

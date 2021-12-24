import cn from 'classnames'
export default function TextInput(props) {
  return (
    <div className={cn(
      "w-full flex justify-center align-middle text-black-800",
      props.center?"mx-auto":""
    )}>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        className="w-full py-3 md:p-4 my-3 px-4 bg-gray-200 rounded-sm text-black focus:outline-none placeholder-gray-400"
      />
    </div>
  );
}

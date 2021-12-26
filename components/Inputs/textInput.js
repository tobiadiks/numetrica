import cn from 'classnames'
export default function TextInput(props) {
  return (
    <div className={cn(
      "w-full flex justify-center align-middle",
      props.center?"mx-auto":""
    )}>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        className="w-full py-3 md:p-4 my-3 px-4 bg-main-brand3 rounded-sm text-basic1 focus:outline-none placeholder-basic2"
      />
    </div>
  );
}

import cn from 'classnames'

export default function DropDownInput(props) {
  return (
    <div className={cn(
      "md:w-11/12 lg:w-11/12 w-full flex justify-center align-middle text-led-text",
      props.center?"mx-auto":""
    )}>
      <select
        value={props.defaultValue}
        className="w-full py-3 my-3 px-4 bg-led-screen rounded text-led-text focus:outline-none placeholder-led-text"
      >
        {[props.data].map(
                    (data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    )
                  )}
      </select>
    </div>
  );
}

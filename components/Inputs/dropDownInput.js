import cn from 'classnames'

export default function DropDownInput(props) {
  return (
    <div className={cn(
      "md:w-full lg:w-full w-full flex justify-center align-middle text-basic1",
      props.center?"mx-auto":""
    )}>
      <select
        onChange={props.onChange}
        value={props.value?props.value:null}
        placeholder={props.placeholder}
        className="w-full py-3 md:p-4 my-3 px-4   bg-main-brand3 rounded-sm text-basic1  focus:outline-none placeholder-basic2"
      >
        {props.data.map(
                    (data, index) => (
                      <option value={data.type_id} key={index}>
                        {data.type_string}
                      </option>
                    )
                  )}
      </select>
    </div>
  );
}

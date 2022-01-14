import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";


export default function TaskCardComponent(props) {
    return(
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start shadow-md py-6 px-2 md:px-0   md:align-middle bg-white">
        <div className="">
          <div className="md:w-full py-4 lg:w-full w-full flex justify-center align-middle text-basic1 border-b px-3  border-gray-800">
            <div className="flex flex-row align-middle mt-0 md:mt-4">
              <div className="text-basic1 font-semibold mx-auto text-sm">
               Today&apos;s task
              </div>
              
            </div>
          </div>
        </div>
        {/* content */}
        <ul className="text-basic1 divide-y-2">
          <li className="flex justify-between  text-base md:text-xs  p-2 ">
            <div className="pr-3 w-4/5">Create portfolio</div>
            <div className="flex justify-end w-1/5">
              <div className="text-basic4">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
            </div>
          </li>
          <li className="flex justify-between  text-base md:text-xs  p-2 ">
            <div className="pr-3 w-4/5">My task</div>
            <div className="flex justify-end w-1/5">
              <div className="text-basic4">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
            </div>
          </li>
          <li className="flex justify-between  text-base md:text-xs   p-2 ">
            <div className="pr-3 w-4/5">Brief the design team on new bugs</div>
            <div className="flex justify-end w-1/5">
              <div className="text-basic1">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              {/* <div>
                <FontAwesomeIcon icon={faTrash} />
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    )
}
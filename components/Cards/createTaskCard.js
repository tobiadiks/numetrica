import TextInput from "@components/Inputs/textInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@components/Inputs/primaryButton";
import { createProject } from "utils/project.utils";
import { useRouter } from "next/router";
import DropDownInput from "@components/Inputs/dropDownInput";
import TextAreaInput from "@components/Inputs/textAreaInput";

export default function CreateTaskCardComponent(props) {
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("blue");
  const [startAt,setStartAt]=useState(props.day)
  const [endAt,setEndAt]=useState(props.day)
  const [hidden, setHidden] = useState(props.hidden);
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.userStore);
  const route = useRouter();

  const CreateProject = async () => {
    const colorArray = [
      "bg-red-400",
      "bg-yellow-400",
      "bg-green-400",
    ];
    let color = colorArray[Math.floor(Math.random() * colorArray.length)];

    setLoading(true);
    const response = await createProject({
      company_id: userState.user.company.company_id,
      accessToken: userState.user.accessToken,
      name: name,
      description: description,
      type_id:type_id,
      color: color,
      date_created: new Date().toLocaleString(),
    });
    console.log(response);
    if (response.success === false) {
      await alert("Failed");
      setLoading(false);
    } else if (response.success === true) {
      setHidden(!hidden);
      setLoading(false);
      setName("");
      setDescription("");
      route.reload();
    } else {
      await alert("Something went wrong!");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div
      className={`w-full justify-center align-middle  items-center h-full z-30 absolute   backdrop-filter backdrop-blur-sm ${
        props.hidden == hidden ? "hidden" : ""
      } `}
    >
      {console.log(props.day)}
      <div className="flex w-full md:w-1/3 mx-auto my-auto flex-col items-center justify-center py-4 bg-white shadow-lg z-50">
        <h2 className="font-bold text-basic1 md:text-sm text-center w-full md:w-1/2 lg:1/2">
          <div
            className=" cursor-pointer"
            onClick={() => {
              setHidden(!hidden);
              setLoading(false);
            }}
          >
            <FontAwesomeIcon className=" animate-pulse" icon={faArrowLeft} />
          </div>
          Create a new task
        </h2>

        <section className="flex flex-col items-center justify-center px-2 md:px-0 w-full md:w-10/12 lg:10/12">
          <TextInput
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Name of task"
            type="text"
          />
         
         
          
          <TextAreaInput
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary of this task"
          />
          <DropDownInput
            
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            data={[
              { type_id: "blue", type_string: "blue" },
              { type_id: "red", type_string: "red" },
              { type_id: "green", type_string: "green" },
              //"Long Survey(coming soon..)",
            ]}
          />

          <PrimaryButton
            onClick={CreateProject}
            loading={loading}
            title="Add"
            icon={faPlusCircle}
          />
        </section>
      </div>
    </div>
  );
}

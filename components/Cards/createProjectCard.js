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

export default function CreateProjectCardComponent(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type_id, setTypeString] = useState("abtest");
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.userStore);
  const route = useRouter();

  const CreateProject = async () => {
    const colorArray = [
      "bg-red-400",
      "bg-yellow-400",
      "bg-blue-400",
      "bg-pink-400",
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
      className={`w-full justify-center align-middle items-center h-full z-30 absolute   backdrop-filter backdrop-blur-sm ${
        props.hidden == hidden ? "hidden" : ""
      } `}
    >
      {console.log(userState)}
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
          Create a new project
        </h2>

        <section className="flex flex-col items-center justify-center px-2 md:px-0 w-full md:w-10/12 lg:10/12">
          <TextInput
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name of campaign/project"
            type="text"
          />

          <DropDownInput
            
            value={type_id}
            onChange={(e) => {
              setTypeString(e.target.value);
            }}
            data={[
              { type_id: "abtest", type_string: "A/B Test" },
              { type_id: "nps", type_string: "NPS Survey" },
              { type_id: "csat", type_string: "CSAT" },
              //"Long Survey(coming soon..)",
            ]}
          />
          <TextAreaInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of this project?"
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

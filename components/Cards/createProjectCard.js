import TextInput from "@components/Inputs/textInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@components/Inputs/primaryButton";
import { createProject } from "utils/project.utils";

export default function CreateProjectCardComponent(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.userStore);

  function chooseColor(){
    const colorArray=['red','yellow','orange','pink','green','purple']
    const color = parseInt(Math.random()*5)
    return colorArray[color]
  }

  const CreateProject = async () => {
    setLoading(true);
    const response = await createProject({
      company_id: userState.user.company.company_id,
      accessToken: userState.user.accessToken,
      name: name,
      description: description,
      color: chooseColor(),
    });
    console.log(response,chooseColor())
    if (response.success === false) {
      await alert("Failed");
      setLoading(false);
    } else if (response.success === true) {
    setHidden(!hidden);
    setLoading(false);
    setName("");
    setDescription("")
    } else {
      await alert("Something went wrong!");
      setLoading(false);
      
    }
    setLoading(false);
  };

  return (
    <div
      className={`w-full justify-center align-middle items-center h-full z-50 absolute backdrop-filter backdrop-blur-sm ${
        props.hidden == hidden ? "hidden" : ""
      } `}
    >{console.log(userState)}
      <div className="flex w-full md:w-1/3 mx-auto my-auto flex-col items-center justify-center py-4 bg-deep-blue shadow-lg">
        <h2 className="font-bold text-white md:text-sm text-center w-full md:w-1/2 lg:1/2">
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
          <TextInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of this project?"
            type="text"
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

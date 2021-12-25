import TextInput from "@components/Inputs/textInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowLeft,faUpload } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@components/Inputs/primaryButton";
import { updateProject } from "utils/project.utils";
import { useRouter } from "next/router";

export default function UpdateProjectCardComponent(props) {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.userStore);
  const route = useRouter()
  

  const UpdateProject = async () => {
    
    setLoading(true);
    const response = await updateProject({
      company_id: userState.user.company.company_id,
      accessToken: userState.user.accessToken,
      name: name,
      description: description,
      project_id:props.project_id
      
    });
    console.log(response)
    if (response.success === false) {
      await alert("Failed");
      setLoading(false);
    } else if (response.success === true) {
    setHidden(!hidden);
    setLoading(false);
    setName("");
    setDescription("")
    route.reload()
    } else {
      await alert("Something went wrong!");
      setLoading(false);
      
    }
    setLoading(false);
  };

  return (
    <div
      className={`w-full justify-center align-middle items-center h-full z-30 absolute mx-auto right-1 md:right-1 top-6  backdrop-filter backdrop-blur-sm ${
        props.hidden == hidden ? "hidden" : ""
      } `}
    >{console.log(userState)}
      <div className="flex w-full md:w-1/3 mx-auto my-auto flex-col items-center justify-center py-4 bg-white shadow-lg z-50">
        <h2 className="font-bold text-black md:text-sm text-center w-full md:w-1/2 lg:1/2">
          <div
            className=" cursor-pointer"
            onClick={() => {
              setHidden(!hidden);
              setLoading(false);
            }}
          >
            <FontAwesomeIcon className=" animate-pulse" icon={faArrowLeft} />
          </div>
          Update project
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
            onClick={UpdateProject}
            loading={loading}
            title="Update"
            icon={faUpload}
          />
        </section>
      </div>
    </div>
  );
}

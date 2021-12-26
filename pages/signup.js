import TextInput from "@components/Inputs/textInput";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signup } from "../utils/auth.utils";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AuthPage() {
  const route = useRouter();
  const [business_name, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(false)

  // useEffect(() => {
  //   if (userState.success && promiseState) {
  //     route.push("/auth");
  //   }
  // }, [route, userState.success, promiseState]);

  const CreateUser = async () => {
    setLoading(true);
    const response = await signup({ email, password,display_name:business_name });
    if (response.success==false) {
      await alert("Email already exist!");
      setLoading(false)
    }
    else if (response.success==true){
      await route.push("/auth");
    }
    else{
      await alert("Something went wrong!");
      setLoading(false)
    }
  };

  return (
    <div className="flex px-4 md:px-0 flex-col items-center justify-center space-y-5">
      <h2 className="p-2 font-bold text-basic1 md:text-2xl text-center w-full md:w-1/2 lg:1/2">
        Create Your Account
      </h2>
      {console.log(userState)}
      <section className="flex flex-col items-center justify-center w-full md:w-1/2 lg:1/2">
        <TextInput
          value={business_name}
          onChange={(e) => {
            setBusinessName(e.target.value);
          }}
          placeholder="Business Name"
          type="text"
        />
        <TextInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="E-mail"
          type="text"
        />
        <TextInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <PrimaryButton onClick={CreateUser} title="Sign Up" loading={loading} icon={faArrowRight}/>

        <div className="text-basic1 flex justify-center align-middle">
          
           <Link href={"/auth"} passHref>
             <div className="font-semibold underline cursor-pointer">
            Have an Account?&nbsp;
              Login
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

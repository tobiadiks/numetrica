import TextInput from "@components/Inputs/textInput";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signup } from "../utils/auth.utils";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

export default function AuthPage() {
  const route = useRouter();
  const [business_name, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state) => state.userStore.user);
  const promiseState = useSelector((state) => state.userStore.status);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (userState.success && promiseState) {
  //     route.push("/auth");
  //   }
  // }, [route, userState.success, promiseState]);

  const CreateUser = async () => {
    const response = signup({ email, password,business_name });
    if (!response.success) {
      await alert("Something went wrong, try again later!");
    }
    else{
      route.push("/auth");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h2 className="p-2 font-bold text-white md:text-2xl text-center w-full md:w-1/2 lg:1/2">
        Create Your Account
      </h2>
      {console.log(userState, promiseState)}
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
        <PrimaryButton onClick={CreateUser} title="Sign Up" />

        <div className="text-gray-200 flex justify-center align-middle">
          
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

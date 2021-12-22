import TextInput from "@components/Inputs/textInput";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { login } from "../utils/auth.utils";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AuthPage() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state) => state.userStore);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userState.user.success && userState.status) {
      route.push("/c/dashboard");
    }
  }, [route, userState.user.success,userState.status]);

  const LoginUser = async () => {
    await dispatch(login({ email, password }));
    if (!userState.user.success && !userState.status && !userState.loading) {
      await alert("Incorrect credentials");
    }
    else if(!userState.status && !userState.loading)
    {
      await alert("Cannot connect to server!");
    }
    // else{
    //   route.push("/t/feedback");
    // }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h2 className="p-2 font-bold text-white md:text-2xl text-center w-full md:w-1/2 lg:1/2">
        Login Your Account
      </h2>
      {console.log(userState)}
      <section className="flex flex-col items-center justify-center w-full md:w-1/2 lg:1/2">
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
        <PrimaryButton onClick={LoginUser} title="Login" icon={faArrowRight} loading={userState.loading} />

        <div className="text-gray-200 flex justify-center align-middle">
          <div>or</div>&nbsp;
          <Link href={"/signup"} passHref>
            <div className="font-semibold underline cursor-pointer">
              Create Account
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

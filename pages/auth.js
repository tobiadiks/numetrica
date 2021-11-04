import TextInput from "@components/Inputs/textInput";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { login } from "../utils/auth.utils";
import { AppContext } from "../context/state";
export default function AuthPage() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state } = useContext(AppContext);

  const LoginUser = async () => {
    try {
      const data = await login({ email, password });
      if (data.accessToken) {
        state.setUser({ ...data });
        route.push("t/feedback");
      } else {
        alert("something went wrong");
      }
    } catch (err) {
      err;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h2 className="p-2 font-bold text-white md:text-2xl text-center w-full md:w-1/2 lg:1/2">
        Login Your Account
      </h2>

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
        <PrimaryButton onClick={LoginUser} title="Login" />

        <div className="text-led-text flex justify-center align-middle">
          <div>or</div>&nbsp;
          <div className="font-semibold underline cursor-pointer">
            Create Account
          </div>
        </div>
      </section>
    </div>
  );
}

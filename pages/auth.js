import TextInput from "@components/Inputs/textInput";
import PrimaryButton from "@components/Inputs/primaryButton";
export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h2 className="p-2 font-bold text-led-text md:text-2xl text-center w-full md:w-1/2 lg:1/2">
        Login Your Account
      </h2>

      <section className="flex flex-col items-center justify-center w-full md:w-1/2 lg:1/2">
        <TextInput placeholder="E-mail" type="text" />
        <TextInput placeholder="Password" type="password" />
        <PrimaryButton  title="Login" />
        
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

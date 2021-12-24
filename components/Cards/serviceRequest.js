import TextInput from "@components/Inputs/textInput";

import PrimaryButton from "@components/Inputs/primaryButton";


export default function ServiceRequestComponent() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse shadow-md  justify-between w-full py-8">
        <div className="w-full md:w-1/2 lg:w-1/2 relative">
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-serif font-bold text-2xl md:text-6xl text-black">
              Have questions in your mind?
            </h2>
          </div>
          <div className="p-3 md:pl-12 text-center md:mt-8 md:text-left font-serif-Rubik font-light text-medium text-black-800 md:text-lg">
            If you have questions or need assistance, please do not hesitate and
            contact us by email at{" "}
            <span className="text-black-800">support@notics.com</span> or via{" "}
            <span className="text-black-800">Twitter</span>
          </div>

          <div className="p-3 md:pl-12 text-center mx-auto md:mt-0 md:text-left font-serif-Rubik font-light text-medium text-black-800 md:text-lg">
            Feel free to contact us here
            <p className="text-black">Call: (234) 8112 806 410</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2  ">
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-serif font-bold text-2xl md:text-2xl text-black">
              Schedule a meeting
            </h2>
            <div className="px-3 md:pl-12 text-center md:text-left font-serif-Rubik font-light text-black-800 text-medium md:text-lg">
              Secure a 30 minute session with one of our staff members.
            </div>

            <form className="p-3 md:pl-12">
              <TextInput
                
                placeholder="E-mail"
                type="email"
                required
              />

              <div className="">
                <PrimaryButton  title="SCHEDULE MEETING" />
              </div>

              <div className="  text-sm md:text-medium text-center  text-black-800">
                We respond within 48 hours
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

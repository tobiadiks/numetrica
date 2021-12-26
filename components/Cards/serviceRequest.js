import TextInput from "@components/Inputs/textInput";

import PrimaryButton from "@components/Inputs/primaryButton";


export default function ServiceRequestComponent() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row-reverse shadow-md  justify-between w-full py-8">
        <div className="w-full md:w-1/2 lg:w-1/2 relative">
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-serif font-bold text-2xl md:text-2xl text-basic1">
              Have questions in your mind?
            </h2>
          </div>
          <div className="p-3 md:pl-12 text-center md:mt-8 md:text-left font-sans font-light text-medium text-basic1 md:text-lg">
            If you have questions or need assistance, please do not hesitate and
            contact us by email at{" "}
            <span className="text-basic1">support@notics.com</span> or via{" "}
            <span className="text-basic1">Twitter</span>
          </div>

          <div className="p-3 md:pl-12 text-center mx-auto md:mt-0 md:text-left font-sans font-light text-medium text-basic1 ">
            Feel free to contact us here
            <p className="text-basic1">Call: (234) 8112 806 410</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2  ">
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-serif font-bold text-xl md:text-xl text-basic1">
              Schedule a meeting
            </h2>
            <div className="px-3 md:pl-12 text-center md:text-left font-sans font-light text-basic1 text-medium ">
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

              <div className="  text-sm md:text-medium text-center  text-basic1">
                We respond within 48 hours
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

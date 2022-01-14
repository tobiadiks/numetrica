import PrimaryButton from "@components/Inputs/primaryButton"
import Image from "next/image"
export default function ABTestPage() {
    return(
        <div className="min-h-screen flex flex-col relative md:flex-row md:transform translate-y-1 md:-translate-y-2">
            <div className="w-full md:w-1/2 flex  align-middle flex-col bg-main-brand3">
                <h3 className="text-basic1 font-serif-Nunito text-3xl text-center font-bold md:text-7xl md:mt-0 mt-20">A</h3>
                <div className="px-4 py-4">
                    <Image
                    layout="responsive"
                    alt="A"
                    src={"/chat.svg"}
                    height={150}
                    width={150}
            />
            </div>
                <div className="w-full px-8 py-8 self-baseline mx-auto my-auto"><PrimaryButton title={"Vote A"}/></div>
                
            </div>
            <div className="h-16 w-16 bg-main-brand1 shadow-main-brand1 text-white flex text-center justify-center  align-middle rounded-full text-2xl absolute left-1/2 top-1/2 md:top-0 md:-translate-y-0 -translate-y-1/2 transform -translate-x-1/2"><div className="mx-auto my-auto font-bold">OR</div></div>
            <div className="w-full md:w-1/2 flex  align-middle flex-col bg-white">
            <h3 className="text-main font-serif-Nunito text-basic1 text-3xl text-center font-bold md:text-7xl md:mt-0 mt-20">B</h3>
            <div className="px-4 py-4">
                    <Image
                    layout="responsive"
                    alt="B"
                    src={"/critter.svg"}
                    height={150}
                    width={150}
            />
            </div>
                <div className="w-full px-8 py-8 self-baseline mx-auto my-auto"><PrimaryButton title={"Vote B"}/></div>
            </div>
        </div>
    )
}
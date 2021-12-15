import DropDownInput from "@components/Inputs/dropDownInput";
import TextInput from "@components/Inputs/textInput";
import ReviewCard from "@components/Cards/reviewCard";

import { VictoryArea, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
import { RatingView } from "react-simple-star-rating";
export default function ReviewPage() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start space-y-0 ">
      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue ">
        <div className="py-5">
          <div className="md:full lg:w-full w-full flex justify-center align-middle text-gray-200 border-b border-gray-800">
            <div className="md:w-11/12 lg:w-11/12 w-11/12  my-3 px-4  rounded text-white focus:outline-none font-bold text-center">
              Segment
            </div>
          </div>
          <div className="h-screen overflow-y-scroll">
            <div className="mt-8">
              <span className="text-gray-200 font-semibold pl-3">Period</span>
              <TextInput type="date" />
            </div>
            <div className="mt-8">
              <span className="text-gray-200 font-semibold pl-3">Language</span>
              <DropDownInput data={["English"]} />
            </div>
            <div className="mt-8">
              <span className="text-gray-200 font-semibold pl-3 mb-2">
                Reviews
              </span>
              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">5 Star</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">73</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">4 Star</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">45</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">3 Star</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">22</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">2 Star</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">5</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">1 Star</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">3</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="text-gray-200 font-semibold pl-3 mb-2">
                Text Analytics
              </span>
              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">All</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">5,456</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">Processed</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">456</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">Not Processed</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">5,000</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="text-gray-200 font-semibold pl-3 mb-2">
                Status
              </span>
              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">Open</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">54</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 px-4 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-200 ml-3">Under Review</span>
                </div>{" "}
                <div>
                  <span className="text-gray-200">45</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col justify-start align-middle min-h-screen">
        <div className="pt-5">
          <div className="md:full lg:w-full w-full md:h-auto flex  justify-center align-middle text-gray-200">
            <div className="md:w-11/12 lg:w-11/12 w-11/12  px-4 my-auto flex justify-center align-middle  rounded text-gray-200 focus:outline-none font-bold text-center">
              <input
                placeholder="Search review"
                type="text"
                className="md:w-11/12 lg:w-11/12 w-11/12 py-3 px-4 bg-led-screen rounded text-white focus:outline-none placeholder-led-text"
              />
            </div>
          </div>
          {/* Card */}
          <div className="h-screen overflow-y-scroll">
            <ReviewCard
              rating={4}
              title="I like the new updates"
              content="Colleagues in my company love this feature"
            />
          </div>

          {/* Card end */}

          {
            <div className="bg-deep-blue h-auto flex justify-between mt-7 align-middle border border-gray-800">
              <div className="my-auto px-3 py-6 flex">
                <div className="text-gray-200 font-bold  pl-3">1-50</div>
                <div className="pl-6">
                  <div>
                    <div className="font-semibold  text-white">of 5,456</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>


      <div className="w-full  md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue">
        <div className="">
          <div className="md:w-full py-5 lg:w-full w-full flex justify-center align-middle text-gray-200 border-b px-3  border-gray-800">
            <div className="w-full">
              <div className="flex justify-center align-middle flex-col">
                <div className="text-white font-semibold text-center mb-4">
                  Overall Performance
                </div>
                <div className="text-white font-bold text-center text-6xl">
                  3.0
                </div>
              </div>
              <div className=" flex justify-center align-middle">
                <RatingView
                  className="mx-auto"
                  ratingValue={3}
                  fillColor={"#fff"}
                  emptyColor={"#848484"}
                />
              </div>{" "}
            </div>
          </div>

          <div className="md:w-full py-5 lg:w-full w-full flex justify-center align-middle text-gray-200 border-b px-3  border-gray-800">
            <div>
              <div className="flex justify-between mt-2">
                <div className="text-white font-semibold">Total Reviews</div>
                <div className="text-white font-bold">5,456</div>
              </div>
              <VictoryChart>
              <VictoryArea
                  interpolation="natural"
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                  style={{
                    labels: { fill: "#fff", fontSize: 20, fontWeight: "bold" },
                    data: {
                      fill: "rgba(124,58,237)",
                      fillOpacity: 0.1,
                      stroke: "rgba(124,58,237)",
                      strokeWidth: 2,
                    },
                  }}
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 },
                  ]}
                />
              </VictoryChart>
            </div>
          </div>

          <div className="md:full lg:w-full w-full flex flex-col justify-center align-middle text-gray-200 py-5 px-3">
            <div className="flex justify-between  mt-2">
              <div className="text-white font-semibold">Sentiments</div>
              <div className="text-white font-bold"></div>
            </div>

            <div className="flex flex-col lg:flex-col md:flex-col w-full justify-between align-middle">
              <div className="w-full mx-auto">
              <VictoryPie
                  width={600}
                  labelPosition="centroid"
                  labels={({ datum }) => `${datum.x}`}
                  style={{
                    labels: { fill: "#fff", fontSize: 15, fontWeight: "bold" },
                  data:{fill:({datum})=>`${datum.fill}`}
                  }}
                  innerRadius={50}
                  data={[
                    { x: "Positive", y: 63.7,fill:"rgba(124,58,237,0.6)" },
                    { x: "Negative", y: 22.1,fill:"rgba(124,58,237,0.4)" },
                    { x: "Neutral", y: 15.2 ,fill:"rgba(124,58,237,0.2)"},
                  ]}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                />
              </div>

              <div className="w-full text-base lg:text-base md:text-base flex flex-col align-middle mx-auto">
              <div className="my-auto w-full">
                  <div className="flex justify-between w-full">
                    <div className="text-purple-600">Positive</div>
                    <div className="text-white">63.7%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-purple-400">Negative</div>
                    <div className="text-white">22.1%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-purple-200">Neutral</div>
                    <div className="text-white">15.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

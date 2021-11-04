import DropDownInput from "@components/Inputs/dropDownInput";
import TextInput from "@components/Inputs/textInput";
import FeedBackCard from "@components/Cards/feedbackCard";

import { VictoryArea, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
export default function FeedBackPage() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start space-y-0 ">
      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue ">
        <div className="py-5">
          <div className="md:full lg:w-full w-full flex justify-center align-middle text-led-text border-b border-gray-800">
            <div className="md:w-11/12 lg:w-11/12 w-11/12  my-3 px-4  rounded text-white focus:outline-none font-bold text-center">
              Segment
            </div>
          </div>
          <div className="h-screen overflow-y-scroll">
            <div className="mt-8">
              <span className="text-white font-semibold pl-2">Period</span>
              <TextInput center  type="date" />
            </div>

            <div className="mt-8 pl-2">
              <span className="text-white font-semibold  mb-2">
                Boards
              </span>
              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1  flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">Feature</span>
                </div>{" "}
                <div>
                  <span className="text-white">5,456</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1  flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">Bug Reports</span>
                </div>{" "}
                <div>
                  <span className="text-white">456</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pl-2">
              <span className="text-white font-semibold  mb-2">
                Text Analytics
              </span>
              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1  flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">All</span>
                </div>{" "}
                <div>
                  <span className="text-white">5,456</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">Processed</span>
                </div>{" "}
                <div>
                  <span className="text-white">456</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1  flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">Unprocessed</span>
                </div>{" "}
                <div>
                  <span className="text-white">5,000</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pl-2">
              <span className="text-white font-semibold  mb-2">
                Status
              </span>
              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1  flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">Open</span>
                </div>{" "}
                <div>
                  <span className="text-white">54</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text">Under Review</span>
                </div>{" "}
                <div>
                  <span className="text-white">45</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">In Progress</span>
                </div>{" "}
                <div>
                  <span className="text-white">0</span>
                </div>
              </div>

              <div className="md:w-11/12 lg:w-11/12 w-full py-1 my-1 flex justify-between align-middle">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-led-text ">Planned</span>
                </div>{" "}
                <div>
                  <span className="text-white">588</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col justify-start align-middle min-h-screen">
        <div className="pt-5">
          <div className="md:full lg:w-full w-full md:h-auto flex  justify-center align-middle text-led-text">
            <div className="md:w-11/12 lg:w-11/12 w-11/12  px-4 my-auto flex justify-center align-middle  rounded text-led-text focus:outline-none font-bold text-center">
              <input
                placeholder="Search feedback"
                type="text"
                className="md:w-11/12 lg:w-11/12 w-11/12 py-3 px-4 bg-led-screen rounded text-white focus:outline-none placeholder-led-text"
              />
            </div>
          </div>
          {/* Card */}
          <div className="h-screen overflow-y-scroll">
            <FeedBackCard
              title="Individual elements for each data point, some of its
              behavior is different"
              content="Individual elements for each data point, some of
              its behavior is"
              sentiment={-1}
            />

<FeedBackCard
              title="Individual elements for each data point, some of its
              behavior is different"
              content="Individual elements for each data point, some of
              its behavior is"
              sentiment={1}
            />

<FeedBackCard
              title="Individual elements for each data point, some of its
              behavior is different"
              content="Individual elements for each data point, some of
              its behavior is"
              sentiment={0}
            />

<FeedBackCard
              title="Individual elements for each data point, some of its
              behavior is different"
              content="Individual elements for each data point, some of
              its behavior is"
              sentiment={-1}
            />

<FeedBackCard
              title="Individual elements for each data point, some of its
              behavior is different"
              content="Individual elements for each data point, some of
              its behavior is"
              sentiment={2}
            />
          </div>

          {/* Card end */}

          {
            <div className="bg-deep-blue h-auto flex justify-between mt-7 align-middle border border-gray-800">
              <div className="my-auto px-3 py-6 flex">
                <div className="text-led-text font-bold  pl-3">1-50</div>
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

      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue">
        <div className="">
          <div className="md:w-full py-5 lg:w-full w-full flex justify-center align-middle text-led-text border-b px-3  border-gray-800">
            <div>
              <div className="flex flex-col align-middle mt-2">
                <div className="text-blue-600 font-semibold mx-auto">Total Feedbacks</div>
                <div className="text-white font-bold mx-auto">5,456</div>
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
                      fill: "rgba(95,165,250)",
                      fillOpacity: 0.1,
                      stroke: "rgba(95,165,250)",
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

          <div className="md:full lg:w-full w-full flex flex-col justify-center align-middle text-led-text border-b py-5 px-3 border-gray-800">
            <div className="flex flex-col align-middle  mt-2">
              <div className="text-white mx-auto font-semibold text-center">Sentiments</div>
              {/* <div className="text-white font-bold"></div> */}
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
                    { x: "Positive", y: 63.7,fill:"rgba(52,211,153)" },
                    { x: "Negative", y: 22.1,fill:"rgba(248,113,113)" },
                    { x: "Neutral", y: 15.2 ,fill:"rgba(251,191,36)"},
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
                    <div className="text-green-400">Positive</div>
                    <div className="text-white">63.7%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-red-400">Negative</div>
                    <div className="text-white">22.1%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-yellow-400">Neutral</div>
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

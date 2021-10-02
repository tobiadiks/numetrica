import DropDownInput from "@components/Inputs/dropDownInput";
import TextInput from "@components/Inputs/textInput";
import { VictoryArea, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
export default function FeedBackPage() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start space-y-0 min-h-screen">
      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue">
        <div className="py-0">
          <div className="md:full lg:w-full w-full flex justify-center align-middle text-led-text border-b border-led-text">
            <div className="md:w-11/12 lg:w-11/12 w-11/12 py-3 my-3 px-4  rounded text-white focus:outline-none font-bold text-center">
              Segment
            </div>
          </div>

          <div className="mt-3">
            <span className="text-led-text font-semibold pl-3">Period</span>
            <TextInput type="date" />
          </div>

          <div className="mt-3">
            <span className="text-led-text font-semibold pl-3">Language</span>
            <DropDownInput data={[{ value: 2 }, { value: 3 }]} />
          </div>

          <div className="mt-3">
            <span className="text-led-text font-semibold pl-3">Category</span>
            <div className="md:w-11/12 lg:w-11/12 w-full py-2 my-3 px-4 flex justify-between align-middle">
              <div>
                <input type="radio" />{" "}
                <span className="text-led-text ml-3">All</span>
              </div>{" "}
              <div>
                <span className="text-led-text">5,456</span>
              </div>
            </div>

            <div className="md:w-11/12 lg:w-11/12 w-full py-2 my-3 px-4 flex justify-between align-middle">
              <div>
                <input type="radio" />{" "}
                <span className="text-led-text ml-3">Processed</span>
              </div>{" "}
              <div>
                <span className="text-led-text">456</span>
              </div>
            </div>

            <div className="md:w-11/12 lg:w-11/12 w-full py-2 my-3 px-4 flex justify-between align-middle">
              <div>
                <input type="radio" />{" "}
                <span className="text-led-text ml-3">Not Processed</span>
              </div>{" "}
              <div>
                <span className="text-led-text">5,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/4 lg:w-2/4 flex flex-col justify-start align-middle">
        <div className="py-0">
          <div className="md:full lg:w-full w-full flex justify-center align-middle text-led-text border-b border-led-text">
            <div className="md:w-11/12 lg:w-11/12 w-11/12 py-3 px-4  rounded text-led-text focus:outline-none font-bold text-center">
              <input
                placeholder="Search feedback"
                type="text"
                className="md:w-11/12 lg:w-11/12 w-11/12 py-3 px-4 bg-led-screen rounded text-white focus:outline-none placeholder-led-text"
              />
            </div>
          </div>
          Card
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start align-middle bg-deep-blue">
        <div className="py-0">
          <div className="md:full lg:w-full w-full flex justify-center align-middle text-led-text border-b px-3 py-5 border-led-text">
            <div>
              <div className="flex justify-between mt-2">
                <div className="text-white font-semibold">Total Feedbacks</div>
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
                      fill: "#ffffff",
                      fillOpacity: 0.1,
                      stroke: "#fff",
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

          <div className="md:full lg:w-full w-full flex flex-col justify-center align-middle text-led-text border-b py-5 px-3 border-led-text">
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
                  }}
                  innerRadius={50}
                  data={[
                    { x: "Positive", y: 63.7 },
                    { x: "Negative", y: 22.1 },
                    { x: "Neutral", y: 15.2 },
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
                    <div>Positive</div>
                    <div>63.7%</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Negative</div>
                    <div>22.1%</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Neutral</div>
                    <div>15.2%</div>
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

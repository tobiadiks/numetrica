import Screen from "@components/screen/screen"
import { VictoryArea, VictoryChart } from "victory"
export default function TwitterPage() {
    return (
      <div className="flex flex-col items-center justify-center space-y-12">
      <VictoryChart>
        <VictoryArea
          animate={{
    duration: 2000,
    onLoad: { duration: 1000 }
  }}
  style={{ data: { fill: "#fff" } }}
  data={[
      { x: 1, y: 2 },
      { x: 2, y: 3},
      { x: 3, y: 5},
      { x: 4, y: 4 },
      { x: 5, y: 6 }
    ]}
 
        />
      </VictoryChart>
      </div>
    )}
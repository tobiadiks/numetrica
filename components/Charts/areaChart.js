import { useState } from "react";
import { VictoryArea, VictoryChart, VictoryPie, VictoryTooltip } from "victory";

export default function AreaChart(){
    const [data,setData]=useState([
        { x: 'monday', y: 137 },
        { x: 'tuesday', y: 432 },
        { x: 'wednesday', y: 140 },
        { x: 'thursday', y: 475 },
        { x:'friday', y: 745 },
      ])

      const changeData = ()=>{
          setData(
            [
                { x: 'monday', y: Math.random()*13 },
                { x: 'tuesday', y: Math.random()*43 },
                { x: 'wednesday', y: Math.random()*14 },
                { x: 'thursday', y: Math.random()*47 },
                { x:'friday', y: Math.random()*74 },
              ]
          )
      }
    return(
        <div>
              <div className="flex flex-col align-middle mt-2" onClick={changeData}>
                <div className=" cursor-pointer text-blue-600 font-semibold mx-auto">Tap for magic!</div>
                <div className="text-white font-bold mx-auto text-sm">0ur analytics react to your live data</div>
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
                  data={data}
                />
              </VictoryChart>
            </div>
    )
}
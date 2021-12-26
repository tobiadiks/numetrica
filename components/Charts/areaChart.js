import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { VictoryArea, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
import { faMagic } from "@fortawesome/free-solid-svg-icons";

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
                <div className=" cursor-pointer text-basic1 font-semibold mx-auto ">Tap for magic!&nbsp;<span className=""><FontAwesomeIcon icon={faMagic} /></span></div>
                <div className="text-basic1  mx-auto text-sm">0ur analytics react to your live data</div>
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
                      fill: "#193b68",
                      fillOpacity: 0.1,
                      stroke: "#193b68",
                      strokeWidth: 2,
                    },
                  }}
                  data={data}
                />
              </VictoryChart>
            </div>
    )
}
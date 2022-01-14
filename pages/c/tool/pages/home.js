import {useNode} from "@craftjs/core";
import React from "react";
import {Editor, Frame, Canvas,Element, Selector} from "@craftjs/core";
import { Layers } from "@craftjs/layers";

const TextComponent = ({text}) => {
  const { connectors: {connect,drag} } = useNode();

  return (
    <div  ref={ref =>connect(drag(ref))}>
      <h2>{text}</h2>
    </div>
  )
}


  


const Container = ({children}) => {

  return (
    <div >
          {children}
    </div>
  )
}

const App = () => {
    return (
      <div>
        <header>Some fancy header or whatever</header>
        <Editor resolver={{TextComponent, Container}}>
           {/* Editable area starts here */}
          <Frame >
              <Element is={Container} canvas>
                  <TextComponent text="I'm already rendered here" />
                  <TextComponent text="I'm " />
              </Element>
          </Frame>
          
        </Editor>
      </div>
    )
  }

  export default App;
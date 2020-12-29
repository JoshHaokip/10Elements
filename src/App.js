import React from "react";
import Name from './components/Name';
import Line from './components/Line';
import Skills from './components/Skills'

function App() {

  const container = {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'};
  const square = {width: 325, height: 325, backgroundColor: 'white'}

  return (
    <>
      <div style={container}>
        
        <div style={square}>

          <Name />
          <Line />
          <Skills />

        </div>

      </div>
    
    </>
    
  );
}

export default App;

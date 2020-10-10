import React from 'react';
import './App.css';

import { EzGrid } from './EzGrid'

function App() {
  const template = [
    ['a', 'a', 'a'],
    ['b', 'c', 'c'],
    ['b', 'c', 'c'],
  ]

  return (
    <div className="App">
      <div style={{width:'300px',height:'300px'}}>
        <EzGrid template={ template } gap="10px">
          <div style={{backgroundColor:"green"}}>1</div>
          <div style={{backgroundColor:"red"}}>2</div>
          <div style={{backgroundColor:"yellow",display:"flex", justifyContent: "space-between",alignItems:'center'}}><span>3</span><span>3</span></div>
          {/*<span>4</span>*/}
          {/*<span>5</span>*/}
          {/*<span>6</span>*/}
          {/*<span>7</span>*/}
          {/*<span>8</span>*/}
          {/*<span>9</span>*/}
        </EzGrid>
      </div>

    </div>
  );
}

export default App;

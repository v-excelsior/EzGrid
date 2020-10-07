import React from 'react';
import './App.css';

import { EzGrid } from './EzGrid'

function App() {
  return (
    <div className="App">
      <EzGrid isGreen isBordered>
        <span>hello</span>
      </EzGrid>
    </div>
  );
}

export default App;

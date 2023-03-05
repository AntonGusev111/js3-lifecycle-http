import { useState } from 'react'
import './App.css'
import Inputs from './Components/Inputs'
import Clocks from './Components/Clocks';

function App() {
  const [zonItems, setZonItems] = useState([]);
  

  const handleClockadd = (obj) =>{
    if(Number(obj[1])){
      setZonItems(prev => ([...prev, obj]))
    }
  };

  const handleClockDell=(obj)=>{
      let clocks = zonItems;
      for (let i=0; i<clocks.length;i++){
        if(obj==clocks[i][0]){
          clocks.splice(i,1);
        };
      };
      setZonItems([...clocks])
  }


  return (

      <div className="mainWindow">
        <Inputs onChange={handleClockadd} />
        <Clocks values={zonItems} onChange={handleClockDell} />
      </div>
  )
}

export default App

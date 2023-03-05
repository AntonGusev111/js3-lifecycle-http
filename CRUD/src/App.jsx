import { useState,useEffect } from 'react'
import './App.css'
import Notes from './Components/Notes'
import Cards from './Components/Cards'
import InputNewCard from './Components/InputNewCard'

function App() {
  const [cardsList, setList] = useState([''])  


  async function getCards () { 
    let response = await fetch('http://localhost:7777/notes');
    let text = await response.json();
    setList([...text])
  };

  useEffect(() => {
    getCards()
  })


  return (
    <>
      <Notes onChange={getCards}/>
      <Cards cardsList={cardsList} onChange = {getCards}/>
      <InputNewCard onChange = {getCards}/>   
    </>
  )
}

export default App

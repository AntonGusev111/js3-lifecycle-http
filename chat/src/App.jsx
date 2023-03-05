import { useState, useEffect } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

import ChatWindow from './Components/ChatWindow'
import Input from './Components/Input'


function App() {
  const [userId, setUserId] = useState('')
  const [messageList, setMessageList] = useState('')

  const getUserId = ()=> {
    let id = localStorage.getItem('chatId');
    if (id){
      setUserId(id)
    } else{
      setUserId(id = nanoid())
      localStorage.setItem('chatId', id);
    }
  };

  

  async function getMessageList () { 
    let id;
    if(messageList){
      id = messageList.length-1.
      id=id.id;
    } else{
      id=0;
    }
    console.log('getFunc')
    let response = await fetch(`http://localhost:7777/messages?from=${id}`);
    let text = await response.json();
    setMessageList([...text])
    
  };

  const handleUpdateMList = ()=>{
    console.log('work')
    getMessageList ();
  }

  useEffect(getUserId);
  setTimeout(getMessageList,5000)
 

  return (
    <>
      <ChatWindow mList={messageList} userId={userId}/>
      <Input userId={userId} onChange = {handleUpdateMList}/>
    </>
  )
}

export default App
//onChange = {checkMessages}
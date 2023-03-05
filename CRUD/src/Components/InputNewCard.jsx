import React from 'react'

export default function InputNewCard(props) {
    const {onChange} = props;

    let request = (postDict) =>  fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(postDict)
    })
  
    const handlePostSend =(e)=>{
      if(document.querySelector('.inputArea').value){
        const postDict = {
          "id": 0,
          "content": document.querySelector('.inputArea').value
        };
        document.querySelector('.inputArea').value = '';
        request(postDict);
        onChange();
      };
    };
  

  return (
    <div className='Input'>
        <textarea name="" id="" cols="30" rows="10" className='inputArea'></textarea>
        <button className='InputButton' onClick={handlePostSend}></button>
    </div>
  )
}

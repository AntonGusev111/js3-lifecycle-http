import React from 'react'

export default function Input(props) {
    const {userId, onChange} = props;

    let request = (postDict) =>  fetch('http://localhost:7777/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(postDict)
    })

    const getValue = (e) =>{
        const postDict = {
            id:0,
            userId:userId,
            "content":e.target.previousElementSibling.value
        };
        if(postDict['content']){
            e.target.previousElementSibling.value='';
            request(postDict);
            onChange();
        };
        
        
    }

  return (
    <div className='inputArea'>
        <input type="text" className='chatInput' />
        <div onClick={getValue} className="inputButton"></div>
    </div>
  )
}


//<img className='arrowBtn' src="src\assets\sendArrow.png" alt="arrow" />
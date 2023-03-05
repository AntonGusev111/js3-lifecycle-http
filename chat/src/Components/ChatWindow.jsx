import React from 'react'
import Message from './Message'

export default function ChatWindow(props) {
    const {mList,userId} = props;
    let mRender;
    if (mList){
        mRender = mList.map((element)=>{
        return <Message message={element} userId={userId} />
    })
    }

    

  return (
    <div className='chatWindow'>
        <div className="chatArea">
            {mRender}
        </div>
    </div>
  )
}

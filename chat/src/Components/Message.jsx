import React from 'react'

export default function Message(props) {
    const {message, userId} = props;
    let className = 'message';
    if(message.userId == userId){
        className += ' usermsg'
    }

  return (
    <div key={message.id} className={className} id={message.id} userid={message.userid}>
      {message.content}
    </div>
  )
}

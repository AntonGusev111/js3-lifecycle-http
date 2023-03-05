import React from 'react'

export default function Notes(props) {
    const {onChange} = props;

  const getCards = (e) =>{
    onChange(e);
  }


  return (
    <div className="Notes">
        <div><h3>Notes</h3></div>
        <button className='UpdateButtom' onClick={getCards}></button>
    </div>
  )
}



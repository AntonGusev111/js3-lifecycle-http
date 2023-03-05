import React from 'react'

export default function Card(props) {
  const {onChange, value} = props;

  const dellCard = (e) => {
    const id = e.target.parentElement.id;
    fetch('http://localhost:7777/notes/' + id, {
      method: 'DELETE',
    })
      onChange();
  }


  return (
    <>
      <div className="cross" onClick={dellCard}></div>
      <p className="card-text">{value}</p>
    </>
  )
}

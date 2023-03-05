import React from 'react'
import Card from './Card'

export default function Cards(props) {
  const {cardsList, onChange} = props;

  const getCards = () => {
    onChange();
  }

    const cardsRender = cardsList.map((element)=>{
      if(element.id){
        return(
          <div key={element.id} id={element.id} className="card">
            <Card value={element.content} onChange = {getCards}/>
          </div>
        )
      };
    })
      

  return (
    <div className='cards'>
      {cardsRender}
    </div>
  )
}

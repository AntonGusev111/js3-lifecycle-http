import React from 'react'
import Clock from './Clock';

export default function Clocks(props) {
    const {values, onChange} = props;

    console.log('111', values)

    const HandledellClock = (obj) =>{
        onChange(obj)
    }

    const renderClocks = values.map((element, index) =>{
        return <Clock value={element} key={index} onChange={HandledellClock}/>
    })


  return (
    <div className='ClocksBlock'>
      {renderClocks}
    </div>
  )
}

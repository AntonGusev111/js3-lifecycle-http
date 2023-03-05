import React from 'react'

export default function Clock(props) {
    const {value, onChange} = props;
    
    const date = new Date;
    const seconds = date.getSeconds()*6.5;
    const minutes = date.getMinutes()*6.5;
    const hour = (date.getHours()-3)+Number(value[1]);
    const hours = (hour*31);


    const handledellClock = (e)=>{
        onChange(e.target.previousElementSibling.innerHTML)
    }

  return (
    <>
    <div className='clockBlock'>
        <div className="clockHeader">
            <div className="clockname">{value[0]}</div>
            <div className="deleteClock" onClick={handledellClock}>X</div>
        </div>

        <article className="clock">
            <div className="hours-container"  style={{transform: `rotateZ(${hours}deg)`}}>
                <div className="hours"></div>
            </div>
            <div className="minutes-container"style={{transform: `rotateZ(${minutes}deg)`}}>
                <div className="minutes"></div>
            </div>
            <div className="seconds-container" style={{transform: `rotateZ(${seconds}deg)`}}>
                <div className="seconds"></div>
            </div>  

        </article>
    </div>
    </>
  )
}

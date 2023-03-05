import React from 'react'
import { useState } from 'react'

export default function Inputs(props) {
    const {onChange} = props;
    const[name, setName] = useState('');
    const[timeZone, setTimeZone] = useState('');

    const handleSetName = (e)=>{
        setName(e.target.value);

    };

    const handleSetTZ = (e) =>{
        setTimeZone(e.target.value);

    };


    const sendValues = (e) =>{
        e.preventDefault();
        const clock = [name,timeZone];
        setName('');
        setTimeZone('');
        onChange(clock);
        

    }

    

  return (
    <div>
        <form className='inputForm'  onSubmit={sendValues}>
            <div className="formHeaders">
                <label className='NameHeader'>Название</label>
                <label className='tzHeader' >Временная зона</label>
            </div>
            <input className='NameInput' type="text"  onInput={handleSetName} value={name}/>
            <input className='TimeZoneInput' type="text"  onInput={handleSetTZ} value={timeZone}/>
            <button className='AddButton'>Добавить</button>
        </form>
        
    </div>
  )
}

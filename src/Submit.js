import React, { createContext, useRef } from 'react';
import {v4 as uuidv4} from 'uuid'
import Display from './Display';

export const DataContext = createContext()
const Submit = () => {
  const weatherRef = useRef()
  const eventRef = useRef()
  const [data, setData] = React.useState([])

  const handleAddData = () => {
    const weather = weatherRef.current.value
    const event = eventRef.current.value
    console.log(weather, event)
    if(weather==='' || event==='')return
    setData((prevData)=>{
      const date = new Date().toLocaleDateString('sv-SE')
      return [...prevData, {id: uuidv4(), date: date, weather: weather, event: event}]
    })
    weatherRef.current.value = null
    eventRef.current.value = null
    console.log(data)
  }

  return (
    <DataContext.Provider value={{ data, setData }}>
        <div>
          <h1>Nikkiy Ver.2</h1>
          <h2>今日の天気</h2>
          <input type='text' placeholder='今日の天気を入力してください' style={{ width: '20%' }} ref={weatherRef}/>
          <h2>今日の出来事</h2>
          <input type='text' placeholder='今日の出来事を入力してください' style={{ width: '20%' }} ref={eventRef}/>
          <input type='submit' value='送信' onClick={handleAddData}/>
          <hr></hr>
          <Display />
    </div>
    </DataContext.Provider>
  )
}

export default Submit
import React from 'react'
import {useEffect, useContext} from 'react'
import {DataContext} from './Submit'

const Edit = ({selectedData, setSelectedData}) => {
    useEffect(() => {
        document.getElementById('id').innerHTML = selectedData.id;
        document.getElementById('date').value = selectedData.date;
        document.getElementById('weather').value = selectedData.weather;
        document.getElementById('event').value = selectedData.event;
    }, [selectedData])

    const { data, setData } = useContext(DataContext);
    const editDiary = () => {
        const copyData = [...data];
        const key = document.getElementById('id').innerHTML;
        const targetElement = copyData.find(item => item.id === key);
        const index = copyData.indexOf(targetElement);

        const newDate = document.getElementById('date').value;
        const newWeather = document.getElementById('weather').value;
        const newContent = document.getElementById('event').value;
        copyData[index] = {id: key, date: newDate, weather: newWeather, event: newContent};
        setData(copyData);

        setSelectedData(null);
    }


    return (
        <div>
            <p id='id' hidden></p>
            <h1>編集画面</h1>
            <h2>日付</h2>
            <input type='date' style={{ width: '20%' }} id='date'/>
            <h2>天気</h2>
            <input type='text' style={{ width: '20%' }} id='weather'/>
            <h2>内容</h2>
            <input type='text' style={{ width: '20%' }} id='event'/>
            <input type='submit' value='編集'  onClick={()=>editDiary()}/>
        </div>)
}

export default Edit
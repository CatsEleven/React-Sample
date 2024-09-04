import React from 'react'
import { useContext, useState } from 'react';
import { DataContext } from './Submit';
import Edit from './Edit';

const Display = () => {
    // 日記データを保持するための変数
    const { data, setData } = useContext(DataContext);

    // 編集するデータを取得するための変数
    const [selectedData, setSelectedData] = useState(null);

    const deleteDiary = (id) => {
        // データを削除する処理
        const copyData = [...data];
        setData(copyData.filter(item => item.id !== id));
    };

    if (!data || data.length === 0) {
        return <p>表示する日記はありません</p>; // データがない場合の表示
    }

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <p>日付: {item.date}</p>
                    <p>天気: {item.weather}</p>
                    <p>内容: {item.event}</p>
                    <a href="#" onClick={() => deleteDiary(item.id)}>削除</a>
                    <br />
                    <a href="#" onClick={() => setSelectedData(item)}>編集</a>
                    <hr />
                </div>
            ))}
            {selectedData && <Edit selectedData={selectedData} setSelectedData={setSelectedData} />}
        </div>
    );
}

export default Display;

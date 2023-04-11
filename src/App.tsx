import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [task, setTask] = useState([
        {learn: 'C++'},
        {learn: 'JS'},
        {learn: 'English C2'},
        {learn: 'Science soft engineering'},
    ])
    const [word, setWord] = useState('')

    const getValues = (event: any) => {
        setWord(event.target.value)

        return true
    }

    const addTask = () => {
        if(word.length === 0) {
            alert("Empty string, write text")
            return
        }
        const arr = [...task, {learn: word}]
        setTask(arr)


        return
    }

    const deleteTask = (idx: any): any => {
        const arr = task.filter((item, index) => index !== idx)
        setTask(arr)
        return
    }
    return (
        <div className="App"
             style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
            <div>
                <input onChange={getValues} value={word}/>
            </div>
            <div style={{paddingRight: '35px'}}>
                {task.map((item, idx) => (
                    <ul key={idx} style={{
                        listStyleType: "none",
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <li>{item.learn}</li>
                        <button onClick={() => deleteTask(idx)}>x</button>
                    </ul>
                ))}
            </div>
            <div>
                <button onClick={addTask}>Добавить</button>
            </div>
        </div>
    );
}

export default App;

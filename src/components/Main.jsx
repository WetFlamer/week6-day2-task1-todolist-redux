import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import './styles/Main.css'
import Todos from './Todos';
const Main = () => {
const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')


    const handleText = (e) => {
        setInputValue(e.target.value)
    }
    const handleAddTodo = ()=> {
        dispatch({type:'add', payload:inputValue})
        setInputValue("")
      }

    return (
        <div className='main-block'>
            <div className='list'>
           <input onChange={handleText} className='input' value={inputValue} type="text" />
           <button onClick={handleAddTodo} className='addButton'>Добавить</button>
           <Todos/>
           </div>
        </div>
    );
};

export default Main;
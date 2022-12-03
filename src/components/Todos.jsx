import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './styles/Todos.css'

const Todos = () => {
    
const state = useSelector((initialState) => initialState)

const dispatch = useDispatch()

const handleDelete = (index) => {
    dispatch({type: 'delete', payload: index})
}

const handleCheck = (index) => {
    dispatch({type:'check', payload: index})
    console.log(state)
}
return (
    <div>
      {state.todos.map((el,index)=> {
        return (
            <div key={index} className='todos'>
            <input onChange={() => handleCheck(index)} className='inputS' type="checkBox"/>
          <div className={el.completed ? 'textChecked' : 'text'}>{el.text}</div>
          <button onClick={()=> handleDelete(index)} className='deleteButton'>Delete</button>
          </div>)
      })}
    </div>
  );
    }

export default Todos;
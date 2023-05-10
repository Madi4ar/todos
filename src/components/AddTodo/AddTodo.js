import { Button, Input } from 'antd';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddTodo({todo, setTodo}){
  const [value, setValue] = useState('');
  const [description, setDescription] = useState(''); 
  function saveTodo () {
    if(value === '') {
      console.log('Напишите то что хотите')
    } else {  
    setTodo(
        [...todo, {
            id:uuidv4(),
            title:value,
            description:description,
            status:true
        }]
    )
    }
    setValue('');
    setDescription('');
  }
  console.log(...todo);
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
        <Input style={{width:'200px'}} type="text" placeholder='Add new todo' value={value} onChange={(e) => setValue(e.target.value) }/>
        <Input style={{width:'200px', marginLeft:'10px'}} type="text" placeholder='Add description' value={description} onChange={(e) => setDescription(e.target.value) }/>
        <Button style={{marginLeft:'10px'}} onClick={saveTodo} type="primary" className='primary'>Add</Button>
    </div>
  )
}

export default AddTodo;
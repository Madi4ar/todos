import React, { useState } from 'react'
import s from './TodoList.module.css';
import {
    DeleteOutlined,
    EditOutlined,
    CloseOutlined
  } from '@ant-design/icons';
import { Button, Card, Input } from 'antd';

function TodoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)    
    }

    function closeTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    function editTodo(id, title, description) {
        setEdit(id);
        setValue(title);
        setDescription(description);
    }
    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id == id) {
                item.title = value
                item.description = description
            }
            return item
        })
        setValue(newTodo);
        setDescription(description);
        setEdit(null)
    }
    return (
    <div className={s.flex}>
        {todo.map(item => (
            <div key={item.id}>
            
            {
                edit == item.id ?
                <div className={s.edit}> 
                    <Input style={{width:'200px'}} type="text" placeholder='Add new todo' value={value} onChange={(e) => setValue(e.target.value) }/>
                    <Input style={{width:'200px'}} type="text" placeholder='Add description' value={description} onChange={(e) => setDescription(e.target.value) }/>
                </div> :
                <div className={!item.status ? s.close : ''}>
                    <Card title={item.title} style={{ width: 300 }}>
                        <p>{item.description}</p>
                    </Card>
                </div>
            }
            
            {
                edit == item.id ?
                <div className={s.save}>
                    <Button onClick={() => saveTodo(item.id)} type="primary">Save</Button>
                </div> : 
                <div className={s.buttons}>
                    <DeleteOutlined onClick={() => deleteTodo(item.id)}/>
                    <EditOutlined onClick={() => editTodo(item.id, item.title, item.description)}/>
                    <CloseOutlined onClick={() => closeTodo(item.id)}/>
                </div>
            }
             </div>
        ))}
    </div>
  )
}

export default TodoList;
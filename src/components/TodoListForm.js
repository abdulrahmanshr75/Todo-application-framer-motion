import React, {useState, useEffect, useRef} from 'react';
import { useId } from "react-id-generator";
import {motion} from 'framer-motion';

function TodoListForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const focus = useRef(null);

    useEffect(() =>  {
        focus.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit( {
            id:{useId},
            text : input
        })
        setInput("");
    };


    return (
        <>
            {props.edit ? (
            <motion.div 
            initial={{ x: -1000}}
            animate={{ x: 0 }}
            transition={{ type: 'spring', velocity: 3 }}>
            <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text"
            placeholder="Update your todo!"
            value={input}
            name="text"
            onChange={handleChange}
            ref={focus}/>
            <button className="todo-button">update</button>
            </form>
            </motion.div>
            ) : (
            <motion.div
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{ type: 'spring', velocity: 3, delay : 3 }}
            >
            <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text"
            placeholder="Add your todo!"
            value={input}
            name="text"
            onChange={handleChange}
            ref={focus}/>
            <button className="todo-button">Add</button>
            </form>
            </motion.div>
            )
            }

        </>
    )
}

export default TodoListForm

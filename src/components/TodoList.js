import React, {useState} from 'react'
import TodoListForm from './TodoListForm'
import Todo from './Todo';
import { motion } from 'framer-motion';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addNew = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

    const newTodos = [todo, ...todos]

    setTodos(newTodos);

    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
};
    

    const removeTodo = id => {
        const removeArr= [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }


    return (
        <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{type:'spring', velocity: 3, delay : 1}}
        className="todo-app">
            <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ type: 'spring', velocity: 3 , delay : 2 }}
            >
            <h1>Howday, What do you want to do today ?</h1>
            </motion.div>
            <TodoListForm onSubmit={addNew}/>
            <Todo updateTodo={updateTodo}  todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </motion.div>
    )
}

export default TodoList

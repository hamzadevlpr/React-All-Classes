import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';

const TodoList = () => {
    // let listItem = localStorage.setItem("List")
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const handleAdd = () => {
        if (newTodo === "") {
            toast.error('Can not be Empty', {
                position: "bottom-right",
                autoClose: 1000,
            });
        } else {
            toast.success('Added Successfully!', {
                position: "bottom-right",
                autoClose: 1000,
            });
            setTodos([...todos, newTodo]);
            setNewTodo("");
            // setTodos([...todos,])
        }

    }

    const handleDeleteTodo = (index) => {
        toast.error('Deleted Successfully', {
            position: "bottom-right",
            autoClose: 1000,
        });
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);


    };

    return (
        // <div className="my-6 flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8 mb-20">
        <div className='pb-20 overflow-visible my-20 border-b border-2 mx-auto max-w-lg p-5 rounded-lg bg-white shadow-xl'>
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-3xl text-gray-700 text-center font-bold mb-4">To-Do List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="border border-gray-300 px-4 py-2 w-full"
                        placeholder="Enter a new task..."
                        value={newTodo}
                        onChange={(e) => { setNewTodo(e.target.value) }}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 ml-2" onClick={handleAdd}>Add</button>
                </div>
                {todos.map((todo, index) => (
                    <div
                        key={index}
                        className="flex items-center border-b border-gray-300 py-2"
                    >
                        <input value={todo} className="flex-grow pl-4" disabled />
                        <div className="flex gap-x-4">
                            <button title='Edit'
                                className="text-green-500 hover:text-green-600 font-bold"
                                onClick={() => handleDeleteTodo(index)}
                            ><AiFillEdit size={21} /></button>
                            <button title='Delete'
                                className="text-red-500 hover:text-red-600 font-bold"
                                onClick={() => handleDeleteTodo(index)}
                            ><AiFillDelete size={21} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // </div>
    );
};

export default TodoList;

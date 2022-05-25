import { useState } from 'react';
import { useForm } from 'react-hook-form'


function Addtodo(props) {


    let { register, handleSubmit, formState: { errors } } = useForm()

    const onFormSubmit = (todoObj) => {
        props.setTodolist([...props.todolist, todoObj.newtodo])
    }

    return (
        <div className="container">
            <p className='display-5 text-into'>Add new task</p>
            <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="todo" >New todo</label>
                    <input type="text" id="todo" className='form-control' {...register("newtodo")} />

                </div>
                <button type="submit" className="btn btn-success">add new todo</button>
            </form>
        </div>
    );
}

export default Addtodo;

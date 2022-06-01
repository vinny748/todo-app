import React from "react";

function Todolist(props) {
    return (
        <div>
            <h2 className="display-5 text-primary" > list of todo</h2 >
            <div>
                {
                    props.todolist.map((todo, index) => <h1 key={index}>{todo}</h1>)
                }
            </div>
        </div >
    );
}

export default Todolist;

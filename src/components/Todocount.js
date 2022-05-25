import React from "react";
function Todocount(props) {
    return (
        <div>
            <p className="display-5 text-primary">Todo count</p>
            <div>
                <h1 className="text-secondary">{props.todolist.length}</h1>
            </div>
        </div>
    );
}

export default Todocount;

import React from "react";
function Todocount(props) {
    return (
        <div>
            <h1 className="display-5 text-primary">Todo count</h1>
            <div>
                <h1 className="text-secondary">{props.todolist.length}</h1>
            </div>
        </div>
    );
}

export default Todocount;

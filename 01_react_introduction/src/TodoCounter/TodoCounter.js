import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(
        <h2 className="TodoCounter">You completed {completed} of {total} ToDo items.</h2>
    );
}

export { TodoCounter };
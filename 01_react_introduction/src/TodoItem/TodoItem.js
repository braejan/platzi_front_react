import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    const onComplete = () => {
        alert(`The ToDo '${props.text}' was completed`);
    }

    const onDelete = () => {
        alert(`The ToDo '${props.text}' was deleted`);
    }

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                ✅
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                ❌
            </span>
        </li>
    );
}

export { TodoItem };
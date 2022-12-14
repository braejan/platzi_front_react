import React from "react";
import './CreateTodoButton.css';




function CreateTodoButton(props) {
    const onCreateButtonClick = () => {
        alert(`onClick from onCreateButtonClick`);
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={onCreateButtonClick}
            >
            +
        </button>
    );
}

export { CreateTodoButton };
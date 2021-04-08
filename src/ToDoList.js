import React from "react";

const ToDoList = (props) => {
  const deleteItem = () => {};

  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={()=>{
            props.onSelect(props.id);
        }}
        />
        <li key={props.id}> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoList;

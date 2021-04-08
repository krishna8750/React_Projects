import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}>+</button>

          <ol>
            {/* <li> {inputList} </li> */}

            {item.map((itemval, index) => {
              return (
                <ToDoList
                  text={itemval}
                  id={index}
                  key={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

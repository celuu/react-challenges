import { useState } from "react";

const ToDoList = () => {
    const [list, setList] = useState({});
    const [input, setInput] = useState("")

    const addToList = () => {
        
    }


    return (
      <>
        <form>
          <h1>To Do List</h1>
          <label>
            Add to List 
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            ></input>
          </label>
          <button>Submit</button>

        </form>
      </>
    );

}

export default ToDoList;
import Todo_List from "./Todo_List.js";
import { useState } from "react";

const Home = () => {
  let data;

  //States
  const [val,setValue]=useState('')
  const [todo, setTodo] = useState([]);
  const [comtodo, setComtodo] = useState([]);
  const [edit, setEdit] = useState({
    text: "",
    indexx: 0,
  });
  const [display, setDisplay] = useState(false);

  const handleClose = (data) => {
    setDisplay(data);
  };

  //Delete Items and add to complete list
  const handleOnclick = (index) => {
    setComtodo([...comtodo, todo.filter((data) => data === index)]);
    let arr = todo.filter((data) => data !== index);
    setTodo(arr);
  };

  // setstate
  const getData = () => {
    if (val) {
      setTodo([...todo, val]);
      setValue('')
    }
  };

  const handleOnchange = (event) => {
    setValue(event.target.value)
  };

  const handleChanges = (data) => {
    let arr = [...todo];
    arr[edit.indexx] = data;
    setTodo(arr);
    handleClose(false);
  };

  const handleDelete=(index,val)=>{
    if(val==='todo'){
      setTodo(todo.filter((data)=> data!==index))
    }
    else{
      setComtodo(comtodo.filter((data)=>data!==index))
    }
  }

  return (
    <div className="home">
      <div className="content">
        <input
          type="text"
          onChange={handleOnchange}
          id="input"
          value={val}
        ></input>
        <button onClick={getData}>Add to List</button>
      </div>
      <Todo_List
        todo={todo}
        comtodo={comtodo}
        edit={edit}
        display={display}
        handleOnclick={handleOnclick}
        handleChanges={handleChanges}
        handleSetEdit={(data, index) => setEdit({ text: data , indexx: index })}
        handleClose={handleClose}
        setEdit={setEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;

import Completed_List from "./Completed_List.js";
import Modal from './Modal.js'
const Todo_List = ({ todo, comtodo, edit ,display, handleOnclick ,handleDelete, handleSetEdit,setEdit, handleChanges,handleClose}) => {
const handleEditClick=(data,index)=>{
 handleSetEdit(data,index)
 handleClose(true)
}
  return (
    <>
      <div className="todo_list">
        <h3>Todo List</h3>
        <ul>
          {todo.map((data, index) => {
            return (
              <li key={index}>
                {data}
                <div className="btn">
                <button className="myBtn" onClick={()=>handleEditClick(data,index)}>Edit</button>
                <button onClick={()=>handleDelete(data,'todo')}>Delete</button>
                <button
                  onClick={() => {
                    handleOnclick(data);
                  }}
                >
                  Add to complete
                </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal display={display} edit={edit}
      handleClose={handleClose}
      handleChanges={handleChanges}
      setEdit={setEdit}
      handleDelete={handleDelete}
      />
      <Completed_List filter_data={comtodo} handleDelete={handleDelete}/>
    </>
  );
};

export default Todo_List;

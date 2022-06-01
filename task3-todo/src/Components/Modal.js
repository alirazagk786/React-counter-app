import { useState } from "react";
const Modal = ({ handleClose, display, edit,setEdit, handleChanges }) => {
//   const [edit, setEdit] = useState(editt.text);
  return (
    <div id="myModal" className={display ? "model" : "modal"}>
      <div className="modal-content">
        <input
          type="text"
          value={edit.text}
          onChange={(e) => setEdit({...edit, text:e.target.value})}
        ></input>
        <button onClick={() => {handleChanges(edit.text)}}>Save Changes</button>
        <button onClick={() => handleClose(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;

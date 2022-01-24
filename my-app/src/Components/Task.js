import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { DELETE, EDIT, DONE } from "../redux/action";
import { Form } from 'react-bootstrap'

function Task({id,description,isDone}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isDone)
  const handleClick = () => setChecked( !checked)
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(description);
  
  const toggle = (id) => {
    dispatch({
     type : DONE,
      payload: id
    });
    console.log(isDone,id,checked)
  };
  const handleDelete =()=>{
    dispatch({
      type: DELETE,
      payload:id,
    } );
    console.log(description)
  }

  const submitEdit = () => {
    dispatch({
      type: EDIT,
      payload: {
        id,
        newText: editText,
      },
    });
    setEdit(null);
     setEditText("");
  };
 
    return (
        <div>
            <div>
            <span className='age'>{id}</span>
            <span className='name'>{description}</span>
            <span className='action ' key={id}  > 
                <Form  >
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check key={id} type="checkbox" label="Done" onChange={handleClick} onClick={()=>toggle(id)}  checked={checked} />
  </Form.Group>
  </Form> 
  </span>
  <>
  {edit === id ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="btn btn-success m-3 "
            onClick={() => submitEdit()}
          >
            Submit Edit
          </button>
        </div>
      ) : (
       <> </>
      )}
            <span className="action edittask"  onClick={() => setEdit(id)} >edit</span>
       </>
       <span span className=" icon" >
  <button  onClick={handleDelete}>&times;</button>
  </span>
  </div>
        </div>

    )
   
}

export default Task

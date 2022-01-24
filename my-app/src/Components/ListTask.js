import React,{useState} from 'react'
import {Breadcrumb} from "react-bootstrap";
import Task from './Task'
import AddTask from './AddTask'

import {FILTER} from "../redux/action";
import { useSelector ,useDispatch } from "react-redux";




const ListTask =()=> {
  const filter = useSelector((state) => state.Filterstate);
  const item = useSelector(state => state.items)
  const [filtertext ,setFiltertext]=useState(filter)
  const dispatch = useDispatch();
       console.log(item,filtertext,filter)


       
       const handleFilterall=()=>{
        dispatch({ type: FILTER, payload: filtertext });
        setFiltertext("all");

       }
       const handleFilterdone=()=>{
        dispatch({ type: FILTER, payload: filtertext });
        setFiltertext("done");
       }
       const handleFilternotdone=()=>{
        dispatch({ type: FILTER, payload: filtertext });
        setFiltertext("notdone");
       }
       const newList = () => {
        if (filtertext === "all") {
          return item;
        }
        if (filtertext === "done") {
          return item.filter((el) => el.isDone === true);
        }
        if (filtertext === "notdone") {
          return item.filter((el) => el.isDone === false);
        }
      };
      let finalList = newList();
        return(
        <div className='ListItems'>
           <div>
            <span>
             <Breadcrumb>
            <Breadcrumb.Item   onClick={handleFilterall} >All</Breadcrumb.Item>
            <Breadcrumb.Item   onClick={handleFilterdone} >Done</Breadcrumb.Item>
            <Breadcrumb.Item  onClick={handleFilternotdone} >Not Done</Breadcrumb.Item>
            <AddTask/>
            </Breadcrumb>
            </span>
           </div>
           <span className= 'age title' >id</span>
            <span className='name title'>Description</span>
            <span className="action title">status </span>
            <span className= 'edit title' >edit</span>
            <span className= 'delete title' >delete</span>


            <div>
           {finalList.map((el) => {
        return (
          <div key={el.id}>
            <Task id={el.id} description={el.description} isDone={el.isDone} />

          </div>
        );
      })}
      </div>
        </div>
    )
}
export default ListTask;
 // {item.map(({id,description,isDone},i)=>
  // (<Task key = {i} id={item[i].id} description={item[i].description} isDone={item[i].isDone}/>)) }
            
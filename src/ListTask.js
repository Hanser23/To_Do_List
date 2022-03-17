import React from "react";
import './List.css';



function ListTask(props){
  const items= props.items;
  const listaitems= items.map(item=>
    {
      return <div className="Lista" key="item.key">
        <p>{item.text}</p>
      </div>
    })

  return(
    <div> {listaitems}
    </div>
  )
}

export default ListTask;
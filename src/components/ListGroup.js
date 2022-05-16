import React from "react";

const ListGroup = (props) => {
return (
    <ul className="list-group mt-4">
   {props.data.map((item, index) =>{
       return (
        <li className="list-group-item" key= {`todo__id__${index}`}>{item}
        </li>
       )
   } )
   }
  </ul>
)
}

export default ListGroup;
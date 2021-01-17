import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");


ReactDom.render(
<div>
   <ToDoList/>
</div>,
destination
);










// const index = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default index

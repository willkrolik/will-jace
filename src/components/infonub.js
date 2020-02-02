import React from "react"
export default Infonub;
function Infonub(props) {
  return (
    <div className={props.className}><img src={props.picture} alt={props.alttext}  /><h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
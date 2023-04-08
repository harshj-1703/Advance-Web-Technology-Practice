import React from 'react'

const Message = () => {
  let msg = "Hello World!";
  // msg = '';
  // if(msg.length>0){
  //   return (
  //     <div>{msg}</div>
  //   )
  // }
  // else
  // {
  //   return (<div>Hello User</div>);
  // }
  return (msg.length > 0)?<div>{msg}</div>:<div>Else</div>;
}

export default Message
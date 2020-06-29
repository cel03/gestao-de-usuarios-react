import React from 'react'
import { Link } from "react-router-dom";

const ActionButtons = ({userId, callbackDeleteUserClick}) => (
  <div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-secondary"> <Link to={`/user/${userId}`} style={{color: 'inherit'}}>Editar</Link></button>
    <button type="button" className="btn btn-secondary" onClick={()=>{callbackDeleteUserClick(userId)}}>Deletar</button>
  </div>
)

export default ActionButtons


import React from 'react'
import { Link } from "react-router-dom";

const ActionButtons = ({userId, callbackDeleteUserClick}) => (
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary"> <Link to={`/user/${userId}`} style={{color: 'inherit'}}>Editar</Link></button>
    <button type="button" class="btn btn-secondary" onClick={()=>{callbackDeleteUserClick(userId)}}>Deletar</button>
  </div>
)

export default ActionButtons


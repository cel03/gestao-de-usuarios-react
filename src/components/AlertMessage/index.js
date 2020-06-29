import React from 'react'
import AlertSuccess from "../UI/AlertSuccess"

const AlertMessage = ({show, error, message}) => {
  const alertComponent = 
    show
      ? error 
        ? <div> {message} </div>
        : <AlertSuccess message={message}/>
      : null
  return (
    <React.Fragment>
      {alertComponent}
    </React.Fragment>
  )
}

export default AlertMessage
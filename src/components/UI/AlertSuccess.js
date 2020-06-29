import React from 'react'

const AlertSuccess = ({show}) => {
  return (
    <React.Fragment>
    {
      show
      ?(
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Usuário <strong>criado</strong> com sucesso!
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
      : null
  }
  </React.Fragment>
  )
}

export default AlertSuccess
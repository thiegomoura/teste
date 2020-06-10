import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import SaveButton from './SaveButton'

class formDweller extends Component {
  
  
  render() {
    return (
      <div>
        <h1>Cadastro de Morador</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='text-field'>
            <TextField
              name="Primeiro nome"
              placeholder="Primeiro nome"
              fullWidth
              type="text"
            />
          </div>
          <div className='text-field'>
            <TextField
              name="Sobrenome"
              placeholder="Sobrenome"
              fullWidth
              type="text"
            />
          </div>
          <div className='text-field'>
            <TextField
              name="CPF"
              placeholder="CPF"
              type="number"
              fullWidth
            />
          </div>
          <div className='text-field'>
            <TextField
              name="Email"
              placeholder="Email"
              fullWidth
              type="text"
            />
          </div>
          <div className='text-field'>
            <TextField
              name="Telefone"
              placeholder="Telefone"
              fullWidth
            />
          </div>
        </form>
        <SaveButton />
      </div>
    )
  }
}

export default formDweller
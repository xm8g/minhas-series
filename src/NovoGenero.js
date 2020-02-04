import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios.post('/api/genres', {
            name: name
        }).then(res => {
            setSuccess(true)
        })
    }
    if (success) {
        return (
            <Redirect to='/genero' />
        )
    }
    return (
        <div className='container'>
            <h2>Novo Gênero</h2>
            <br />
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' className='form-control' value={name} onChange={onChange} id='name' placeholder='Digite o Gênero' />
                </div>
                <button type='button' className='btn btn-primary' onClick={save}>Salvar</button>
            </form>
        </div>
    )
}
export default NovoGenero
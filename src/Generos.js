import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/api/genres').then(res => {
            setData(res.data.data)
        })//aqui define-se quem depende dispara os efeccts. Se nada for definido, o effect só roda 1 vez
    }, [])

    const deleteRegistro = id => {
        axios.delete('api/genres/'+id).then( res => {
            const listaAposDelecao = data.filter( itemDoArray => itemDoArray.id !== id)
            setData(listaAposDelecao)
        })
    }

    const renderLine = record => {
        return (
            <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>
                    <button onClick={()=>deleteRegistro(record.id)} className='btn btn-danger'>Remover</button>
                    <Link to={'/genero/editar/'+record.id} className='btn btn-warning'>Editar</Link>
                </td>
            </tr>
        )
    }

    if (data.length === 0 ) {
        return (
            <div className='container'>
                <h2>Gêneros</h2>
                <hr />
                <div className='alert alert-warning'>
                    Não foram encontrados gêneros de série
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h2>Gêneros</h2>
            
            <Link to='/genero/novo' className='btn btn-primary'>Novo</Link>
            
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map(renderLine)}
                </tbody>
            </table>
        </div>
    )
}

export default Generos
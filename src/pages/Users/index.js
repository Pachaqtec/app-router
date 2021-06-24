import React from 'react'
import { useParams } from 'react-router-dom'

const users = [
  {
    id: 0,
    name: 'Ana',
    email: 'ana@gmail.com'
  },
  {
    id: 1,
    name: 'Víctor',
    email: 'victor@gmail.com'
  },
  {
    id: 2,
    name: 'Gustavo',
    email: 'gustavo@gmail.com'
  },
  {
    id: 3,
    name: 'Diana',
    email: 'diana@gmail.com'
  }
]

const Users = () => {
  const { id } = useParams()
  console.log('params', id)
  return (
    <div>
      <h1>
        User
      </h1>
      {
        users[id] !== undefined
        ? (
          <>
            <p>Nombre: {users[id]?.name}</p>
            <p>E-mail: {users[id]?.email}</p>
          </>
        ) : (
          <p>El usuario no existe</p>
        )
      }
    </div>
  )
}

export default Users

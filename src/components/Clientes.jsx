import React from 'react'
import { useSelector } from 'react-redux'

function Clientes () {

    const users = useSelector ((state) => state.user)

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Usuario</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => 
        <tr key={user.id}>
          <th></th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
      )
      }   
    </tbody>
  </table>
</div>
    )
}

export default Clientes

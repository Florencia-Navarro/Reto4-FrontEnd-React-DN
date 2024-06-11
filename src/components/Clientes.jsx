import React from 'react'
import { useSelector } from 'react-redux'

function Clientes () {

    const user = useSelector ((state) => state.user)

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
      {/* row 1 */}
      <tr>
        <th></th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
      </tr>
      {/* row 2 */}
      {<tr>
        <th></th>
        <td>Ervin Howell</td>
        <td>Shanna@melissa.tv</td>
        <td>Antonette</td>
      </tr>}
      {/* row 3 */}
      <tr>
        <th></th>
        <td>Clementine Bauch</td>
        <td>Nathan@yesenia.net</td>
        <td>Samantha</td>
      </tr>
    </tbody>
  </table>
</div>
    )
}

export default Clientes

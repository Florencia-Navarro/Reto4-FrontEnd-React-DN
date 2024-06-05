import React from 'react'

function Tablesale () {
    return (
        <div className=" overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Producto</th>
        <th>Categoría</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Ganancia</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Silla</th>
        <td>Interior</td>
        <td>$90</td>
        <td>40</td>
        <td>25</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>Sillones</th>
        <td>Interior</td>
        <td>$350</td>
        <td>40</td>
        <td>$125</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>Sofa-cama</th>
        <td>Interior</td>
        <td>$280</td>
        <td>10</td>
        <td>$110</td>
      </tr>
      <tr>
        <th>Silla de oficina</th>
        <td>Interior</td>
        <td>$120</td>
        <td>43</td>
        <td>$45</td>
      </tr>
    </tbody>
  </table>
</div>
    )
}

export default Tablesale

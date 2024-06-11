import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "./redux/userSlice"
import { Routes, Route } from "react-router-dom"
import Sidebar from './components/Sidebar'
import Dashboard from "./components/Dashboard"
import Clientes from './components/Clientes'
import Ventas from './components/Ventas'
import Productos from './components/Productos'
import Reportes from './components/Reportes'
import Configuracion from './components/Configuracion'
import FormUser from "./components/FormUser"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https:/jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((data) => dispatch(addUser(data)))
    .catch((error) => console.log(error))
  }, [])

  return (
    <>
     
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/formUser" element={<FormUser />} />
          </Routes>
        </div>
      </div>
     
    </>
  )
}

export default App

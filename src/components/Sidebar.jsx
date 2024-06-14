import React from 'react'
import { Link } from "react-router-dom"


import { MdDashboard } from "react-icons/md"
import { IoPersonSharp } from "react-icons/io5"
import { IoMdCart } from "react-icons/io"
import { BiSolidShoppingBag } from "react-icons/bi"
import { TbReportMoney } from "react-icons/tb"
import { IoIosSettings } from "react-icons/io"
import { SlEarphonesAlt } from "react-icons/sl"
import { FaPowerOff } from "react-icons/fa"

function Sidebar() {
    return (
        <>
            <div className=" lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full text-base-content  bg-white">
                    <div className='text-8xl mx-auto my-6'><FaPowerOff /></div>
                    <div className='flex'>
                        <MdDashboard  className='m-3'/>
                        <Link to="/"><li className='py-2'>Dashboard</li></Link>
                    </div>
                    <div className='flex'>
                        <IoPersonSharp className='m-3'/>
                        <Link to="clientes"><li className='py-2'>Clientes</li></Link>
                    </div>
                    <div className='flex'>
                        <IoMdCart className='m-3'/>
                        <Link to="ventas"><li className='py-2'>Ventas</li></Link>
                    </div>
                    <div className='flex'>
                        <BiSolidShoppingBag className='m-3'/>
                        <Link to="productos"><li className='py-2'>Productos</li></Link>
                    </div>
                    <div className='flex'>
                        <TbReportMoney className='m-3'/>
                        <Link to="reportes"><li className='py-2'>Reportes</li></Link>
                    </div>
                    <div className='flex'>
                        <IoIosSettings className='m-3'/>
                        <Link to="configuracion"><li className='py-2'>Configuración</li></Link>
                    </div>
                    <div className='p-4 '>
                        <p className='font-bold'>Ayuda/Soporte</p>
                    </div>
                    <div className='px-4 py-2 mb-6'>
                        <p>¿Necesitas ayuda o tienes alguna pregunta? Contáctanos para recibir asistencia personalizada.</p>
                    </div>
                    <button className="btn bg-blue-200 text-lg text-blue-800 my-4 "><SlEarphonesAlt />Contáctanos</button>
                    <div className='p-4'>
                        <p className='py-1'>Terms & Services</p>
                        <p className='py-1'>Privacy Policy</p>
                    </div>
                    </ul>  
                              
                </div>
                
            </div>
        </>
    )
}

export default Sidebar
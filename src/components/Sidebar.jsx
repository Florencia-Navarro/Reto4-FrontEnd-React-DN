import React from 'react'

import logo from '../assets/img/power-297098.svg'

import { MdDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { BiSolidShoppingBag } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaPowerOff } from "react-icons/fa";


function Sidebar() {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-red-400">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content  bg-white">
                    {/* Sidebar content here */}
                    <div className='text-8xl mx-auto my-6'><FaPowerOff /></div>
                    <li className='py-2'><a><MdDashboard />Dashboard</a></li>
                    <li className='py-2'><a><IoPersonSharp />Clientes</a></li>
                    <li className='py-2'><a><IoMdCart />Ventas</a></li>
                    <li className='py-2'><a><BiSolidShoppingBag />Productos</a></li>
                    <li className='py-2'><a><TbReportMoney />Reportes</a></li>
                    <li className='py-2'><a><IoIosSettings />Configuración</a></li>
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

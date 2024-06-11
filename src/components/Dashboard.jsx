import React from 'react'
import { FaBell } from "react-icons/fa";
import Clientchart from './Clientchart';
import SalesChart from './SalesChart';
import Tablesale from './Tablesale';
import Geochart from './Geochart'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div className="navbar bg-neutral-100">
                <div className="flex-1">
                    <div className='mx-14 my-4'>
                        <p className='text-xs'>Total ganancias</p>
                        <p className='text-2xl'>$ 45,365.00</p>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
                <div>
                    <Link to='/formUser'>
                        <button className="btn btn-outline">Agregar usuario</button>
                    </Link>
                    
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mx-4">
                            <div className="indicator">
                            <span className="badge badge-sm indicator-item bg-red-500">8</span> 
                                <span className='text-lg'><FaBell /></span>
                            </div>
                        </div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mx-4">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item  bg-red-500">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end mx-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>  
            <div className='flex row-auto justify-around my-6'>
                <div className="card w-96 shadow-xl bg-gradient-to-r from-blue-500 to-blue-600 ...">
                    <div className="card-body">
                        <h2 className="card-title text-white">Total clientes</h2>
                        
                        <div className="flex justify-end">
                            <p className='text-5xl text-end text-white m-4'>64</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96  shadow-xl bg-gradient-to-r from-pink-400  to-pink-500 ...">
                    <div className="card-body">
                        <h2 className="card-title  text-white">Total ventas</h2>
                        <div className="flex justify-end">
                            <p className='text-5xl text-end text-white m-4'>64</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96  shadow-xl bg-gradient-to-r from-purple-400  to-purple-500 ...">
                    <div className="card-body">
                        <h2 className="card-title  text-white">Ventas del último mes</h2>
                        <div className="flex justify-end">
                            <p className='text-5xl text-end text-white m-4'>64</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='flex '>
                    <Clientchart />
                    <SalesChart />
                </div>
                <div className='flex justify-around'>
                    <div className='max-w-lg  bg-slate-300 rounded-2xl mx-16 my-8  lg:w-1/2'>
                    <p className='m-8 px-8 text-2xl'>Productos mas vendidos</p> 
                    <Tablesale />
                    </div>
                    <div className='h-2/3 w-1/2 p-8 '>
                        <Geochart />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard

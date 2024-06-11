import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup.string().min(3).required,
    email: Yup.string().email().required,
    user: Yup.string().min(3).required,
    password: Yup.string().min(3).required,
})

function FormUser () {

    const submitForm = (values) => {

    }

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues:{
            name:'',
            email:'',
            user:'',
            password:''
        },
        onSubmit:submitForm,
        validationSchema: schema
    })

    return (
        <>
        <div className='w-6/12 mx-auto my-14 border-2 border-slate-300 rounded-xl'>
            <div>
                <h2 className='text-4xl mx-16 mt-6'>Nuevo Usuario</h2>
            </div>
            <form onSubmit={ handleSubmit } className='p-14'>
                <label className="input input-bordered flex items-center gap-2 m-4">
                    <input type="text" className="grow" placeholder="Nombre" name='name' onChange={handleChange}/>
                </label>
                {errors.name && <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>El nombre debe tener al menos 3 caracteres</span>
                    </div>}
                <label className="input input-bordered flex items-center gap-2 m-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" name='email' onChange={handleChange}/>
                </label>
                {errors.email && <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Email inválido</span>
                    </div>}
                <label className="input input-bordered flex items-center gap-2 m-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="Usuario" name='user' onChange={handleChange}/>
                </label>
                {errors.user && <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>El usuario debe tener al menos 3 caracteres</span>
                    </div>}
                <label className="input input-bordered flex items-center gap-2 m-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" className="grow" value="Contraseña" name='password' onChange={handleChange}/>
                </label>
                {errors.password && <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>La contraseña debe tener al menos 3 caracteres</span>
                    </div>}
                <button className="btn m-4" type='submit'>Agregar usuario</button>
            </form>
        </div>
            
        </>
    )
}

export default FormUser

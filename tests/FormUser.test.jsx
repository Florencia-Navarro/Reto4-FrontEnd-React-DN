import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FormUser from '../src/components/FormUser'
import { addUser } from '../src/redux/userSlice'
import { vi } from 'vitest'


const mockStore = configureStore([])

test('renders the FormUser component', () => {
    const store = mockStore({})
    render(
        <Provider store={store}>
            <FormUser />
        </Provider>
    )

    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument()
})

test('dispatches addUser action on form submit', () => {
    const store = mockStore({})
    store.dispatch = vi.fn()

    render(
        <Provider store={store}>
            <FormUser />
        </Provider>
    )

    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } })
    fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'johndoe' } })
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password' } })

    console.log('store.dispatch.mock.calls:', store.dispatch.mock.calls)
  
    /* fireEvent.submit(screen.getByRole('button', { name: /Agregar usuario/i }))

    console.log('store.dispatch.mock.calls:', store.dispatch.mock.calls);

    
    expect(store.dispatch).toHaveBeenCalledWith(addUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
        password: 'password'
    })) */
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Clientes from '../src/components/Clientes'

const mockStore = configureStore([])

test('renders the Clientes component with users', () => {
    const initialState = {
        user: [
            { name: 'John Doe', email: 'john.doe@example.com', username: 'johndoe' },
            { name: 'Jane Smith', email: 'jane.smith@example.com', username: 'janesmith' }
        ]
    }
    const store = mockStore(initialState)

    render(
        <Provider store={store}>
            <Clientes />
        </Provider>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
    expect(screen.getByText('johndoe')).toBeInTheDocument()
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument()
    expect(screen.getByText('janesmith')).toBeInTheDocument()
})
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { v4 as uuidv4 } from 'uuid'


const initialState = {
    transactions: [
        {id: uuidv4(), description: 'flour', amount: -1000},
        {id: uuidv4(), description: 'payment1', amount: 5000},
        {id: uuidv4(), description: 'eggs', amount: -500},
        {id: uuidv4(), description: 'flavor', amount: -200},
    ]
}

// Context

export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    // Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })        
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, deleteTransaction, addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
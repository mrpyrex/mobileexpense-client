import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {

    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const amountReducer = (accumulator, currentValue) => accumulator += currentValue
    const total = amounts.reduce(amountReducer, 0).toFixed(2)
    return (
        <View>
            <Text>My Balance</Text>
            <Text>&#8358; { total }</Text>
        </View>
    )
}

export default Balance

import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {

    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const amountReducer = (accumulator, currentValue) => accumulator += currentValue
    const total = amounts.reduce(amountReducer, 0).toFixed(2)
    return (
        <View>
            <Text>Current Balance</Text>
            <Text>&#8358; { total }</Text>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    balanceContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    balanceText: {
        fontSize: 20,
        color: '#fff'
    },

    balance: {
        fontSize: 35
    }
})


  
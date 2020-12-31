import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(item => item > 0).reduce((accumulator, item) => accumulator += item).toFixed(2)
    
    const expense = amounts.filter(item => item < 0).reduce((accumulator, item) => accumulator += item).toFixed(2)
    return (
        <View>
            <Text>Income Expense</Text>
            <View>
                <Text>Income</Text>
                <Text>+ &#8358; { income }</Text>
            </View>
            <View>
                
                <Text>Expense</Text>
                <Text>- &#8358; { expense }</Text>
            </View>
        </View>
    )
}

export default IncomeExpense

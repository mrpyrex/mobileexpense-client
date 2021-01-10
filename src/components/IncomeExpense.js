import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'
import { globalStyles } from '../styles/globalStyles'

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(item => item > 0).reduce((accumulator, item) => accumulator += item)
    
    const expense = amounts.filter(item => item < 0).reduce((accumulator, item) => accumulator += item)

    
    return (
        <View>
            <Text style={globalStyles.text}>Report Overview</Text>
            <View style={styles.overviewContainer}>
                <View style={{ backgroundColor: 'red', ...styles.overview, ...globalStyles.shadow}}>
                    <Text>Income</Text>
                    <Text> + &#8358; { income }</Text>
                </View>
                <View style={{ ...styles.overview}}>
                    <Text>Expense</Text>
                    <Text> - &#8358; { Math.abs(expense) }</Text>
                </View>
            </View>
        </View>
    )
}

export default IncomeExpense


const styles = StyleSheet.create({
    overviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },

    overview: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingVertical: 35,
        borderRadius: 15,
    }
})
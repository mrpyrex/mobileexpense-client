import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'
import { globalStyles } from '../styles/globalStyles'
import Transaction from './Transaction'

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)
    
    return (
        <View>
            <Text style={globalStyles.text}>Latest Transactions</Text>
            <FlatList keyExtractor={item => item.id} data={transactions} renderItem={({ item }) => <Transaction item={ item }/> } />
        </View>
    )
}

export default TransactionList

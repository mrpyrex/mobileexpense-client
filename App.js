import React from 'react'
import { View } from 'react-native'
import AddTransaction from './src/components/AddTransaction'
import Balance from './src/components/Balance'
import Header from './src/components/Header'
import IncomeExpense from './src/components/IncomeExpense'
import TransactionList from './src/components/TransactionList'
import { GlobalProvider } from './src/context/GlobalContext'
import { globalStyles } from './src/styles/globalStyles'

const App = () => {
  return (
    <GlobalProvider>
      <View style={globalStyles.container}>
        <Header />
        <Balance />
        <IncomeExpense/>
        <AddTransaction />
        <TransactionList />
      </View>
    </GlobalProvider>
  )
}

export default App

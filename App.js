import React from 'react'
import { GlobalProvider } from './src/context/GlobalContext'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import TransactionDetailScreen from './src/screens/TransactionDetailScreen';
import TransactionListScreen from './src/screens/TransactionListScreen';
import MyTabs from './src/routes/MyTabs';


const Stack = createStackNavigator()

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={MyTabs} />
          <Stack.Screen name='Transaction List' component={TransactionListScreen} />
          <Stack.Screen name='Detail' component={TransactionDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  )
}

export default App


/* <View style={globalStyles.container}>
        <Header />
        <Balance />
        <IncomeExpense/>
        <AddTransaction />
        <TransactionList />
        </View> */

      //   <Stack.Navigator>
      //     <Stack.Screen name='Home' component={MyTabs} />
      //     <Stack.Screen name='Transaction List' component={TransactionListScreen} />
      //     <Stack.Screen name='Transaction Detail' component={TransactionDetailScreen} />
      //  </Stack.Navigator>
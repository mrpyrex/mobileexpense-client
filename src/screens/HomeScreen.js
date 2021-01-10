import React from 'react'
import { Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated from 'react-native-reanimated'
import { globalStyles } from '../styles/globalStyles'
import Balance from '../components/Balance'
import TransactionList from '../components/TransactionList'
import IncomeExpense from '../components/IncomeExpense'



const HomeScreen = ({ navigation }) => {
    return (
        <Animated.View style={{ flex: 1, paddingVertical:10, paddingHorizontal:20 }}>
            <LinearGradient colors={['#faad3d', '#efc90a', '#f1cb0c']} style={globalStyles.gradientContainer}>
                <Balance />
            </LinearGradient>
            <IncomeExpense />
            <TransactionList/>
        </Animated.View>
    )
}

export default HomeScreen



{/* <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Detail')}
        title="Go to details"
      /> */}
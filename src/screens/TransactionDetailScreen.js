import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

const TransactionDetailScreen = ({navigation}) => {
    return (
        <View style={globalStyles.container}>
            <Text>TransactionDetailScreen</Text>
            <Button onPress={() => navigation.navigate('Home')}
        title="Go back home"
      />
        </View>
    )
}

export default TransactionDetailScreen

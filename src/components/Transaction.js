import React from 'react'
import { View, Text } from 'react-native'

const Transaction = ({item}) => {
    return (
        <View>
            <Text>{item.description} &#8358;{ item.amount}</Text>
        </View>
    )
}

export default Transaction

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Transaction = ({ item }) => {
    
    const sign = item.amount < 0 ? '-' : '+'
    return (
        <View>
            <TouchableOpacity style={styles.transaction}>
                <Text>{item.description} </Text>
                <Text>{sign} &#8358;{Math.abs(item.amount)}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({
    transaction: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: 'blue',
        borderRadius:10
    }
})

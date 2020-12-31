import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My Expense Tracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'green'
    },

    text: {
        color: '#fff',
        fontSize: 25,
        textAlign:'center'
    }
})

export default Header

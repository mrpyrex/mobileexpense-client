import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction = () => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    
    const { addTransaction } = useContext(GlobalContext)
    
    const onHandleSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <View>
            <Text>Add Transaction</Text>
            <TextInput placeholder='Transaction Description' value={description}
                onChangeText={description => setDescription(description)}/>

            <TextInput placeholder='Amount' keyboardType={'numeric'} value={amount}  onChangeText={amount => setAmount(amount)}/>

            <TouchableOpacity onPress={() => alert("Added!")}>
                <Text>
                    <Icon name='plus' size={20} />Add Transaction
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTransaction



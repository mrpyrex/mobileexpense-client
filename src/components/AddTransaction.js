import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { GlobalContext } from '../context/GlobalContext'
import { v4 as uuidv4 } from 'uuid'

const AddTransaction = () => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    
    const { addTransaction } = useContext(GlobalContext)
    
    // console.log(typeof Number(amount))

    const onSubmit = () => {
        const newTransaction = {
            id: uuidv4(),
            description,
            // Add the + sign converts the sring amount to a number 
            // Also parseInt or Number conversion can be used to achieve the same thing
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

            <TouchableOpacity onPress={onSubmit}>
                <Text>
                    <Icon name='plus' size={20} />Add Transaction
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTransaction


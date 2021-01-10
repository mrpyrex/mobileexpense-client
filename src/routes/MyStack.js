import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'

import Icon from 'react-native-vector-icons/dist/AntDesign';


const Stack = createStackNavigator()

const MyStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={HomeScreen} options={{
                headerLeft: () => (
                    <Icon.Button name='menuunfold' backgroundColor='green' size={25}        onPress={() => navigation.openDrawer()}>
        
                    </Icon.Button>
                )
            }} />
        </Stack.Navigator>
    )
}

export default MyStack

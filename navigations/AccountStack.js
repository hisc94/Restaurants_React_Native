import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Accounts from '../screens/Account'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={Accounts}
                options={{title: "Cuenta"}}
            />
        </Stack.Navigator>
    )
}

import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Accounts from '../screens/account/Account'
import Login from '../screens/account/Login'
import Register from '../screens/account/Register'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={Accounts}
                options={{title: "Cuenta"}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{title: "Iniciar Sesion"}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{title: "Registrar Usuario"}}
            />
        </Stack.Navigator>
    )
}

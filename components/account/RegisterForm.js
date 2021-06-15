import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

export default function RegisterForm() {
    return (
        <View style={styles.form}>
            <Input
                containerstyle={styles.input}
                placeholder="Ingrese su email.."
            />
            <Input
                containerstyle={styles.input}
                placeholder="Ingrese su contraseña.."
                password={true}
                secureTextEntry={true}
            />
            <Input
                containerstyle={styles.input}
                placeholder="Confrima la contraseña.."
                password={true}
                secureTextEntry={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginTop:30
    },
    input:{
        width:"100%"
    }
})

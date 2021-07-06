import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Icon } from 'react-native-elements'

export default function RegisterForm() {
    const [showPassword, setshowPassword] = useState(false) //se usa para mostrar o no la contraseña
    const [showPassword2, setshowPassword2] = useState(false) //se usa para mostrar o no la contraseña
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
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline" }
                        iconStyle={styles.icon}
                        onPress={()=>setshowPassword(!showPassword)}
                    />
                }
            />
            <Input
                containerstyle={styles.input}
                placeholder="Confrima la contraseña.."
                password={true}
                secureTextEntry={!showPassword2}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword2 ? "eye-off-outline" : "eye-outline" } //if de una linea
                        iconStyle={styles.icon}
                        onPress={()=>setshowPassword2(!showPassword2)}
                    />
                }
            />
            <Button
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
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
    },
    btnContainer:{
        marginTop:20,
        width:"95%",
        alignSelf:"center"
    },
    btn:{
        backgroundColor:"#442484"
    },
    icon:{
        color:"#c1c1c1"
    }
})

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const Navigation = useNavigation();
 return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
            animation="flipInY"
                source={require('../../assets/acesso-global.png')}
                style={{width: '90%'}}
                resizeMode='contain'
            />
        </View>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.Title}>Crie, Salve sua senhas de forma fácil e rápida!</Text>
            <Text style={styles.Text}>Faça Login para começar</Text>
            <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38A69D'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38A69D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    Title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    Text:{
        color: "gray"
    },
    button:{
        marginTop: 20,
        backgroundColor: '#38A69D',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    buttonText:{
        fontSize: 18,
        color: "white", 
        fontWeight: 'bold'
    }
})
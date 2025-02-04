import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const Navigation = useNavigation();
  useEffect(() => {
    // Faz a requisição ao backend
fetch('http://192.168.56.1/coisa.php')
      .then((response) => response.json())  // Converte a resposta para JSON
      .then((json) => {
        // Exibe o alert com a mensagem recebida do backend
        Alert.alert(
          "Alerta do Backend",
          json.alertMessage,
          [
            { text: "OK", onPress: () => console.log("OK Pressionado") }
          ]
        );
      })
      .catch((error) => {
        console.error("Erro ao buscar o alerta do backend:", error);
      });
  }, []);
 
 return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem-Vindo(a)</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
            placeholder='Digite seu Email'
            style={styles.input}
            >
            </TextInput>
            <Text style={styles.title}>Senha</Text>
            <TextInput
            placeholder='Digite sua Senha'
            style={styles.input}
            ></TextInput>
            <View style={styles.ViewButton}>

            <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate('HomeTabs')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.RegisterText  }>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#38a69d"
  }, 
  containerHeader:{
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%"
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  },
  containerForm:{
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingend: '5%'
  },
  title:{
    fontSize: 20,
    marginTop: 28
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor: "#38a69d",
    width: '75%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  ViewButton:{
    alignItems: 'center'
  },
  buttonText:{
    color: "white",
    fontSize: 18,
    fontWeight: 'bold'
  },
    buttonRegister:{
      margin: 14,
      alignSelf: 'center'
  },
  RegisterText:{
    color: "gray"
  },

})
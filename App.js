import React, {useState, useRef} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
/** usndo o useState para criar estados para as variaveis base,
 * altura e area, que serão usadas para armazenar os valores dos campos de entrada
 * e o resultado do cálculo da área. Usamos useRef para criar a referência baseInputRef,
 * que será usada para manipular o campo de entrada "Base"
 */
    const [base,setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [area, setArea] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const baseInputRef = useRef();


    function CalcularArea() {
      if (base > 0 && altura > 0) {
        const areaCalculada = (parseFloat(base) * parseFloat(altura)) / 2;
        setArea(areaCalculada.toFixed(2).toString());
        setAltura('');
        setBase('');
        baseInputRef.current.clear();
        baseInputRef.current.focus(); //dá foco para o clear
        setMensagemErro('');
      //} else if(base == '' || altura == '') {
            //alert("Insira todos os dados!");
      }else{
        //setArea('');
        setMensagemErro('Insira todos os dados!')
      } 
    }
    
    return (
      <View style={styles.container}>
        <Text>Olá mamãe!</Text>
        <Text>Insira os dados abaixo para o cálculo da área do triângulo.</Text>
        <TextInput
          placeholder="Base"
          style={styles.input}//{{ heigh:40, textAlign: 'center'}}
          keyboardType={'numeric'}
          value={base}
          onChangeText={(base) => setBase(base)}
          ref={baseInputRef} //atribui a referência aqui
          />
        <TextInput
          placeholder="Altura"
          style={styles.input}//{{ height: 40, textAlign: 'center'}}
          keyboardType={'numeric'}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          />
          {mensagemErro ? <Text style={styles.TextoErro}>{mensagemErro}</Text> : null}
          <Button title="Calcular" onPress={CalcularArea} />
          <Text>{area ? `Resultado: ${area}`: ''}</Text>
          <StatusBar style="auto" />
      </View>
      );
    }
      //definindo o estilo do contêiner principal usando StyleSheet.create
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        input:{
          height:40,
          textAlign: 'center',
        },
        TextoErro:{
          color:'red',
          marginTop: 10,
        },
      });
  

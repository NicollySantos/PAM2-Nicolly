import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet,  TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import flor1 from './assets/img/flor1.jpg'; 
import flor2 from './assets/img/flor2.jpg'; 

   
export default function App() {

  return (
    <Container>
      <Imagem source={flor1}  /> 
      <Imagem source={flor2} /> 

      <TextoCinza> 
        
Olá, Hoje viemos descrever melhor como funciona nosso projeto inicial! Criamos um projeto que te dará a oportunidade de trocar o estilo de fundo da sua teloa, veja só!
  
      </TextoCinza>
      <Botaoazul onPress={() => alert('Hello, world!')}>
        <Textobotao>Pick a photo</Textobotao>
        </Botaoazul>
       
    </Container>
    

  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const TextoCinza = styled.Text`
color: '#888';
fontSize: 18px;
`;
const Botaoazul = styled.TouchableOpacity`
backgroundColor: '#9cdaef';
`;
const Textobotao = styled.Text`
fontSize: 20;
color: '#fff';
`;
const Imagem = styled.Image`
width: 305; 
height: 159;
`;

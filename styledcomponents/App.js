import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet,  TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import flor1 from './assets/img/flor1.png'; 
import flor2 from './assets/img/flor2.png'; 

   
export default function App() {

  return (
    <Container>
      
      <TextoCinza> Olá, clique abaixo para saber o nome da flor, veja só! </TextoCinza>
      <Imagem1 source={flor1}  /> 
      <Botao onPress={() => alert('Essa flor é a Rosa!')}>
        <Textobotao>Clique aqui</Textobotao>
        </Botao>

      <Imagem2 source={flor2} /> 

        <Botao onPress={() => alert('Essa flor é a Tulipa!')}>
        <Textobotao>Clique aqui</Textobotao>
        </Botao>
       
    </Container>
    

  );
}

const Container = styled.View`
  flex: 1;
  backgroundColor: #2d093e;
  align-items: center;
  justify-content: center;
`;

const TextoCinza = styled.Text`
color: #fff;
fontSize: 30px;
margin-bottom: 70px;
font-weight:bold;
`;
const Botao = styled.TouchableOpacity`
backgroundColor: #c36eec;
margin-top: 20px;
border-radius: 25px;
padding: 10px;
`;

const Textobotao = styled.Text`
fontSize: 20;
color: #fff;
`;
const Imagem1 = styled.Image`
width: 310px; 
height: 159px;
border: 4px solid #fff;

`;

const Imagem2 = styled.Image`
width: 310px; 
height: 159px;
margin-top: 30px;
border: 4px solid #fff;
`;

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const Title = styled.Text`
    color: #008B8B;
    font-size: 30px;
    text-align: center;
    margin: 15px;
`;
const Text2 = styled.Text`
    color: #000000;
    font-size: 20px;
    text-align: center;
    margin: 15px;
`;
const Img = styled.Image`
    width: 305;
    height: 240;
    alignSelft: center;
`;
const Img2 = styled.Image`
    width: 500;
    height: 500;
    alignSelft: center;
`;
const Button = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    border-radius: 20px;
    alignSelft: center;
    justify-content: center;
    background-color: #008B8B;
    margin-botton: 10;
`;

const TextButton = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
`;

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

   let openImagePickerAsync = async () => {    
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setSelectedImage({ localUri: pickerResult.uri });
   };
  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Sinto muito, mas esse compartilhamento não está disponível para a plataforma web, apenas para mobile!`);
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  };

  if (selectedImage !== null) {
    return (
      <Container>
        <Img2 source={{ uri: selectedImage.localUri }} />
        <Button onPress={openShareDialogAsync} >
          <TextButton>Compartilhar</TextButton>
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Compartilhamento de imagens!
      </Title>
      <Img source={{ uri: 'https://cdn.icon-icons.com/icons2/1263/PNG/512/1496968502-jd24_84668.png' }} />

      <Text2>
        Compartilhe suas fotos com seus amigos de uma maneira mais rápida e fácil! Basta clicar no botaão:
      </Text2>
      <Button onPress={openImagePickerAsync}>
        <TextButton>Escolher uma foto</TextButton>
      </Button>
    </Container>
  );
}
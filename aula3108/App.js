import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import snorlaxImg from './assets/img/snorlax.png' ;

const Pokemon = () => {
  return (
  <ScrollView>
      <View>
        <Text
          style ={{
            fontSize: 45,
            AlignSelf: "center",
            color: "green",
          }}
          >
            Snorlax Berrie
          </Text>
          <Image 
          source={{
            uri: "https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png",
            uri: snorlaxImg,
          }}
          style = {{
            width:200, height:210, alignSelf: "center"
          }}
          
          />
      </View>
      <TextInput
        style ={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite Aquiii!"
      />
  </ScrollView>
  );
}
export dafault Pokemon;
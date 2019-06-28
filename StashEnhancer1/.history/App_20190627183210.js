import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>Search for yarn stores:</Text>
      <View style={styles.row}>
        <Text style={styles.TextStyle}>Maximum distance:</Text>
        <TextInput  
            placeholder="enter max distance"  
            underlineColorAndroid='transparent'  
            style={styles.TextInputStyle}  
            keyboardType={'numeric'}></TextInput>
      </View>
      <Text style={styles.TextStyle}>Set alert to:</Text>
      <View>
        <Text style={styles.TextStyle}>Your distance from a yarn store:</Text>
        <TextInput  
            placeholder="enter distance"  
            underlineColorAndroid='transparent'  
            style={styles.TextInputStyle}  
            keyboardType={'numeric'}></TextInput>
      </View>
      <Button buttonStyle={styles.ButtonStyle}
        // onPress={onPressLearnMore}
        title="look for yarn"
        color="#d3ffce"
        accessibilityLabel="search for yarn stores" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 50,
  },
  TextStyle: {
    padding: 7
  },
  TextInputStyle: {  
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    padding: 7, 
  },
  ButtonStyle: {
    backgroundColor: '#d3ffce',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});

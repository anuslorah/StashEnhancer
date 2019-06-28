import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Search for yarn stores:</Text>
      <View style={styles.row}>
        <Text>Maximum distance:</Text>
        <TextInput  
            placeholder="enter max distance"  
            underlineColorAndroid='transparent'  
            style={styles.TextInputStyle}  
            keyboardType={'numeric'}></TextInput>
      </View>
      <Text>Set alert to:</Text>
      <View>
        <Text>Your distance from a yarn store:</Text>
        <TextInput  
            placeholder="enter distance"  
            underlineColorAndroid='transparent'  
            style={styles.TextInputStyle}  
            keyboardType={'numeric'}></TextInput>
      </View>
      <Button
        // onPress={onPressLearnMore}
        title="look for yarn"
        color="#e1fcff"
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
  TextInputStyle: {  
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    padding: 7  
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
});

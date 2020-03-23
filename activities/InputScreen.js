import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native'
import InputLine from '../components/InputLine.js'

class InputScreen extends Component {
    render () {
        const viewStyle = {
          alignItems: 'center',
          justifyContent: 'space-around'
        }

        const headerStyle = {
          fontSize: 32,
          fontWeight: 'bold',
        }
      return (
        <View style={viewStyle}>
          <Text style={headerStyle}>How do I compare?</Text>
          <InputLine promptText={'How big is your dick?'} postText={'inches'} />
          <InputLine promptText={'How many men are in the room?'} />
        </View>
      )
    }
  }
  
  export default InputScreen
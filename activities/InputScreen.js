import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native'

function InputLine(props) {
  return (
    <View style={{
      flexDirection: 'row',
      height: 40,
      backgroundColor: 'steelblue',
      justifyContent: 'flex-start'
    }}>
      <Text style={{
        fontSize: 20
      }}>
        What is your dick size?
      </Text>

      <TextInput
        keyboardType={'numeric'}
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20,
        }}
      />

      <Text style={{
        fontSize: 20
      }}>
        inches
      </Text>
    </View>
  )
}

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
          <InputLine />
        </View>
      )
    }
  }
  
  export default InputScreen;
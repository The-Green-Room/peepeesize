import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native'

function InputLine(props) {
  const postText = props.postText ? props.postText : ''

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 20
      }}>
        {props.promptText + "      "}
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
        {"    " + postText}
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
          <InputLine promptText={"How big is your dick?"} postText={"inches"} />
          <InputLine promptText={"How many men are in the room?"} />
        </View>
      )
    }
  }
  
  export default InputScreen;
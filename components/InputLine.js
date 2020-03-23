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
        {props.promptText + '      '}
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
        {'    ' + postText}
      </Text>
    </View>
  )
}

export default InputLine
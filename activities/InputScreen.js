import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native'
import InputLine from '../components/InputLine.js'

class InputScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dickSize: 0,
      dickCount: 0
    }
  }

  setSize(newSize) {
    this.setState((prevState) => ({
      ...prevState,
      dickSize: newSize
    }))
  }

  setCount(newCount) {
    this.setState((prevState) => ({
      ...prevState,
      dickCount: newCount
    }))
  }

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
        <InputLine
          onChangeText={this.setSize}
          promptText={'How big is your dick?'}
          postText={'inches'}
        />
        <InputLine
          onChangeText={this.setCount}
          promptText={'How many men are in the room?'}
        />

        <Text> Size: {this.state.dickSize}, Count: {this.state.dickCount}</Text>
      </View>
    )
  }
}

export default InputScreen
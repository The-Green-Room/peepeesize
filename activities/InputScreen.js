import React, {Component} from 'react';
import {Text, View } from 'react-native'
import InputLine from '../components/InputLine.js'
import styles from '../components/styles.js'


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
    return (
      <View style={styles.container}>
        <Text style={styles.header}>How do I compare?</Text>
        
        <View style={styles.body}>
          <InputLine
            onChangeText={this.setSize}
            promptText={'How big is your dick?'}
            postText={'inches'}
          />
          <InputLine
            onChangeText={this.setCount}
            promptText={'How many men are in the room?'}
          />
        </View>
        
        <Text> Size: {this.state.dickSize}, Count: {this.state.dickCount}</Text>
      </View>
    )
  }
}

export default InputScreen
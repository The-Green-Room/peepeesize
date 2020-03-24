import React from 'react';
import {Text, View, Button } from 'react-native'
import InputLine from '../components/InputLine.js'
import styles from '../components/styles.js'
import { withNavigation } from 'react-navigation'

class InputScreen extends React.Component {
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

        <Button
          title="size me up, daddy oWo" 
          onPress={() => this.props.navigation.navigate('Results')}
        />
      </View>
    )
  }
}

export default withNavigation(InputScreen)
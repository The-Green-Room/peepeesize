import * as React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../components/styles.js'

export default function HomeScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>How do I compare?</Text>
      <Button
        title="Let's find out!"
        onPress={() => navigation.navigate('Input')} 
      />
    </View>
  )
}

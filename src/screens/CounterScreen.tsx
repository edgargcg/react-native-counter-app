import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FabButton } from '../components/FabButton/FabButton';

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  const add = () => {
    setCounter(counter + 1)
  }
  
  const substract = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.containerMainText}>
        Current value: {counter}
      </Text>
      <FabButton  
        backgroundColor="#5856D6"
        text="+1"
        onPress={add}
      />
      <FabButton  
        backgroundColor="#d73070"
        position="left"   
        text="-1"
        onPress={substract}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerMainText: {
    color: '#333333',
    fontSize: 30
  }
})

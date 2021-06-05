import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1
  },
  title: {
    fontSize: 20,
    padding: 20,
    borderWidth: 5
  }
})

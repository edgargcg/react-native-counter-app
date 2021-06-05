import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionsScreen = () => {

  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.first} />
      <View style={styles.second} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 600,
    width: '100%'
  },
  first: {
    backgroundColor: 'green',
    height: 100,
    width: '50%'
  },
  second: {
    backgroundColor: 'pink'
  }
})

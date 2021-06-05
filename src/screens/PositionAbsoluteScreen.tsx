import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionAbsoluteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaMorada}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28C4D9"
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 10,
    borderColor: "white",
    position: 'absolute',
    top: 0,
    right: 0 
  },
  cajaNaranja: {
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    ...StyleSheet.absoluteFillObject
  }
})

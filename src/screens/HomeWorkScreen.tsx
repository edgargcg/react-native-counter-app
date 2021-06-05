import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28425B",
    flex: 1,
    justifyContent: "center",
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    borderColor: 'white',
    borderWidth: 10,
    // flex: 1,
    height: 100,
    width: 100,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    borderColor: 'white',
    borderWidth: 10,
    // flex: 1,
    height: 100,
    width: 100,
  },
  blueBox: {
    alignSelf: 'center',
    backgroundColor: '#28C4D9',
    borderColor: 'white',
    borderWidth: 10,
    // flex: 1,
    height: 100,
    width: 100,
  }
})

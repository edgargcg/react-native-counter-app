import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.caja1, styles.children]}>Caja 1</Text>
      <Text style={[styles.caja2, styles.children]}>Caja 2</Text>
      <Text style={[styles.caja3, styles.children]}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  caja1: {
    // flex: 1,
    backgroundColor: "red",
  },
  caja2: {
    // flex: 2,
    backgroundColor: 'green'
  },
  caja3: {
    // flex: 10,
    backgroundColor: "blue"
  },
  children: {
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
})

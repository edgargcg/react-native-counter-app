import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#dadada',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 40,
          letterSpacing: 3,
          fontWeight: '600'
        }}
      >
        Hola Mundo!
      </Text>
    </View>
  )
}

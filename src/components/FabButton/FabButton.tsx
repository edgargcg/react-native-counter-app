import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
  backgroundColor: string
  position?: 'left' | 'right'
  text: string
  onPress: () => void
}

export const FabButton = (props: Props) => {
  const { backgroundColor, onPress, position = "right", text } = props

  const positionStyle =
    position == 'left'
      ? { left: 10 }
      : { right: 10 }

  const ios = () => {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          positionStyle
        ]}
        activeOpacity={.8}
        onPress={onPress}
      >
        <View
          style={[
            styles.button,
            {
              backgroundColor: backgroundColor
            }
          ]}
        >
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const android = () => {
    return (
      <View
        style={[
          styles.container,
          positionStyle
        ]}
      >
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#666', false, 25)}
          onPress={onPress}
        >
          <View
            style={[
              styles.button,
              {
                backgroundColor: backgroundColor
              }
            ]}
          >
            <Text style={styles.text}>
              {text}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS === 'android' ? android() : ios();

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10
  },
  button: {
    alignItems: 'center',
    borderRadius: 100,
    elevation: 9,
    height: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    width: 50,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800'
  }
})

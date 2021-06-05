import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { PositionAbsoluteScreen } from './src/screens/PositionAbsoluteScreen';
import { FlexBoxScreen } from './src/screens/FlexBoxScreen';
import { HomeWorkScreen } from './src/screens/HomeWorkScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScren /> */}
      {/* <PositionAbsoluteScreen /> */}
      {/* <FlexBoxScreen /> */}
      <HomeWorkScreen />
    </SafeAreaView>
  )
}

export default App;

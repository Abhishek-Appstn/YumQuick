import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const testPage = () => {
  return (
    <SafeAreaView style={{backgroundColor:'red'}}>
    <Svg height='100' width='100'>
    <Path d="M10 10 C 30 10,25 20, 10 90 "
          stroke="green" strokeWidth='4'
          
        />
                  </Svg>
    </SafeAreaView>
  )
}

export default testPage
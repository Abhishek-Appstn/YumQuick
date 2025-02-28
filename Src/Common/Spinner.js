import { ActivityIndicator, Modal, View } from 'react-native'
import React from 'react'
import Colors from '../Global/Colors'

const Spinner = () => {
  return (
    <Modal animationType='fade' visible={true} transparent>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}>
        <ActivityIndicator size='large' color={Colors.White} />
      </View>
    </Modal>
  )
}

export default Spinner

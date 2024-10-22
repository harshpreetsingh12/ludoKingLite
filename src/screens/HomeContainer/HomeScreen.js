import React from 'react'
import { Text, View,Button} from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View >
      <Text className="text-red-700">HomeScreen</Text>
      <Button
        title="Go to Lobby"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  )
}

export default HomeScreen

import { View, Text } from 'native-base';
import React from 'react'

export default function MaterialItem(props) {
  return (
    <View bgColor={"#F7F7F7"} shadow={1} className="mt-4 rounded-xl">
      <Text className="text-lg font-bold p-4">{props.name}</Text>
    </View>
  )
}
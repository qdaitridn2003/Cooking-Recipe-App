import { View, Text } from 'react-native'
import React from 'react'

export default function GuideItem(props) {
  return (
    <View bgColor={"#F7F7F7"} shadow={4} className="mt-4 rounded-xl">
      <Text className="text-lg font-bold p-4">{`${props.step}/ ${props.length}`}</Text>
      <Text className="text-base p-4 -mt-6">{props.content}</Text>
    </View>
  )
}
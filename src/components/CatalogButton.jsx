import { Image, Pressable } from 'react-native'
import React from 'react'
import { HStack, View, Text, VStack } from 'native-base'
import { useState } from 'react'
import RecipeItem from './RecipeItem';

export default function CatalogButton(props) {

  const [isHidden, setHidden] = useState(true);

  // switch (props.type) {
  //   case "Ăn sáng": 
      
  // }

  return (
    <View className="my-3">
      <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
        <Pressable className="" onPress={()=> setHidden(!isHidden)}>
          <HStack className="justify-between mx-4 p-2">
            <Text className="font-semibold text-xl self-center">Ăn sáng</Text>
            <Image className="w-12 h-12" source={require("../../assets/images/sandwich.png")}/>
          </HStack>
        </Pressable>
      </View>
      {
        isHidden ? null :
        <VStack>
          <RecipeItem/>
          <RecipeItem/>
        </VStack>
      }
    </View>
  )
}
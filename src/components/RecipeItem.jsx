import { View, Text, HStack, VStack } from 'native-base'
import { Image,Pressable } from 'react-native';
import React, { useState } from 'react'
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RecipeItem(props) {

  const [isLike, setLike] = useState(props.like ?? false);
  const navigation = useNavigation();
  const { title, type, url, time, calories} = props.recipe;
  
  return (
    <Pressable
      className="my-4"
      onPress={() => navigation.navigate("Detail",{recipe: props.recipe})}>
      <VStack>
        <View className="relative">
          <Image className="w-full h-60 rounded-2xl" source={{ uri: url }}/>
          <HStack bgColor={"#3030304D"} className="absolute top-0 left-0 mt-3 ml-3 rounded-lg px-3 py-2">
            <MaterialCommunityIcons name="fire" size={24} color="white" />
            <Text className="text-white ml-1 font-semibold self-center">{calories}</Text>
          </HStack>
          <HStack bgColor={"#3030304D"} className="absolute bottom-0 left-0 mb-3 ml-3 rounded-lg px-3 py-2">
            <Feather name="clock" size={24} color="white" />
            <Text className="text-white ml-1 font-semibold self-center">{time}</Text>
          </HStack>
          <HStack bgColor={"#3030304D"} className="absolute bottom-0 right-0 mb-3 mr-3 rounded-lg px-3 py-2">
            <Text className="text-white ml-1 text-base font-semibold self-center">{type.name}</Text>
          </HStack>
          <Pressable
            onPress={() => setLike(!isLike)}
            style={{backgroundColor: "#3030304D"}}
            className="absolute top-0 rounded-full right-0 mt-3 mr-3 p-3">
            <HStack>
              {
                isLike ? <FontAwesome name="heart" size={24} color="#ef4444" /> :
                        <Feather name="heart" size={24} color="white"/>
              }
            </HStack>
          </Pressable>
        </View>
        <HStack className="justify-between mt-2">
          <Text color={"#303030"} className="text-xl p-2 font-bold">{title}</Text>
          <View className="self-center">
            <Feather name="more-horizontal" size={32} color="#303030" />
          </View>
        </HStack>
      </VStack>
    </Pressable>
  )
}
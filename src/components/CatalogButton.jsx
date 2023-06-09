import { Image, Pressable } from 'react-native'
import React from 'react'
import { HStack, View, Text, VStack } from 'native-base'
import { useState } from 'react'
import RecipeItem from './RecipeItem';
import { listRecipe } from '../data/dummyData';

export default function CatalogButton(props) {

  const [isHidden, setHidden] = useState(true);

  switch (props.type) {
    case "Ăn Sáng":
      return (
        <View className="my-3">
          <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
            <Pressable className="" onPress={()=> setHidden(!isHidden)}>
              <HStack className="justify-between mx-4 p-2">
                <Text className="font-semibold text-xl self-center">{props.type}</Text>
                <Image className="w-12 h-12" source={require("../../assets/images/sandwich.png")}/>
              </HStack>
            </Pressable>
          </View>
          {
            isHidden ? null :
            <VStack>
                {
                  listRecipe.map((recipe) => {
                    if (recipe.type.name === props.type)
                      return <View key={recipe.id}><RecipeItem recipe={recipe}/></View>
                  })
                }
            </VStack>
          }
        </View>
      );
    case "Khai Vị":
      return (
        <View className="my-3">
          <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
            <Pressable className="" onPress={()=> setHidden(!isHidden)}>
              <HStack className="justify-between mx-4 p-2">
                <Text className="font-semibold text-xl self-center">{props.type}</Text>
                <Image className="w-12 h-12" source={require("../../assets/images/tempura.png")}/>
              </HStack>
            </Pressable>
          </View>
          {
            isHidden ? null :
            <VStack>
               {
                  listRecipe.map((recipe) => {
                    if (recipe.type.name === props.type)
                      return <View key={recipe.id}><RecipeItem recipe={recipe}/></View>
                  })
                }
            </VStack>
          }
        </View>
      );
    case "Món Chính":
      return (
        <View className="my-3">
          <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
            <Pressable className="" onPress={()=> setHidden(!isHidden)}>
              <HStack className="justify-between mx-4 p-2">
                <Text className="font-semibold text-xl self-center">{props.type}</Text>
                <Image className="w-12 h-12" source={require("../../assets/images/hotpot.png")}/>
              </HStack>
            </Pressable>
          </View>
          {
            isHidden ? null :
            <VStack>
               {
                  listRecipe.map((recipe) => {
                    if (recipe.type.name === props.type)
                      return <View key={recipe.id}><RecipeItem recipe={recipe}/></View>
                  })
                }
            </VStack>
          }
        </View>
      );
    case "Món Ăn Kèm":
      return (
        <View className="my-3">
          <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
            <Pressable className="" onPress={()=> setHidden(!isHidden)}>
              <HStack className="justify-between mx-4 p-2">
                <Text className="font-semibold text-xl self-center">{props.type}</Text>
                <Image className="w-12 h-12" source={require("../../assets/images/hotsoup.png")}/>
              </HStack>
            </Pressable>
          </View>
          {
            isHidden ? null :
            <VStack>
               {
                  listRecipe.map((recipe) => {
                    if (recipe.type.name === props.type)
                      return <View key={recipe.id}><RecipeItem recipe={recipe}/></View>
                  })
                }
            </VStack>
          }
        </View>
      );
    case "Tráng Miệng":
      return (
        <View className="my-3">
          <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
            <Pressable className="" onPress={()=> setHidden(!isHidden)}>
              <HStack className="justify-between mx-4 p-2">
                <Text className="font-semibold text-xl self-center">{props.type}</Text>
                <Image className="w-12 h-12" source={require("../../assets/images/pannacotta.png")}/>
              </HStack>
            </Pressable>
          </View>
          {
            isHidden ? null :
            <VStack>
               {
                  listRecipe.map((recipe) => {
                    if (recipe.type.name === props.type)
                      return <View key={recipe.id}><RecipeItem recipe={recipe}/></View>
                  })
                }
            </VStack>
          }
        </View>
      );
    case "Đồ Uống":
      return (
        <View className="my-3">
          <View className="rounded-2xl" shadow={4} backgroundColor={"#F7F7F7"}>
            <Pressable className="" onPress={()=> setHidden(!isHidden)}>
              <HStack className="justify-between mx-4 p-2">
                <Text className="font-semibold text-xl self-center">{props.type}</Text>
                <Image className="w-12 h-12" source={require("../../assets/images/bubbletea.png")}/>
              </HStack>
            </Pressable>
          </View>
          {
            isHidden ? null :
            <VStack>
               {
                  listRecipe.map((recipe) => {
                    if (recipe.type.name === props.type)
                      return <View key={recipe.id}><RecipeItem recipe={recipe}/></View>
                  })
                }
            </VStack>
          }
        </View>
      );
    default: break;
  }
}
import { HStack, Input, ScrollView, Text, VStack, View } from 'native-base'
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import React from 'react'
import { Container } from '../components/StylesComponent';
import RecipeItem from '../components/RecipeItem';
import StackNavigation from '../navigations/StackNavigation';
import { listRecipe } from '../data/dummyData';

function MainScreen() {
  return (
    <Container>
      <HStack className="justify-between">
        <VStack>
          <Text className="font-semibold text-xl">Xin chào, <Text className="text-red-500">Bạn</Text></Text>
          <Text className="mt-1 text-base">Bạn muốn nấu món gì ?</Text>
        </VStack>
        <View className="self-center">
          <MaterialIcons name="account-circle" size={52} color="#a5a8b6" />
        </View>
      </HStack>
      <View className="mt-3">
        <Input size="lg" placeholder="Tìm công thức"
          shadow={1}
          borderRadius={16}
          backgroundColor={"#D9D9D9"}
          focusOutlineColor={"red.400"}
          InputLeftElement={<EvilIcons style={{marginLeft: 4}} name="search" size={36} color="black" />} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          listRecipe.map(recipe => <View key={recipe.id}><RecipeItem recipe={recipe}/></View>)
        }
      </ScrollView>
    </Container>
  )
}

export default function PopularScreen() {
  return (
    <StackNavigation screen={MainScreen}/>
  )
}
import { View, Text, Input, ScrollView } from 'native-base'
import React from 'react'
import { Container } from '../components/StylesComponent';
import { EvilIcons } from '@expo/vector-icons';
import { listRecipe } from '../data/dummyData';
import RecipeItem from '../components/RecipeItem';

export default function FavoriteScreen() {
  return (
    <Container>
      <Text className="text-center text-2xl font-bold">Yêu Thích</Text>
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
          listRecipe.map(recipe => {
            if (recipe.id % 2 != 0)
              return <View key={recipe.id}><RecipeItem like={true} recipe={recipe} /></View>
          })
        }
      </ScrollView>
    </Container>
  )
}
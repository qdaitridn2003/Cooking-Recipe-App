import React from 'react'
import { ScrollView, View, Text, HStack, VStack } from 'native-base'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Container } from '../components/StylesComponent';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Image, Pressable } from 'react-native';
import MaterialItem from '../components/MaterialItem';
import GuideItem  from '../components/GuideItem';

export default function DetailRecipeScreen() {

  const navigation = useNavigation();
  const { params } = useRoute();
  const { recipe } = params;
  const { url, calories, time, title, material, guide } = recipe;
  const guideSize = guide?.length;

    console.log(guideSize);

    return (
      <Container className="relative">
        <HStack className="justify-between" shadow={4}>
            <Pressable onPress={()=> navigation.goBack()}>
              <Ionicons name="arrow-back" size={36} color="black" />
            </Pressable>
            <Feather name="more-horizontal" size={36} color="black"/>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack className="mt-6 mb-3">
            <Text className="font-bold text-3xl">{title}</Text>
            <Image className="w-full h-64 mt-4 rounded-2xl" source={{ uri: url }} />
            <HStack
              backgroundColor={"#F7F7F7"} shadow={4}
              className="mt-6 p-3 rounded-lg justify-between mx-3">
              <VStack>
                <Text className="text-2xl font-bold" color={"#E23E3E"}>{calories}</Text>
                <Text className="text-base">Lượng Kcal</Text>
              </VStack>
              <VStack>
                <Text className="text-2xl font-bold" color={"#E23E3E"}>{time}</Text>
                <Text className="text-base">Thời Gian Nấu</Text>
              </VStack>
            </HStack>
            <Text className="mt-5 text-xl font-bold">Nguyên Liệu</Text>
            {
              material.map((item)=> <View key={item.id}><MaterialItem name={item.name}/></View>)
            }
            <Text className="mt-5 text-xl font-bold">Hướng Dẫn</Text>
            { 
              guide?.map((item, index) => <View key={index}><GuideItem step={item.step} length={guideSize} content={item.content}/></View>)
            }
          </VStack>
        </ScrollView>
      </Container>
    )
}
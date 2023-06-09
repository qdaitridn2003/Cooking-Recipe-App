import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container } from '../components/StylesComponent';
import CatalogButton from '../components/CatalogButton';
import StackNavigation from '../navigations/StackNavigation';
import { listType } from '../data/dummyData';

function MainScreen() {
  return (
    <Container>
      <Text className="text-center text-2xl font-bold">Danh Mục</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          listType.map(type => <View key={type.id}><CatalogButton type={type.name}/></View>)
        }
      </ScrollView>
    </Container>
  )
}

export default function CatalogScreen() {
  return (
    <StackNavigation screen={MainScreen}/>
  )
}
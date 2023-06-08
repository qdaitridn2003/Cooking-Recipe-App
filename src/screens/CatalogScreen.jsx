import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container } from '../components/StylesComponent';
import CatalogButton from '../components/CatalogButton';


export default function CatalogScreen() {
  return (
    <Container>
      <Text className="text-center text-2xl font-bold">Danh Mục</Text>
      <ScrollView>
        <CatalogButton/>
        <CatalogButton/>
        <CatalogButton/>
        <CatalogButton/>
        <CatalogButton/>
        <CatalogButton/>
        <CatalogButton/>
        <CatalogButton/>
      </ScrollView>
    </Container>
  )
}
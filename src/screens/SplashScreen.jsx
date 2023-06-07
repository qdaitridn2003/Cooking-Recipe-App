import React from 'react'
import { Image } from 'react-native';
import { Container } from '../components/StylesComponent'

export default function SplashScreen() {
  return (
      <Container>
      <Image
        className="w-full h-full"
        source={require("../../assets/images/splashscreen.gif")}
      />
      </Container>
  )
}
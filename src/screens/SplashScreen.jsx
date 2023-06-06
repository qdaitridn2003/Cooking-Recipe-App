import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

export default function SplashScreen() {
  return (
      <SafeAreaView>
        <Image className="w-full h-screen" source={require("../../assets/images/splashscreen.gif") }/>
      </SafeAreaView>
  )
}
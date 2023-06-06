import { Box, Button, Text, HStack} from 'native-base'
import React from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView className="relative flex-1">
      <Box>
        <Image className="w-full h-screen absolute" source={require("../../assets/images/welcomebg.jpg")}/>
      </Box>
      <Box className="self-center top-16 absolute">
        <Text
          shadow={4}
          className="text-center text-white font-bold text-5xl">Team {"\n"}Cook</Text>
        <Text
          shadow={4}
          className="text-xl text-white mt-4">Tổng hợp các công thức nấu ăn</Text>
      </Box>
      <Button
        onPress={()=> handleGoHome()}
        shadow={4}
        className="bg-red-500 rounded-xl w-2/4 px-6 py-4 self-center absolute bottom-16">
        <HStack>
          <Text className="self-center mr-2 text-base font-bold text-white">Bắt đầu thôi</Text>
          <MaterialIcons name="navigate-next" size={28} color="white" />
        </HStack>
      </Button>
    </SafeAreaView>
  )
}
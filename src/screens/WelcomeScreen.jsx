import { Box, Button, Text, HStack, Image } from 'native-base'
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate("Home");
  }

  return (
    <Box className="relative flex-1">
      <Image className="w-full h-full absolute" alt="WelcomeBg" source={require("../../assets/images/welcomebg.jpg")} />
        <Box className="top-16 absolute self-center">
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
    </Box>
  )
}
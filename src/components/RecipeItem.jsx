import { View, Text, HStack, VStack } from 'native-base'
import { Image,Pressable } from 'react-native';
import React, { useState } from 'react'
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RecipeItem() {

  const [isLike, setLike] = useState(false);
  const navigation = useNavigation();
  const imgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC";

  return (
    <Pressable
      className="mt-8"
      onPress={() => navigation.navigate("Detail")}>
      <VStack>
        <View className="relative">
          <Image className="w-full h-60 rounded-2xl" source={{ uri: imgUrl }}/>
          <HStack bgColor={"#3030304D"} className="absolute top-0 left-0 mt-3 ml-3 rounded-lg px-3 py-2">
            <MaterialCommunityIcons name="fire" size={24} color="white" />
            <Text className="text-white ml-1 font-semibold self-center">0 KCal</Text>
          </HStack>
          <HStack bgColor={"#3030304D"} className="absolute bottom-0 left-0 mb-3 ml-3 rounded-lg px-3 py-2">
            <Feather name="clock" size={24} color="white" />
            <Text className="text-white ml-1 font-semibold self-center">0 Ph</Text>
          </HStack>
          <HStack bgColor={"#3030304D"} className="absolute bottom-0 right-0 mb-3 mr-3 rounded-lg px-3 py-2">
            <Text className="text-white ml-1 text-base font-semibold self-center">Ăn sáng</Text>
          </HStack>
          <Pressable
            onPress={() => setLike(!isLike)}
            style={{backgroundColor: "#3030304D"}}
            className="absolute top-0 rounded-full right-0 mt-3 mr-3 p-3">
            <HStack>
              {
                isLike ? <FontAwesome name="heart" size={24} color="#ef4444" /> :
                        <Feather name="heart" size={24} color="white"/>
              }
            </HStack>
          </Pressable>
        </View>
        <HStack className="justify-between my-2">
          <Text color={"#303030"} className="text-xl font-bold">Recipe Name</Text>
          <View className="self-center">
            <Feather name="more-horizontal" size={32} color="#303030" />
          </View>
        </HStack>
      </VStack>
    </Pressable>
  )
}
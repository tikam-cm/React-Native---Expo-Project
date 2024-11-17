import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Index() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  
  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className={"w-full justify-center items-center h-full px-4"}>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            className={"max-w-[380px] w-full h-[300]"}
            resizeMode="contain"
          />
          <View className={"relative mt-5"}>
            <Text className={"font-bold text-white text-center text-3xl"}>
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-100">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="w-[136] h-[15] absolute -bottom-2 -right-8"
            />
          </View>
          <Text
            className={"text-gray-100 text-sm mt-7 text-center font-pregular"}
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles={"w-full mt-7"}
            textStyles={{}}
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

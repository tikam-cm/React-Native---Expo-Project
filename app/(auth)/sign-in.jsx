import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import React, { useState } from "react";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { UserService } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    const { email, password } = form;
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);

    try {
      await UserService.signIn(email, password);
      // set global context
      const result = await UserService.getCurrentUser();
      setUser(result);
      setIsLogged(true);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className={"bg-primary min-h-[86vh]"}>
      <View className={"w-full justify-center px-4 py-6 h-full"}>
        <Image
          source={images.logo}
          className={"w-[115px] h-[35]"}
          resizeMode="contain"
        />
        <Text
          className={"text-white text-2xl text-semibold font-psemibold mt-10"}
        >
          Sign in to Aora
        </Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={"mt-7"}
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={"mt-7"}
          keyboardType="email-address"
        />
        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles={"mt-8"}
          isLoading={isSubmitting}
        />

        <View className={"justify-center flex-row gap-2 pt-5"}>
          <Text className={"text-gray-100 text-lg font-pregular"}>
            Don't have an Account?
          </Text>
          <Link
            href="/sign-up"
            className={"font-psemibold text-secondary text-lg"}
          >
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
      className={`bg-secondary justify-center rounded-xl items-center min-h-[62] ${containerStyles}`}
    >
      <Text className={"text-primary font-psemibold text-lg"}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";

type Props = {
  title: string;
  callback?: () => void;
  callbackWithData?: (newTitle: string) => void;
};

export const CustomButton: FC<Props> = ({ title, callback }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const buttonWrapperOtherStyles = {
    borderColor:
      title === "All" ||
      title === "Completed" ||
      title === "Active" ||
      title === "Add"
        ? "blue"
        : title === "Edit" || title === "Save"
        ? "white"
        : "white",
    backgroundColor: "#fff",
    borderWidth: 1,
  };

  const buttonText = {
    color:
      title === "All" ||
      title === "Completed" ||
      title === "Active" ||
      title === "Add"
        ? "blue"
        : title === "Edit" || title === "Save"
        ? "green"
        : "red",
  };

  return (
    <TouchableOpacity
      onPress={callback}
      style={[styles.buttonWrapper, buttonWrapperOtherStyles]}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Text style={[styles.buttonText, buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 3,
    backgroundColor: "#d70a0a",
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#000",
  },
});

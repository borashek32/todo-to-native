import {StyleSheet, Text, TouchableOpacity} from "react-native"
import React, {FC, useState} from "react"


type Props = {
  title: string
  callback?: () => void
  callbackWithData?: (newTitle: string) => void
}

export const CustomButton: FC<Props> = ({ title, callback }) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true)

  const handleBlur = () => setIsFocused(false)

  const buttonWrapperOtherStyles = {
    borderColor: (title === 'All' || title === "Completed" || title === "Active") ? 'blue' : (title === 'Add' || title === 'Edit' || title === 'Save') ? 'green' : 'red',
    backgroundColor: (title === 'All' || title === "Completed" || title === "Active") ? '#98e8ff' : (title === 'Add' || title === 'Edit' || title === 'Save') ? '#aeff98' : '#ff9a9a',
    borderWidth: 1
  }

  const buttonText = {
    color: '#000'
  }


  return (
    <TouchableOpacity
      onPress={callback}
      style={[styles.buttonWrapper, buttonWrapperOtherStyles]}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Text style={[styles.buttonText, buttonText]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 4,
    backgroundColor: '#d70a0a',
    padding: 10
  },
  buttonText: {
    color: '#000'
  }
})
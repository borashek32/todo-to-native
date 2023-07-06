import React, {useState} from "react"
import {Button, StyleSheet, TextInput, View} from "react-native";
import {CustomButton} from "./../../../common/components/CustomButtons/CustomButton";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {

  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const addItemHandler = () => {
    if (title.trim() !== "") {
      addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        defaultValue={title}
        placeholder="Type here to add an item"
        onChangeText={(newTitle) => setTitle(newTitle)}
      />

      <CustomButton
        callback={addItemHandler}
        title={'Add'}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 20,
    justifyContent: "space-between"
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#c4afaf',
    padding: 10,
    fontSize: 16,
    flexGrow: 1
  }
})
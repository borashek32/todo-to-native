import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CustomButton } from "./../../../common/components/CustomButtons/CustomButton";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm = React.memo(function ({
  addItem,
  disabled = false,
}: AddItemFormPropsType) {
  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const addItemHandler = () => {
    if (title.trim() !== "") {
      addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const onFocusHandler = () => {
    if (error !== null) {
      setError(null);
    }
  };

  const onBlurHandler = () => {
    if (title.trim() === "") {
      setError(null);
    }
  };

  return (
    <View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          defaultValue={title}
          placeholder="Type here to add an item"
          onChangeText={(newTitle) => setTitle(newTitle)}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />

        <CustomButton callback={addItemHandler} title={"Add"} />
      </View>
      <Text style={styles.inputError}>{error || null}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#c4afaf",
    padding: 10,
    fontSize: 16,
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  inputError: {
    color: "red",
  },
});

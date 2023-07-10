import React, { FC, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CustomButton } from "./../../../common/components/CustomButtons/CustomButton";

type Props = {
  value: string;
  onChange: (title: string) => void;
};

export const EditableSpan: FC<Props> = ({ value, onChange }) => {
  let [title, setTitle] = useState(value);

  let [editMode, setEditMode] = useState(false);

  const changeTitle = () => {
    setTitle(title);
    onChange(title);
    setEditMode(false);
  };

  return (
    <View>
      {editMode ? (
        <View style={styles.editableSpanWrapper}>
          <TextInput
            style={styles.inputText}
            onChangeText={(title) => setTitle(title)}
            value={title}
            autoFocus
          />

          <CustomButton
            title={editMode ? "Save" : "Edit"}
            callback={changeTitle}
          />
        </View>
      ) : (
        <View style={styles.editableSpanWrapper}>
          <Text style={styles.taskText}>{value}</Text>

          <CustomButton
            title={editMode ? "Save" : "Edit"}
            callback={() => setEditMode(true)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  editableSpanWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#c4afaf",
    padding: 10,
    fontSize: 16,
    flexGrow: 1,
  },
  taskText: {
    fontSize: 20,
  },
});

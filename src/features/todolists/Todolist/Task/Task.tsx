import React, { useState } from "react";
import { TaskType } from "./../../../../features/todolists/Todolist/tasks.types";
import { StyleSheet, View } from "react-native";
import { CustomButton } from "../../../../common/components/CustomButtons/CustomButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { EditableSpan } from "./../../../../common/components/EditableSpan/EditableSpan";
import { useTask } from "./../../../../features/todolists/Todolist/Task/hooks/useTask";
import { TaskStatuses } from "./../../../../common/enums/common.enums";

type TaskPropsType = {
  task: TaskType;
  todolistId: string;
};

export const Task = React.memo((props: TaskPropsType) => {
  const { removeTask, changeTaskTitle, changeStatus } = useTask();
  const [checked, setChecked] = useState(
    props.task.status === TaskStatuses.Completed,
  );

  const handleChange = () => {
    setChecked(!checked);
    changeStatus(props.todolistId, props.task.id, !checked);
  };

  return (
    <View key={props.task.id} style={styles.taskWrapper}>
      <View style={styles.taskTextWrapper}>
        <View style={styles.checkboxWrapper}>
          <BouncyCheckbox
            size={25}
            isChecked={checked}
            fillColor="blue"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#000" }}
            innerIconStyle={{ borderWidth: 1 }}
            onPress={handleChange}
          />
        </View>

        <View style={styles.editableSpanWrapper}>
          <EditableSpan
            value={props.task.title}
            onChange={(value) =>
              changeTaskTitle(props.task.id, props.todolistId, value)
            }
          />
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <CustomButton
          title={"X"}
          callback={() => removeTask(props.task.id, props.todolistId)}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  editableSpanWrapper: {},
  taskTextWrapper: {
    flexDirection: "row",
  },
  buttonsWrapper: {},
});

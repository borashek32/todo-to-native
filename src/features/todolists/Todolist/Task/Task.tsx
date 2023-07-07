import React, {useCallback, useState} from "react"
import {TaskType} from "./../../../../features/todolists/Todolist/tasks.types"
import {TaskStatuses} from "./../../../../common/enums/common.enums"
import {tasksThunks} from "./../../../../features/todolists/Todolist/tasks.slice"
import {useAppDispatch} from "./../../../../common/hooks/use-app-dispatch"
import {StyleSheet, View} from "react-native"
import {CustomButton} from "../../../../common/components/CustomButtons/CustomButton"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import {EditableSpan} from "./../../../../common/components/EditableSpan/EditableSpan";


type TaskPropsType = {
  task: TaskType
  todolistId: string
}

export const Task = React.memo((props: TaskPropsType) => {

  const dispatch = useAppDispatch()

  const removeTask = useCallback(() => {
    dispatch(tasksThunks.removeTask({ taskId: props.task.id, todolistId: props.todolistId }))
  }, [props.task.id, props.todolistId])

  const changeTaskTitle = useCallback( (title: string) => {
    dispatch(tasksThunks.updateTask({ todolistId: props.todolistId, domainModel: { title: title }, taskId: props.task.id}))
  }, [props.task.id, props.todolistId])

  // checkbox
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
    changeStatus(!checked)
  }

  const changeStatus = useCallback( (newIsDoneValue: boolean) => {
    dispatch(tasksThunks.updateTask({ todolistId: props.todolistId, domainModel: { status: newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New }, taskId: props.task.id}))
  }, [props.task.id, props.todolistId])

  return (
    <View key={props.task.id} style={styles.taskWrapper}>
      <View style={styles.taskTextWrapper}>
        <BouncyCheckbox
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#000" }}
          innerIconStyle={{ borderWidth: 1 }}
          onPress={handleChange}
        />

        <EditableSpan
          value={props.task.title}
          onChange={changeTaskTitle}
        />
      </View>

      <View style={styles.buttonsWrapper}>
        <CustomButton title={'Del'} callback={removeTask} />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskTextWrapper: {
    flexDirection: 'row'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 20
  }
})
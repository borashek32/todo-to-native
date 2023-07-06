import React, {useCallback, useEffect} from "react"
import {AddItemForm} from "./../../../common/components/AddItemForm/AddItemForm"
import {Task} from "./../../../features/todolists/Todolist/Task/Task"
import {useAppDispatch} from "./../../../common/hooks/use-app-dispatch"
import {FilterValuesType, TodolistDomainType} from "./../../../features/todolists/todolists.types"
import {TaskType} from "./../../../features/todolists/Todolist/tasks.types"
import {tasksThunks} from "./../../../features/todolists/Todolist/tasks.slice"
import {TaskStatuses} from "./../../../common/enums/common.enums"
import {todolistsActions, todolistsThunks} from "./../../../features/todolists/todolists.slice"
import {StyleSheet, Text, View} from "react-native"
import {Title} from "./../../../features/todolists/Todolist/Title/Title"
import {CustomButton} from "../../../common/components/CustomButtons/CustomButton"


type PropsType = {
  todolist: TodolistDomainType
  tasks: Array<TaskType>
  demo?: boolean
}

export const Todolist = React.memo(function ({demo = false, ...props}: PropsType) {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (demo) {
      return
    }
    dispatch(tasksThunks.fetchTasks(props.todolist.id))
  }, [])

  const addTask = useCallback((newValue: string) => {
    dispatch(tasksThunks.addTask({title: newValue, todolistId: props.todolist.id}))
  }, [props.todolist.id])

  const removeTodolist = useCallback(() => {
    dispatch(todolistsThunks.removeTodolist(props.todolist.id))
  }, [])

  const changeFilter = useCallback((value: FilterValuesType) => {
    dispatch(todolistsActions.changeTodolistFilter({id: props.todolist.id, filter: value}))
  }, [props.todolist.id])

  let tasksForTodolist = props.tasks

  if (props.todolist.filter === "active") {
    tasksForTodolist = props.tasks.filter((t) => t.status === TaskStatuses.New)
  }
  if (props.todolist.filter === "completed") {
    tasksForTodolist = props.tasks.filter((t) => t.status === TaskStatuses.Completed)
  }

  return (
    <View style={styles.todoWrapper}>
      <Title
        todoId={props.todolist.id}
        todoTitle={props.todolist.title}
        callback={removeTodolist}
      />

      <AddItemForm
        addItem={addTask}
        disabled={props.todolist.entityStatus === "loading"}
      />

      <View style={styles.tasksWrapper}>
        {tasksForTodolist.map((t) => (
          <Task
            key={t.id}
            task={t}
            todolistId={props.todolist.id}
          />
        ))}
      </View>

      <View style={styles.todoButtonsWrapper}>
        <CustomButton
          callback={() => changeFilter('all')}
          title={'All'}
        />
        <CustomButton
          callback={() => changeFilter('active')}
          title={'Active'}
        />
        <CustomButton
          callback={() => changeFilter('completed')}
          title={'Completed'}
        />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  todoWrapper: {
    width: '100%',
    padding: 20,
    borderColor: '#c4afaf',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#fff'
  },
  tasksWrapper: {
    marginTop: 20,
    flexDirection: "column",
    rowGap: 20
  },
  todoButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  }
})
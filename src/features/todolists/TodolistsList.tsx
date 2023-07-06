import React, {useCallback, useEffect} from "react"
import {AddItemForm} from "./../../common/components/AddItemForm/AddItemForm"
import {Todolist} from "./../../features/todolists/Todolist/Todolist"
import {useAppDispatch} from "./../../common/hooks/use-app-dispatch"
import {useAppSelector} from "./../../common/hooks/use-app-selector"
import {selectTasks} from "./../../features/todolists/Todolist/tasks.selectors"
import {selectIsLoggedIn} from "./../../features/auth/auth.selectors"
import {selectTodolists} from "./../../features/todolists/todolists.selectors"
import {todolistsThunks} from "./../../features/todolists/todolists.slice"
import {ScrollView, StyleSheet, Text, View} from "react-native";


type PropsType = {
  demo?: boolean
}

export const TodolistsList: React.FC<PropsType> = ({ demo = false }) => {

  const todolists = useAppSelector(selectTodolists)
  const tasks = useAppSelector(selectTasks)
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (demo || !isLoggedIn) {
      return
    }
    dispatch(todolistsThunks.fetchTodolists())
  }, [])


  const addTodolist = useCallback((title: string) => {
      dispatch(todolistsThunks.addTodolist(title))
    },
    [dispatch]
  )

  // if (!isLoggedIn) {
  //   return <Navigate to={"/login"} />
  // }

  return (
    <ScrollView>
      <View style={styles.addItemWrapper}>
        <AddItemForm addItem={addTodolist} />
      </View>
      <View style={styles.wrapper}>
        {todolists.map((tl) => {
          let allTodolistTasks = tasks[tl.id]

          return (
            <View key={tl.id}>
              <View>
                <Todolist
                  todolist={tl}
                  tasks={allTodolistTasks}
                  demo={demo}
                />
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  addItemWrapper: {
    marginBottom: 40
  },
  wrapper: {
    flexDirection: 'column',
    gap: 50
  }
})
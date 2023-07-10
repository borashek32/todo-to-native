import React, {useEffect} from "react"
import {TodolistsList} from "./../features/todolists/TodolistsList"
import {ErrorSnackbar} from "./../common/components/ErrorSnackbar/ErrorSnackbar"
import {useDispatch} from "react-redux"
import {appThunks} from "./app.slice"
import {useAppSelector} from "./../common/hooks/use-app-selector"
import {selectAppIsInitialized, selectStatus} from "./../app/app.selectors"
import {ScrollView, StyleSheet, Text, View} from "react-native"
import {Nav} from "./../common/components/Nav/Nav";

type PropsType = {
  demo?: boolean
}

function Main({ demo = false }: PropsType) {

  const status = useAppSelector(selectStatus)
  const isInitialized = useAppSelector(selectAppIsInitialized)

  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(appThunks.initializeApp())
  }, [])

  if (!isInitialized) {
    return (
      <View style={styles.loading}>

      </View>
    )
  }

  return (
      <ScrollView>
        <View>
          <Nav />
          <ErrorSnackbar />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Task Manager</Text>
          </View>
          <View style={styles.layout}>
            <TodolistsList />
          </View>
          {status === "loading" && <Text>Loading...</Text>}
        </View>
      </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({
  loading: {
    top: "30%",
    textAlign: "center",
    width: "100%"
  },
  layout: {
    padding: 20
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  title: {
    fontSize: 36
  }
})

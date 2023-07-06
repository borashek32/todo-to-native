import {StyleSheet, View} from "react-native"
import React, {FC} from "react"
import {CustomButton} from "../../../../common/components/CustomButtons/CustomButton"
import {EditableSpan} from "./../../../../common/components/EditableSpan/EditableSpan"
import {todolistsThunks} from "./../../../../features/todolists/todolists.slice";
import {useAppDispatch} from "./../../../../common/hooks/use-app-dispatch";


type Props = {
  todoId: string
  todoTitle: string
  callback: () => void
}

export const Title: FC<Props> = ({ todoId, todoTitle,  callback }) => {

  const dispatch = useAppDispatch()

  const changeTodolistTitle = (title: string) => {
    dispatch(todolistsThunks.changeTodolistTitle({id: todoId, title}))
  }

  return (
    <View style={styles.todoTitleWrapper}>
      <EditableSpan
        value={todoTitle}
        onChange={changeTodolistTitle}
      />

      <CustomButton
        title={'Del'}
        callback={callback}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  todoTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center'
  },
  todoTitle: {
    fontSize: 30,
    fontWeight: '700'
  }
})
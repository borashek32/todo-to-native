import {StyleSheet, View} from "react-native"
import React, {FC} from "react"
import {CustomButton} from "../../../../common/components/CustomButtons/CustomButton"
import {EditableSpan} from "./../../../../common/components/EditableSpan/EditableSpan"
import {useTitle} from "./../../../../features/todolists/Todolist/Title/hooks/useTitle"


type Props = {
  todoId: string
  todoTitle: string
  callback: () => void
}

export const Title: FC<Props> = ({ todoId, todoTitle,  callback }) => {

  const { changeTodolistTitle } = useTitle()

  return (
    <View style={styles.todoTitleWrapper}>
      <EditableSpan
        value={todoTitle}
        onChange={(title) => changeTodolistTitle(todoId, title)}
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

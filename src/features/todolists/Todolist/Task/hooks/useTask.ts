import {useAppDispatch} from "./../../../../../common/hooks/use-app-dispatch"
import {tasksThunks} from "./../../../../../features/todolists/Todolist/tasks.slice"
import {TaskStatuses} from "./../../../../../common/enums/common.enums"


export const useTask = () => {

  const dispatch = useAppDispatch()

  const removeTask = (taskId: string, todolistId: string) =>
    dispatch(tasksThunks.removeTask({taskId, todolistId}))

  const changeTaskTitle = (taskId: string, todolistId: string, title: string) =>
    dispatch(tasksThunks.updateTask({ todolistId, domainModel: { title: title }, taskId }))

  const changeStatus = (todolistId: string, taskId: string, newIsDoneValue: boolean) =>
    dispatch(tasksThunks.updateTask({
      todolistId,
      domainModel: { status: newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New },
      taskId
    }))

  return {
    removeTask,
    changeTaskTitle,
    changeStatus
  }
}

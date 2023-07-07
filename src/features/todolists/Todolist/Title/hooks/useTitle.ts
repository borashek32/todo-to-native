import { useAppDispatch } from "./../../../../../common/hooks/use-app-dispatch"
import { todolistsThunks } from "./../../../../../features/todolists/todolists.slice"


export const useTitle = () => {

  const dispatch = useAppDispatch()

  const changeTodolistTitle = (id: string, title: string) => {
    dispatch(todolistsThunks.changeTodolistTitle({ id, title }))
  }

  return {
    changeTodolistTitle
  }
}

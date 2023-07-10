import { useAppSelector } from "./../../../common/hooks/use-app-selector";
import { selectTodolists } from "./../../../features/todolists/todolists.selectors";
import { selectTasks } from "./../../../features/todolists/Todolist/tasks.selectors";
import { selectIsLoggedIn } from "./../../../features/auth/auth.selectors";
import { useAppDispatch } from "./../../../common/hooks/use-app-dispatch";
import { todolistsThunks } from "./../../../features/todolists/todolists.slice";

export const useTodolistsList = () => {
  const dispatch = useAppDispatch();

  const todolists = useAppSelector(selectTodolists);
  const tasks = useAppSelector(selectTasks);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const fetchTodolists = () => dispatch(todolistsThunks.fetchTodolists());

  const addTodolist = (title: string) =>
    dispatch(todolistsThunks.addTodolist(title));

  return {
    todolists,
    tasks,
    isLoggedIn,
    fetchTodolists,
    addTodolist,
  };
};

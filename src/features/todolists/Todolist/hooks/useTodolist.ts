import { useAppDispatch } from "./../../../../common/hooks/use-app-dispatch";
import { tasksThunks } from "./../../../../features/todolists/Todolist/tasks.slice";
import {
  todolistsActions,
  todolistsThunks,
} from "./../../../../features/todolists/todolists.slice";
import { FilterValuesType } from "./../../../../features/todolists/todolists.types";

export const useTodolist = () => {
  const dispatch = useAppDispatch();

  const getTasks = (todolistId: string) =>
    dispatch(tasksThunks.fetchTasks(todolistId));

  const addTask = (todolistId: string, newValue: string) =>
    dispatch(tasksThunks.addTask({ title: newValue, todolistId }));

  const removeTodolist = (todolistId: string) =>
    dispatch(todolistsThunks.removeTodolist(todolistId));

  const changeFilter = (id: string, value: FilterValuesType) =>
    dispatch(todolistsActions.changeTodolistFilter({ id, filter: value }));

  return {
    getTasks,
    addTask,
    removeTodolist,
    changeFilter,
  };
};

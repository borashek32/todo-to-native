import React, { useEffect } from "react";
import { AddItemForm } from "./../../../common/components/AddItemForm/AddItemForm";
import { Task } from "./../../../features/todolists/Todolist/Task/Task";
import { TodolistDomainType } from "./../../../features/todolists/todolists.types";
import { TaskType } from "./../../../features/todolists/Todolist/tasks.types";
import { TaskStatuses } from "./../../../common/enums/common.enums";
import { StyleSheet, View } from "react-native";
import { Title } from "./../../../features/todolists/Todolist/Title/Title";
import { CustomButton } from "../../../common/components/CustomButtons/CustomButton";
import { useTodolist } from "./hooks/useTodolist";

type PropsType = {
  todolist: TodolistDomainType;
  tasks: TaskType[];
  demo?: boolean;
};

export const Todolist = React.memo(function ({
  demo = false,
  ...props
}: PropsType) {
  const { getTasks, addTask, removeTodolist, changeFilter } = useTodolist();

  useEffect(() => {
    if (demo) {
      return;
    }
    getTasks(props.todolist.id);
  }, []);

  let tasksForTodolist = props.tasks;

  if (props.todolist.filter === "active") {
    tasksForTodolist = props.tasks.filter(
      (task) => task.status === TaskStatuses.New,
    );
  }
  if (props.todolist.filter === "completed") {
    tasksForTodolist = props.tasks.filter(
      (task) => task.status === TaskStatuses.Completed,
    );
  }

  return (
    <View style={styles.todoWrapper}>
      <Title
        todoId={props.todolist.id}
        todoTitle={props.todolist.title}
        callback={() => removeTodolist(props.todolist.id)}
      />

      <AddItemForm
        addItem={(title) => addTask(props.todolist.id, title)}
        disabled={props.todolist.entityStatus === "loading"}
      />

      <View style={styles.tasksWrapper}>
        {tasksForTodolist.map((t) => (
          <Task key={t.id} task={t} todolistId={props.todolist.id} />
        ))}
      </View>

      <View style={styles.todoButtonsWrapper}>
        <CustomButton
          callback={() => changeFilter(props.todolist.id, "all")}
          title={"All"}
        />
        <CustomButton
          callback={() => changeFilter(props.todolist.id, "active")}
          title={"Active"}
        />
        <CustomButton
          callback={() => changeFilter(props.todolist.id, "completed")}
          title={"Completed"}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  todoWrapper: {
    width: "100%",
    padding: 20,
    borderColor: "#c4afaf",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  tasksWrapper: {
    flexDirection: "column",
    rowGap: 20,
  },
  todoButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

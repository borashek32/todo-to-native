import React, { useEffect } from "react";
import { AddItemForm } from "./../../common/components/AddItemForm/AddItemForm";
import { Todolist } from "./../../features/todolists/Todolist/Todolist";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTodolistsList } from "./../../features/todolists/hooks/useTodolistsList";

type PropsType = {
  demo?: boolean;
};

export const TodolistsList: React.FC<PropsType> = ({ demo = false }) => {
  const { todolists, tasks, isLoggedIn, fetchTodolists, addTodolist } =
    useTodolistsList();

  useEffect(() => {
    fetchTodolists();
  }, []);

  return (
    <ScrollView>
      <View style={styles.addItemWrapper}>
        <AddItemForm addItem={addTodolist} />
      </View>
      <View style={styles.wrapper}>
        {todolists.map((tl) => {
          let allTodolistTasks = tasks[tl.id];

          return (
            <View key={tl.id}>
              <View>
                <Todolist todolist={tl} tasks={allTodolistTasks} demo={demo} />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addItemWrapper: {
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: "column",
    gap: 50,
  },
});

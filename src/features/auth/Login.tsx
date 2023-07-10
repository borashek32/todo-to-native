import React, { useState } from "react";
import { useAppDispatch } from "./../../common/hooks/use-app-dispatch";
import { authThunks } from "./../../features/auth/auth.slice";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// borashek@inbox.ru
// natashapolinaigor

export const Login = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () =>
    dispatch(authThunks.login({ email, password, rememberMe: true }));

  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder={"Password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity onPress={handleLogIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 30,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    width: 350,
    height: 40,
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  button: {
    backgroundColor: "#0D6EFD",
    borderRadius: 20,
    width: 250,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOutlined: {
    backgroundColor: "#fff",
    color: "#0D6EFD",
    borderWidth: 1,
    borderColor: "#0D6EFD",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonTextOutlined: {
    color: "#0D6EFD",
  },
});

import Main from "./../app/Main";
import { Login } from "./../features/auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./../features/auth/auth.selectors";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        {isLoggedIn ? (
          <Stack.Screen name={"Main"} component={Main} />
        ) : (
          <Stack.Screen name={"Login"} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

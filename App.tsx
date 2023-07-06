import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Main from "./src/app/Main"
import {Login} from "./src/features/auth/Login"
import {Provider} from "react-redux"
import {store} from "./src/app/store"


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Login"}>
          <Stack.Screen name={"Main"} component={Main} />
          {/*<Stack.Screen name={"Login"} component={Login} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

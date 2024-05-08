import LogInRegister from "./Screens/LogInRegister";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="LogInRegister">
        <Stack.Screen name="LogInRegister" component={LogInRegister}/>
        <Stack.Screen name="LogIn" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
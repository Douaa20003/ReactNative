import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import TodoListFetchScreen from "./screens/TodoListFetchScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";


function RootNavigator() {
const { user } = useContext(AuthContext);
return user ? <AppDrawer /> : <LoginScreen />;
}

function MainApp() {
const { theme } = useContext(ThemeContext);
return (
<View
style={[styles.container,
theme === "dark" ? styles.dark : styles.light,
]}
>
<TodoListFetchScreen />
</View>
);
}

export default function App() {
return (
 <Provider store={store}>
 <AuthProvider>
 <NavigationContainer>
 <RootNavigator />
 </NavigationContainer>
 <ThemeProvider>
<MainApp />
</ThemeProvider>
 </AuthProvider>
 </Provider>
 
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 40,
},
light: {
backgroundColor: "#ffffff",
},
dark: {
backgroundColor: "#121212",
},
});
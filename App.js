import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Menu } from "./src/components/Menu";
import { Login } from "./src/pages/Login";


const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Menu" component={ Menu } options={{ headerShown: false }} />
				<Stack.Screen name="Login" component={ Login } options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

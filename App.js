import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CollectionsProvider } from "./src/providers/CollectionsProvider";
import { FlashcardProvider } from "./src/providers/FlashcardProvider";

import { Menu } from "./src/components/Menu";
import { Login } from "./src/screens/Login";
import { FlashCards } from "./src/screens/Flashcards";
import { Play } from "./src/screens/Play";
import { Play1 } from "./src/screens/Play1";

import { Play2 } from "./src/screens/Play2";

import { Play3 } from "./src/screens/Play3";
import { EditCard } from "./src/screens/EditCard";
import { NewCard } from "./src/screens/NewCard";
import { EditCollection } from "./src/screens/EditCollection";
import { NewCollection } from "./src/screens/NewCollection";
import { SignUp } from "./src/screens/SignUp";


const Stack = createStackNavigator();
const App = () => {
	return (
		<CollectionsProvider>
			<FlashcardProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Menu" component={ Menu } options={{ headerShown: false }} />
						<Stack.Screen name="SignUp" component={ SignUp } options={{ headerShown: false }} />
						<Stack.Screen name="Login" component={ Login } options={{ headerShown: false }} />
						<Stack.Screen name="Objetos" component={ FlashCards } options={{ headerShown: false }} />
						<Stack.Screen name="Novo Flashcard" component={ NewCard } options={{ headerShown: false }} />
						<Stack.Screen name="Editar Flashcard" component={ EditCard } options={{ headerShown: false }} />
						<Stack.Screen name="Nova Coleção" component={ NewCollection } options={{ headerShown: false }} />
						<Stack.Screen name="Editar Coleção" component={ EditCollection } options={{ headerShown: false }} />

						<Stack.Screen name="Jogar" component={ Play } options={{ headerShown: false }} />
						<Stack.Screen name="Jogar 1" component={ Play1 } options={{ headerShown: false }} />
						<Stack.Screen name="Jogar 2" component={ Play2 } options={{ headerShown: false }} />
						<Stack.Screen name="Jogar 3" component={ Play3 } options={{ headerShown: false }} />
					</Stack.Navigator>
				</NavigationContainer>
			</FlashcardProvider>
		</CollectionsProvider>
	);
};

export default App;

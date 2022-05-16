/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import profilePicture from "../../assets/pp.jpg";

import { EditCard } from "../../screens/EditCard";
import { EditCollection } from "../../screens/EditCollection";
import { Login } from "../../screens/Login";
import { MyCollections } from "../../screens/MyCollections";
import { NewCard } from "../../screens/NewCard";
import { NewCollection } from "../../screens/NewCollection";
import { FlashCards } from "../../screens/Flashcards";
import { Play } from "../../screens/Play";
import { Play1 } from "../../screens/Play1";
import { Play2 } from "../../screens/Play2";
import { Play3 } from "../../screens/Play3";
import { SignUp } from "../../screens/SignUp";


const Drawer = createDrawerNavigator();

export const Menu = () => {

	return (
		<>
			<Drawer.Navigator initialRouteName="Minhas coleções" screenOptions={{ drawerStyle: styles.drawerStyle, headerShown: false, drawerLabelStyle: { color: "#FFF" }}}  drawerContent={ (props) => <CustomDrawerContent {...props} /> }>
				<Drawer.Screen
					name="Minhas coleções"
					component={ MyCollections }
					options={ {drawerIcon: result => <Icon name="sliders" style={ styles.icon } />} }
				/>
			</Drawer.Navigator>
		</>
	);
};

function ProfileDrawer(props) {
	return (
		<TouchableOpacity onPress={ () => props.navigation.navigate("Login")}>
			<View style={ styles.profileContainer }>
				<View style={ styles.profileImageContainer }>
					<Image style={ styles.profileImage } source={ profilePicture } />
				</View>
				<View>
					<Text style={ styles.profileName }>Thalles Garbelotti</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView { ...props }>
			<ProfileDrawer { ...props } />
			<DrawerItemList { ...props } />
			<DrawerItem
				style={ styles.icon }
				label="Logout"
				labelStyle={{ color: "#FFF" }}
				onPress={ navigation => navigation.popToTop() }
				icon={ ()=> <Icon name="arrow-left" style={ styles.icon } /> }
			/>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	profileContainer: {
		width: 200,
		height: 250,
		marginBottom: 15,
		alignSelf: "center",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		borderBottomWidth: 1,
		borderBottomColor: "#EDEDED",
	},
	profileImage: {
		width: 128,
		height: 128,
		marginTop: 50,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: "#F0F0",
	},
	profileName: {
		fontSize: 16,
		color: "#FFFFFF",
	},
	drawerStyle: {
		width: 240,
		backgroundColor: "#25213E",
		color: "#FFF"

	},
	icon: {
		fontSize: 30,
		color: "#FFF"
	}
});
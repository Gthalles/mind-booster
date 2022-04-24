/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";


import { Login } from "../../pages/Login";
import { Home } from "../../pages/Home";

const Drawer = createDrawerNavigator();

export const Menu = () => {
	return (
		<Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen
				name="Minhas coleções"
				component={ Home }
				options={ {drawerIcon: result => <Icon name="sliders" style={ styles.icon } />}}
			/>
			<Drawer.Screen
				name="Logout"
				component={ Login }
				options={ {drawerIcon: result => <Icon name="arrow-left" style={ styles.icon } />}}
			/>
		</Drawer.Navigator>
	);
};

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView { ...props }>
			<DrawerItemList { ...props } />
			<DrawerItem style={ styles.icon } label="Logout" onPress={ () => { props.popToTop(); }} labelStyle={ {color: "#FFF", fontSize: 18 }} icon={ ()=> <Icon name="sign-out" fontSize={ 30 } color={ "#FFF" } />} />
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	drawerStyle: {
		width: 250,
		backgroundColor: "#D694B8"
	},
	icon: {
		fontSize: 30,
		color: "#FFF"
	}
});


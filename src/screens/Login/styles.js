import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	logo: {
		marginTop: -70,
		alignSelf: "center",
		width: 132,
		height: 132,
	},
	logoImage: {
		width: "100%",
	},
	title: {
		marginTop: -20,
		marginBottom: 30,
		fontFamily: "Pacifico-Regular",
		fontSize: 45,
		textAlign: "center",
		color: "#FFFFFF",
	},
	form: {
		marginTop: 50,
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	input: {
		width: 310,
		paddingHorizontal: 10,
		marginTop: 12,
		textAlign: "left",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
		backgroundColor: "#FFFFFF",
		borderBottomWidth: 3,
		borderBottomColor: "#6200EE",
	},
	link: {
		marginTop: 5,
		color: "#FFFFFF",
		fontWeight: "700",
		alignSelf: "flex-end"
	},
	buttonContainer: {
		height: 240,
		marginTop: 21,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
});
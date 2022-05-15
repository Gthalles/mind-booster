import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 64,
		display: "flex",
		flexDirection: "row",
		marginTop: -100,
	},
	logoImage: {
		width: 64,
		height: 64,
	},
	title: {
		fontFamily: "Pacifico-Regular",
		fontSize: 28,
		color: "#FFFFFF",
	},
	textContent: {
		color: "#FFFFFF",
		fontSize: 28,
		textAlign: "center",
		marginTop: 75
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
	errorMessage: {
		marginTop: 5,
		fontSize: 12,
		color: "#FF5353",
		fontWeight: "700",
		alignSelf: "flex-start"
	},
	buttonContainer: {
		height: 240,
		marginTop: 21,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
});
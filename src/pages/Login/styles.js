import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const styles = StyleSheet.create({
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.White,
	},
	logo: {
		marginTop: 47,
		alignSelf: "center",
		width: 132,
		height: 132,
	},
	logoImage: {
		width: "100%",
	},
	title: {
		fontFamily: "Pacifico-Regular",
		fontSize: 54,
		color: "#FFFFFF",
	},
	form: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	input: {
		width: "100%",
		marginTop: 12,
		textAlign: "left",
		backgroundColor: "#FFFFFF",
		borderBottomColor: "#707070",
	},
	link: {
		marginTop: 5,
		color: "#FFFFFF",
		fontWeight: "700",
		alignSelf: "flex-end"
	},
	buttonContainer: {
		height: 200,
		marginTop: 21,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
});
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    position: "absolute",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    zIndex: 1
  },
  boxName: {
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: 'center',
    gap: 5,
  },
  textName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  icon: {
    width: 14,
    height: 15,
  },
});

export default styles;

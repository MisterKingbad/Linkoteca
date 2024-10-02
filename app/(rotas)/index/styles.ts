import { StyleSheet } from "react-native"
import { colors } from "@/src/styles/colors"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      // alignItems: "center"
      paddingTop: 32
    },
    title: {
      color: colors.gray[800],
      fontSize: 22
    },
    header: {
      paddingHorizontal: 24,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 32
    },
    logo: {
      height: 32,
      width: 38,
    }
  })
  
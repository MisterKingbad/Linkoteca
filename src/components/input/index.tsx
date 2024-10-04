import React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/src/styles/colors";

export function Input({...rest}:Readonly<TextInputProps>) {
    return (
        <TextInput style={styles.container} placeholder={colors.gray[400]} {...rest}/>
    )
}


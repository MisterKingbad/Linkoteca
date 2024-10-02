import React from "react";
import { Text, Pressable, type PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/src/styles/colors";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ name, icon, isSelected, ...rest }: Readonly<Props>) {
  const color = isSelected ? colors.green[300] : colors.gray[400];
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}

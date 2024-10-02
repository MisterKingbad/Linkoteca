import React from "react";
import { FlatList } from "react-native";

import { styles } from "./styles";
import { categories } from "@/src/utils/categories";
import { Category } from "../category";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
    />
  );
}

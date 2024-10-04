import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Categories } from "@/src/components/categories";
import { Input } from "@/src/components/input";
import { Button } from "@/src/components/button";

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories/>

      <View style={styles.form}>
        <Input placeholder="Nome"/>
        <Input placeholder="Url"/>
        <Button title="Adicionar"/>
      </View>
    </View>
  );
}

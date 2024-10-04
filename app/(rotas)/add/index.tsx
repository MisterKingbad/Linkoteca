import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Categories } from "@/src/components/categories";
import { Input } from "@/src/components/input";
import { Button } from "@/src/components/button";

export default function Add() {
  const [form, setForm] = useState({
    name: "",
    url: ""
  })
  const [category, setCategory] = useState("")

  const handleAdd = () => {
    if (!category) {
      return Alert.alert("Categoria", "Selecione a categoria")
    }

    if (!form.name.trim()) {
      return Alert.alert("Nome", "Informe o nome")
    }

    if (!form.url.trim()) {
      return Alert.alert("URL", "Informe a url")
    }
    console.log(form)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category}/>

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={(v) => setForm({...form, name: v})}/>
        <Input placeholder="URL" onChangeText={(v) => setForm({...form, url: v})}/>
        <Button title="Adicionar" onPress={handleAdd}/>
      </View>
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { linkStorage } from "@/src/storage/link-storage";

import { Categories } from "@/src/components/categories";
import { Input } from "@/src/components/input";
import { Button } from "@/src/components/button";

export default function Add() {
  const [form, setForm] = useState({
    name: "",
    url: "",
    category: ""
  })

  const handleAdd = async () => {
    try {
      if (!form.category) {
        return Alert.alert("Categoria", "Selecione a categoria")
      }
  
      if (!form.name.trim()) {
        return Alert.alert("Nome", "Informe o nome")
      }
  
      if (!form.url.trim()) {
        return Alert.alert("URL", "Informe a url")
      }

      await linkStorage.save({ ...form, id: new Date().getTime().toString() })
      Alert.alert("Sucesso", "Link adicionado com sucesso!")
    } catch (err) {
      Alert.alert("Erro", `Não foi possível salvar o link: ${err}`)
    }
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
      <Categories onChange={(v) => setForm({...form, category: v})} selected={form.category}/>

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={(v) => setForm({...form, name: v})}/>
        <Input placeholder="URL" onChangeText={(v) => setForm({...form, url: v})}/>
        <Button title="Adicionar" onPress={handleAdd}/>
      </View>
    </View>
  );
}

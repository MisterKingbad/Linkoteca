import React from "react"
import { Image, View, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/src/styles/colors"

import { Category } from "@/src/components/category"

export default function Home () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo}/>

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.gray[100]}/>
        </TouchableOpacity>
      </View>
      <Category name="Projeto" icon="code"/>
      <Category name="Site" icon="language"/>
      <Category name="Video" icon="movie"/>
    </View>
  )
}


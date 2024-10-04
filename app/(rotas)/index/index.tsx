import React from "react"
import { Image, View, TouchableOpacity, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/src/styles/colors"

import { Link } from "@/src/components/link"
import { Categories } from "@/src/components/categories"

export default function Home () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo}/>

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.gray[100]}/>
        </TouchableOpacity>
      </View>
      <Categories/>

      <FlatList
        data={["1", "2", "3", "4", "5", "6"]}
        keyExtractor={item => item}
        renderItem={() => (
            <Link name="e" url="" onDetails={() => console.log("click")}/>
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  )
}


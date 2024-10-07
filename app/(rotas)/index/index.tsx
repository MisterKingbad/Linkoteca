import React, { useCallback, useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import { type LinkStorage, linkStorage } from "@/src/storage/link-storage";

import { Link } from "@/src/components/link";
import { Categories } from "@/src/components/categories";
import { Option } from "@/src/components/option";
import { categories } from "@/src/utils/categories";

export default function Home() {
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

  const getLinks = async () => {
    try {
      const res = await linkStorage.get();

      const filtered = res.filter((link) => link.category === category);
      setLinks(filtered);
    } catch (err) {
      Alert.alert("erro", `Não foi possível listar os links. ${err}`);
    }
  };

  const handleDetails = (selected: LinkStorage) => {
    setShowModal(true);
    setLink(selected);
  };

  const linkRemove = async () => {
    try {
      await linkStorage.remove(link.id);
      getLinks();
      setShowModal(false);
    } catch (err) {
      Alert.alert("erro", `Não foi possível excluir o link. ${err}`);
    }
  };

  const handleRemove = () => {
    Alert.alert("Excluir", "Deseja realmente excluir?", [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: linkRemove },
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>
      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{link.category}</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{link.name}</Text>
            <Text style={styles.modalUrl}>{link.url}</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove}/>
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

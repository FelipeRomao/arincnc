import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  ScrollView,
  AsyncStorage,
  Image,
  StyleSheet
} from "react-native";

import logo from "../assets/logo.png";
import SpotList from "../components/SpotList";

function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storagedTechs => {
      const techsArray = storagedTechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <ScrollView>
        {techs.map(tech => (
          <SpotList tech={tech} key={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50
  }
});

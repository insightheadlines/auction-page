import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import Separator from "../util/Seperator";
import Display from "../util/Display";

const ActivityLoader = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" translucent />
    <Separator height={StatusBar.currentHeight} />
    <Separator height={Display.setHeight(2)} />
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#15C077" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },

  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityLoader;

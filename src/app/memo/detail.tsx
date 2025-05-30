import { JSX } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "../../components/Icon";

import { router } from "expo-router";
import CircleButton from "../../components/CircleButton";

const handlePress = (): void => {
  router.push("/memo/edit");
};
const detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>1 2 3 4 5 6 7</Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 60, bottom: "auto" }}>
        <Icon name="pencil" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
});

export default detail;

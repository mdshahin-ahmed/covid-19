import { SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import Text from "../Components/Text/Text";
import { colors } from "../Theme/Colors";
import { View } from "react-native-web";
import { Feather, AntDesign } from "@expo/vector-icons";
import { spacing } from "../Theme/Spacing";

export default function Home({ navigation }) {
  const detailsPage = () => {
    return navigation.navigate("Details");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.banner}>
          <View style={styles.menuWrap}>
            <Image
              style={styles.menu}
              source={require("../images/menu.png")}
            ></Image>
            <Feather name="bell" size={24} color="white" />
          </View>
          <View style={styles.headerWrap}>
            <Text>Covid-19</Text>
            <View>
              <Image
                style={styles.menu}
                source={require("../images/flag.png")}
              ></Image>
              <View></View>
              <Text>USA</Text>
              <AntDesign name="caretdown" size={24} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.purple,
    paddingHorizontal: spacing[6],
  },
  menuWrap: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu: {
    height: 18,
    width: 24,
  },
  headerWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
});

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
            <Text preset="h1">Covid-19</Text>
            <View style={styles.dropDownWrap}>
              <Image
                style={styles.flag}
                source={require("../images/flag.png")}
              ></Image>
              <View></View>
              <Text style={styles.usa}>USA</Text>
              <AntDesign name="caretdown" size={24} color="#61688B" />
            </View>
          </View>
          <Text preset="h2" style={{ marginTop: 40 }}>
            Are you feeling sick?
          </Text>
          <Text preset="small" style={styles.small}>
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
          <View style={styles.buttonWrap}>
            <View style={styles.callButton}>
              <Text>Call Now</Text>
            </View>
            <View style={styles.smsButton}>
              <Text>Send SMS</Text>
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
    marginTop: 40,
    alignItems: "center",
  },
  dropDownWrap: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: 25,
    alignItems: "center",
  },
  flag: {
    height: 30,
    width: 30,
  },
  usa: {
    marginHorizontal: spacing[4],
    fontWeight: "bold",
    color: colors.purpleText,
  },
  small: {
    fontWeight: 400,
    lineHeight: 22,
    marginTop: spacing[5],
    opacity: 0.8,
  },
  buttonWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  callButton: {
    backgroundColor: colors.pink,
    paddingHorizontal: spacing[10],
    paddingVertical: spacing[5],
    borderRadius: spacing[7],
  },
  smsButton: {
    backgroundColor: colors.blue,
    paddingHorizontal: spacing[10],
    paddingVertical: spacing[5],
    borderRadius: spacing[7],
  },
});

import { SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import Text from "../Components/Text/Text";
import { colors } from "../Theme/Colors";
import { View } from "react-native-web";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { spacing } from "../Theme/Spacing";
import { LinearGradient } from "expo-linear-gradient";

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
              <Ionicons name="call" size={24} color="white" />
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Call Now
              </Text>
            </View>
            <View style={styles.smsButton}>
              <Feather name="message-circle" size={24} color="white" />
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Send SMS
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <Text
            preset="h2"
            style={{
              marginTop: 31,
              color: colors.purpleText,
              fontWeight: "bold",
              marginBottom: 25,
            }}
          >
            Prevention
          </Text>
        </View>
        <View style={styles.mainImageWrap}>
          <View style={styles.imageTextWrap}>
            <Image
              style={styles.mainImage}
              source={require("../images/XMLID_1.png")}
            ></Image>
            <Text
              preset="h4"
              style={{ color: colors.purpleText, textAlign: "center" }}
            >
              Avoid close contact
            </Text>
          </View>
          <View style={styles.imageTextWrap}>
            <Image
              style={styles.mainImage}
              source={require("../images/XMLID_2.png")}
            ></Image>
            <Text
              preset="h4"
              style={{ color: colors.purpleText, textAlign: "center" }}
            >
              Clean your hands often
            </Text>
          </View>
          <View style={styles.imageTextWrap}>
            <Image
              style={styles.mainImage}
              source={require("../images/XMLID_3.png")}
            ></Image>
            <Text
              preset="h4"
              style={{ color: colors.purpleText, textAlign: "center" }}
            >
              Wear a facemask
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={["#AEA1E5", "#56549E"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.test}
        >
          <Image
            style={styles.testImage}
            source={require("../images/Group.png")}
          ></Image>
          <View style={styles.testTextWrap}>
            <Text
              preset="h3"
              style={{ fontWeight: "bold", color: colors.white }}
            >
              Do your own test!
            </Text>
            <Text preset="small" style={styles.testSmall}>
              Follow the instructions to do your own test.
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.purple,
    paddingHorizontal: spacing[6],
    borderBottomRightRadius: spacing[8],
    borderBottomLeftRadius: spacing[8],
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
    marginVertical: 31,
  },
  callButton: {
    backgroundColor: colors.pink,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
    borderRadius: spacing[7],
    flexDirection: "row",
    alignItems: "center",
  },
  smsButton: {
    backgroundColor: colors.blue,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
    borderRadius: spacing[7],
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    paddingHorizontal: spacing[5],
  },
  mainImageWrap: {
    flex: 1,
    flexDirection: "row",
  },
  imageTextWrap: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainImage: {
    flex: 1,
    height: 88,
    width: 88,
    resizeMode: "container",
    marginHorizontal: "auto",
    marginBottom: spacing[3],
  },
  test: {
    marginHorizontal: spacing[6],
    backgroundColor: colors.purple,
    flexDirection: "row",
    marginTop: 44,
    paddingVertical: spacing[6],
    paddingHorizontal: spacing[3],
    borderRadius: spacing[3],
    marginBottom: 90,
    // background: "linear-gradient(colors.blue, colors.pink)",
  },
  testImage: {
    flex: 1,
    marginTop: -35,
    height: 110,
    width: 115,
    resizeMode: "contain",
  },
  testTextWrap: {
    flex: 4,
  },
  testSmall: {
    fontWeight: 400,
    lineHeight: 22,
    marginTop: spacing[3],
    opacity: 0.8,
  },
});

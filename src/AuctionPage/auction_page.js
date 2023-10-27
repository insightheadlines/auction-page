import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Separator from "../util/Seperator";
import Display from "../util/Display";
import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import ActivityLoader from "../ActivityLoader/ActivityLoader";
import { Entypo, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import BoxItem from "../Component/BoxItem";

const AuctionPage = () => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  const [activeTab, setActiveTab] = useState("live");
  const [apiData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://auction.riolabz.com/v1/auction/get/all/public?page=1&limit=10&timeStatus=LIVE"
        );
        const data = response.data;
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderHeader = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{
              width: 39,
              height: 39,
              backgroundColor: "#EAEAEA",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Pressed Menu")}
          >
            <Entypo name="menu" size={26} color="#9A9EA7" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <Feather
              name="search"
              style={{ paddingLeft: 10, paddingTop: 3 }}
              size={18}
              color="#9A9EA7"
            />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#0D0A19"
              selectionColor="black"
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 14,
                paddingHorizontal: 10,
                width: "100%",
              }}
              defaultValue="Infinity.."
              onChangeText={(text) => console.log(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              width: 39,
              height: 39,
              backgroundColor: "#EAEAEA",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Pressed Account")}
          >
            <MaterialCommunityIcons name="account" size={22} color="#9A9EA7" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            alignItems: "center",
            paddingVertical: 5,
            borderRadius: 10,
            paddingHorizontal: 10,
            elevation: 2,
            backgroundColor: "white",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
              }}
              onPress={() => handleTabChange("live")}
            >
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: activeTab === "live" ? "#FFC527" : "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Inter_500Medium",
                    color: "#535353",
                  }}
                >
                  Live Auction
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
              }}
              onPress={() => handleTabChange("upcoming")}
            >
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  justifyContent: "center",
                  backgroundColor:
                    activeTab === "upcoming" ? "#FFC527" : "#FFFFFF",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Inter_500Medium",
                    color: "#535353",
                  }}
                >
                  Upcoming
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const renderArticle = useMemo(() => {
    return ({ item, index }) => <BoxItem item={item} index={index} />;
  }, []);

  if (!fontsLoaded) {
    return <ActivityLoader />;
  } else if (loading) {
    return <ActivityLoader />;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F9F9F9"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      {activeTab === "live" && (
        <FlatList
          data={apiData}
          renderItem={renderArticle}
          ListHeaderComponent={renderHeader}
          keyExtractor={(item, index) => item.auctionNo}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.1}
          initialNumToRender={10}
          windowSize={10}
        />
      )}

      {activeTab === "upcoming" && renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F5",
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    elevation: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default AuctionPage;

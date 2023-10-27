import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Image,
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
import { FontAwesome5, Entypo, FontAwesome } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import React from "react";

const BoxItem = ({ item, index, onPress }) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  const mappedVehicles = item.buyers.flatMap((item) => item.vehicles);

  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,

        elevation: 5,
        borderRadius: 5,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingStart: 10,
          paddingBottom: 5,
        }}
      >
        <Text
          style={{
            color: "#FF0000",
            fontSize: 12,
            fontFamily: "Inter_600SemiBold",
          }}
        >
          • Live
        </Text>
        <View
          style={{
            backgroundColor: "#FFC8BF",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#FF0000",
              fontSize: 10,
              paddingHorizontal: 10,
              textTransform: "capitalize",
              fontFamily: "Inter_600SemiBold",
            }}
          >
            {item.format}
          </Text>
        </View>
        <FontAwesome5
          name="clipboard-list"
          style={{ paddingHorizontal: 12 }}
          size={14}
          color="black"
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          paddingTop: 5,
          paddingBottom: 5,

          borderBottomWidth: 0.7,
          borderStyle: "dotted",
          borderColor: "#9A9EA7",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            letterSpacing: -0.1,
            fontFamily: "Inter_700Bold",
            textTransform: "capitalize",
          }}
        >
          {item.name}
        </Text>
      </View>
      {item.vehicleType.map((type, index) => (
        <View
          key={index}
          style={{
            marginHorizontal: 10,
            paddingVertical: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 10,

              borderBottomWidth: 1,
              borderStyle: "dotted",
              borderColor: "#9A9EA7",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#000000",
                fontFamily: "Inter_500Medium",
                textTransform: "capitalize",
                paddingBottom: 2,
                paddingEnd: 5,
              }}
            >
              Vechile Types :
            </Text>

            <SvgUri width={20} height={20} uri={type.image} />
          </View>
        </View>
      ))}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
        }}
      >
        {mappedVehicles.map((type, index) => (
          <View
            key={index}
            style={{
              marginStart: 10,

              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                paddingEnd: 4,
                fontFamily: "Inter_500Medium",
              }}
            >
              {type.noOfVehicles}
            </Text>

            <Text style={{ fontFamily: "Inter_500Medium", fontSize: 13 }}>
              Vehicles
            </Text>
          </View>
        ))}
        <View
          style={{
            flexDirection: "column",
            borderLeftWidth: 0.6,
            marginHorizontal: 10,
            paddingHorizontal: 10,

            borderColor: "#9A9EA7",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 12,
            }}
          >
            {`Ends at : ${item.endTimestamp}`}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 12,
              paddingVertical: 5,
            }}
          >
            {`Auction Type : ${item.businessType}`}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 12,
            }}
          >
            {`Auction ID : ${item.auctionNo}`}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          paddingVertical: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFC527",
            paddingHorizontal: 10,
            paddingVertical: 10,
            flex: 1,

            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 14,
              color: "white",
              textAlign: "center",
            }}
          >
            View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 39,
            height: 39,
            backgroundColor: "#EAEAEA",
            borderRadius: 5,
            marginStart: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.log("Pressed Menu")}
        >
          <FontAwesome name="download" size={20} color="#9A9EA7" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#09B806",
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1,
          marginVertical: 5,
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 14,
            color: "white",
            textAlign: "center",
          }}
        >
          Pay to Register
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default React.memo(BoxItem);

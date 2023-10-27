import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuctionPage from "../AuctionPage/auction_page";

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auction" component={AuctionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

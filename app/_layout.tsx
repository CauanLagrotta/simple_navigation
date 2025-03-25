import { Drawer } from "expo-router/drawer";
import { CustomDrawer } from "../components/custom-drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            title: "About",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="info-circle" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
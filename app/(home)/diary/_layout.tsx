import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// Icons
import { Gear } from "@/components/icons/Gear";
import { Lock } from "@/components/icons/Lock";
import { IconProps } from "@/types/layout";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={options.gesture}>
      <Drawer screenOptions={options.drawer}>
        <Drawer.Screen name="index" options={options.index} />
        <Drawer.Screen name="settings/index" options={options.settings} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// Options sheet
const options = {
  gesture: { flex: 1 },
  drawer: { headerTitle: "", headerTransparent: true },
  index: {
    drawerLabel: "Diary",
    title: "Diary",
    drawerIcon: ({ color, size }: IconProps) => (
      <Lock size={size} color={color} />
    ),
  },
  settings: {
    drawerLabel: "Settings",
    title: "Settings",
    drawerIcon: ({ color, size }: IconProps) => (
      <Gear size={size} color={color} />
    ),
  },
};

import { Tabs } from "expo-router";
import { IconProps } from "@/types/layout";

// Icons
import { Lock } from "@/components/icons/Lock";
import { Chat } from "@/components/icons/Chat";
import { Heart } from "@/components/icons/Heart";

const HomeLayout = () => {
  return (
    <Tabs screenOptions={options.tabs}>
      <Tabs.Screen name="index" options={options.index} />
      <Tabs.Screen name="chat" options={options.chat} />
      <Tabs.Screen name="feedback" options={options.feedback} />
      <Tabs.Screen name="diary" options={options.diary} />
    </Tabs>
  );
};

// Options sheet
const options = {
  tabs: { headerShown: false },
  index: { href: null },
  chat: {
    title: "Chat",
    tabBarIcon: ({ color, size }: IconProps) => (
      <Chat color={color} size={size} />
    ),
  },
  feedback: {
    title: "Feedback",
    tabBarIcon: ({ color, size }: IconProps) => (
      <Heart color={color} size={size} />
    ),
  },
  diary: {
    title: "Diary",
    tabBarIcon: ({ color, size }: IconProps) => (
      <Lock color={color} size={size} />
    ),
  },
};

export default HomeLayout;

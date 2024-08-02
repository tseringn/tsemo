import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="play"
        options={{
          title: "Play",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "play" : "play-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "How to play",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "info" : "info"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

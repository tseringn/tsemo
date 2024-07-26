import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CheersShake } from "@/components/Cheers";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={require("@/assets/images/sandpaper.svg")} style={styles.reactLogo} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.instructionsContainer}>
        <ThemedText type="subtitle">Background</ThemedText>
        <ThemedText>
          This is a Tibetan traditional board game called King's trailing, ༼རྒྱལ་པོ་རྗེས་སྣུད།༽. It
          is a fun PVP chess like board game you can enjoy with your friends. I had lot of fun
          making it, hope you will have fun playing it as well! Cheers
          <CheersShake />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.instructionsContainer}>
        <ThemedText type="subtitle">How to play?</ThemedText>
        <ThemedText>
          There is one king and seven queens. The goal of queens is to imprison King by surrounding
          the King by two steps every direction. The goal of the King is to kick out all the queens
          by jumping over a queen.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  instructionsContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    objectFit: "fill",
  },
});

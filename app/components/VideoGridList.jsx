import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Color from "../shared/Color";

const VideoGridList = () => {
  const VideoList = [
    {
      id: 1,
      name: "Make Video Using ChatGPT",
      imageUrl: "https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 2,
      name: "10 Skills AI made useless",
      imageUrl: "https://i.ytimg.com/vi/EgEW5KP6I2A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 4,
      name: "Make Video Using ChatGPT",
      imageUrl: "https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 3,
      name: "UI Design Tutorial",
      imageUrl: "https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg",
      url: "P1_ciTwn6fE",
    },
    {
      id: 12,
      name: "Make Video Using ChatGPT",
      imageUrl: "https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 28,
      name: "10 Skills AI made useless",
      imageUrl: "https://i.ytimg.com/vi/EgEW5KP6I2A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 42,
      name: "Make Video Using ChatGPT",
      imageUrl: "https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 53,
      name: "UI Design Tutorial",
      imageUrl: "https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg",
      url: "P1_ciTwn6fE",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Videos</Text>
      <FlatList
        data={VideoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              resizeMode="cover"
              style={styles.videoImage}
            />
            <Text style={styles.videoName}>{item.name}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default VideoGridList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  videoImage: {
    width: Dimensions.get("screen").width * 0.45,
    height: 70,
    borderRadius: 10,
  },
  videoContainer: {
    margin: 5,
  },

  videoName: {
    color: "gray",
    fontSize: 12,
  },
});

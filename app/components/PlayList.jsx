import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Color from "../shared/Color";

const PlayList = () => {
  const courseList = [
    {
      id: 1,
      name: "Ultimate Angular Tutorial",
      imageUrl: "https://i.ytimg.com/vi/NlGkd7TlBDs/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "Figma UI/UX Tutorial",
      imageUrl: "https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg",
    },
    {
      id: 3,
      name: "React Tutorial",
      imageUrl: "https://i.ytimg.com/vi/nXyQYpalYgg/maxresdefault.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top courses List</Text>

      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.imageUrl }}
              resizeMode="cover"
              style={styles.courseImage}
            />
            <Text style={styles.imageName}>{item.name}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  courseImage: {
    width: 220,
    height: 100,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  imageName: {
    color: Color.white,
    margin: 4,
  },
});

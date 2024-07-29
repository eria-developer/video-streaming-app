import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    setSliderImages([
      {
        id: 1,
        name: "Slider 1",
        imageUrl: "https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg",
      },
      {
        id: 2,
        name: "Slider 2",
        imageUrl: "https://i.ytimg.com/vi/_5-1wVJvxSY/maxresdefault.jpg",
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={sliderImages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.sliderImage}
              resizeMode="cover"
            />
          </View>
        )}
        horizontal
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("screen").width * 0.65,
    // width: 250,
    height: 200,
    marginTop: 15,
    borderRadius: 15,
    marginRight: 15,
  },
});

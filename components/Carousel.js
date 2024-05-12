import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/af7e7374133329.5c238353cf7ee.jpg",
    ];
    return (
        <View>
            <SliderBox images={images} autoplay circleLoop dotColor="#13274F" inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius: 6,
                    width: "94%",
                    marginTop: 10
                }}
            />
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({});